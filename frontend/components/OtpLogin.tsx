import PhoneInput from 'react-phone-input-2';
import React, { FormEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { TransitionLink } from '@/utils/TransitionLink';

// Create axios instance with default config
const api = axios.create({
    baseURL: 'http://localhost:5001',
    withCredentials: true
});

interface OtpLoginProps {
    isRegistration?: boolean;
    name?: string;
    email?: string;
}

interface ErrorState {
    type: 'error' | 'success' | 'info' | null;
    message: string;
}

const OtpLogin: React.FC<OtpLoginProps> = ({ isRegistration = false, name = '', email = '' }) => {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState<ErrorState>({ type: null, message: '' });
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resendTimer, setResendTimer] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const darkModeCheck = () => {
                setIsDarkMode(document.documentElement.classList.contains('dark'));
            };
            darkModeCheck();
            const observer = new MutationObserver(darkModeCheck);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class'],
            });
            return () => observer.disconnect();
        }
    }, []);

    // Start resend timer
    const startResendTimer = () => {
        setResendTimer(30);
        const interval = setInterval(() => {
            setResendTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const validatePhone = (phone: string) => {
        return phone.length >= 10;
    };

    const validateOtp = (otp: string) => {
        return /^\d{6}$/.test(otp);
    };

    const sendOtp = async () => {
        // Reset error state
        setError({ type: null, message: '' });

        // Validate phone
        if (!validatePhone(phone)) {
            setError({ type: 'error', message: 'Please enter a valid phone number (at least 10 digits)' });
            return;
        }

        // Validate registration fields
        if (isRegistration) {
            if (!name.trim()) {
                setError({ type: 'error', message: 'Please enter your name' });
                return;
            }
            if (!email.trim()) {
                setError({ type: 'error', message: 'Please enter your email' });
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setError({ type: 'error', message: 'Please enter a valid email address' });
                return;
            }
        }

        setIsLoading(true);
        try {
            const response = await api.post('/api/users/send-otp', { 
                phone: phone.toString(),
                isRegistration,
                ...(isRegistration && { name, email })
            });
            
            if (response.data.status === "success") {
                setOtpSent(true);
                setError({ 
                    type: 'success', 
                    message: response.data.otp 
                        ? `OTP sent successfully! (Dev OTP: ${response.data.otp})` 
                        : 'OTP sent successfully!'
                });
                startResendTimer();
            }
        } catch (error: any) {
            console.error('OTP Error:', error);
            const errorMessage = error.response?.data?.message || 'Failed to send OTP. Please try again later.';
            
            if (error.response?.status === 404) {
                setError({ 
                    type: 'error', 
                    message: isRegistration 
                        ? 'This phone number is already registered. Please login instead.'
                        : 'No user found with this phone number. Please register first.'
                });
            } else if (error.response?.status === 400) {
                setError({ 
                    type: 'error', 
                    message: errorMessage
                });
            } else {
                setError({ 
                    type: 'error', 
                    message: 'Server error. Please try again later.'
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const verifyOtp = async () => {
        // Reset error state
        setError({ type: null, message: '' });

        // Validate OTP
        if (!validateOtp(otp)) {
            setError({ type: 'error', message: 'Please enter a valid 6-digit OTP' });
            return;
        }

        setIsLoading(true);
        try {
            const response = await api.post('/api/users/verify-otp', { 
                phone: phone.toString(),
                otp: otp.toString(),
                isRegistration,
                ...(isRegistration && { 
                    userData: {
                        name,
                        email,
                        username: email.split('@')[0],
                        password: phone.toString(),
                        role: 'student'
                    }
                })
            });
            
            if (response.data.status === "success") {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setError({ type: 'success', message: 'Login successful! Redirecting...' });
                
                const userRole = response.data.user?.role || 'student';
                setTimeout(() => {
                    if (userRole === 'counselor') {
                        router.push('/counselor/dashboard');
                    } else if (userRole === 'admin') {
                        router.push('/admin');
                    } else {
                        router.push('/studentDashboard');
                    }
                }, 1000);
            }
        } catch (error: any) {
            console.error('Verify Error:', error);
            if (error.response?.data?.alreadyVerified) {
                const userData = localStorage.getItem('user');
                if (userData) {
                    const user = JSON.parse(userData);
                    const userRole = user.role || 'student';
                    if (userRole === 'counselor') {
                        router.push('/counselor/dashboard');
                    } else if (userRole === 'admin') {
                        router.push('/admin');
                    } else {
                        router.push('/studentDashboard');
                    }
                } else {
                    setError({ type: 'error', message: 'Session expired. Please request a new OTP.' });
                    setOtpSent(false);
                }
            } else {
                const errorMessage = error.response?.data?.message || 'Error verifying OTP. Please try again.';
                setError({ 
                    type: 'error', 
                    message: errorMessage
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-col gap-[1.5vw]'>
            <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => setPhone(value)}
                containerStyle={{ width: "100%", maxWidth: "30vw" }}
                inputStyle={{
                    width: "100%",
                    height: "3vw",
                    fontSize: "clamp(12px, 1vw, 18px)",
                    fontFamily: "poppins",
                    borderRadius: "3.125vw",
                    paddingLeft: "5vw",
                    backgroundColor: "transparent",
                    color: isDarkMode ? 'white' : 'black',
                    border: `1px solid ${isDarkMode ? 'white' : 'dimgray'}`,
                }}
                buttonStyle={{
                    width: "15%",
                    height: "3vw",
                    fontSize: "clamp(12px, 1vw, 18px)",
                    fontFamily: "poppins",
                    borderRadius: "3.125vw",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "default",
                }}
                dropdownStyle={{
                    backgroundColor: isDarkMode ? '#1a1a1a' : 'white',
                    color: isDarkMode ? 'white' : 'black',
                }}
                disabled={isLoading}
            />
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                className='w-[30vw] h-[3vw] font-poppins text-regularText text-black dark:text-white rounded-[6.25vw] border border-dimgrayChosen dark:border-white focus:outline-none px-[1.5vw] bg-transparent placeholder:text-dimgrayChosen dark:placeholder:text-gray-400'
                onChange={(e) => setOtp(e.target.value)}
                disabled={!otpSent || isLoading}
                maxLength={6}
            />
            
            <div className='w-[30vw]'>
                {!otpSent ? (
                    <button 
                        className={`bg-orangeChosen h-[3vw] w-[30vw] font-poppins text-regularText text-white rounded-[6.25vw] ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600 transition-colors'}`}
                        onClick={sendOtp}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send OTP'}
                    </button>
                ) : (
                    <button 
                        className={`bg-orangeChosen h-[3vw] w-[30vw] font-poppins text-regularText text-white rounded-[6.25vw] ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600 transition-colors'}`}
                        onClick={verifyOtp}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Verifying...' : 'Verify OTP'}
                    </button>
                )}
                
                {error.message && (
                    <p className={`mt-2 text-sm ${
                        error.type === 'success' ? 'text-green-500' : 
                        error.type === 'error' ? 'text-red-500' : 
                        'text-blue-500'
                    } text-right`}>
                        {error.message}
                    </p>
                )}

                {otpSent && !isLoading && (
                    <div className='mt-2 text-right'>
                        {resendTimer > 0 ? (
                            <p className='text-sm text-gray-500'>
                                Resend OTP in {resendTimer}s
                            </p>
                        ) : (
                            <button 
                                className='text-orangeChosen text-sm hover:underline'
                                onClick={() => {
                                    setOtpSent(false);
                                    setOtp('');
                                    setError({ type: null, message: '' });
                                    sendOtp();
                                }}
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OtpLogin;
