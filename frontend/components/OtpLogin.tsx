
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css"; //
import React, { FormEvent, useState, useEffect, useTransition } from 'react';
import axios from 'axios';
import "./OtpLogin.css";
import { TransitionLink } from '@/utils/TransitionLink';

const OtpLogin = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState('');

    const sendOtp = async () => {
        console.log(phone);
        try {
            const response = await axios.post('http://localhost:5000/api/users/sendOtp', { phone });
            setOtpSent(true);
            setMessage('OTP sent successfully!');
        } catch (error) {
            setMessage('Failed to send OTP');
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/verifyOtp', { phone, otp });
            if (response.data.Status === 'Success') {
                setMessage('OTP verified successfully!');
            } else {
                setMessage('Invalid OTP. Please try again.');
            }
        } catch (error) {
            setMessage('Error verifying OTP');
        }
    };


  return (
    <div className='flex flex-col gap-[1.5vw] '>
            
            
                      <PhoneInput
        country={"in"} // Default to India (+91)
        value={phone}
        onChange={(value) => setPhone(value)}
        containerStyle={{ width: "100%", maxWidth: "30vw" }} // Adjust width if needed
        inputStyle={{
          width: "100%",
          height: "3vw",
          fontSize: "clamp(12px, 1vw, 18px)",
          fontFamily: "Helvetica",
          borderRadius: "3.125vw",
          paddingLeft: "5vw", // Space for flag
          borderColor: "dimgray",
        }}
        buttonStyle={{
          width: "15%",
          height: "3vw",
          fontSize: "clamp(12px, 1vw, 18px)",
          fontFamily: "Helvetica",
          borderRadius: "3.125vw",
          
          backgroundColor: "transparent",
          border: "none",
          cursor: "default", // Prevents pointer changes
        }}
      />
      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp} 
                        className='w-[30vw] h-[3vw] font-poppins text-regularText rounded-[6.25vw] border border-dimgrayChosen dark:border-white focus:outline-none px-[1.5vw]'
                        onChange={(e) => setOtp(e.target.value)}
                    />
            {!otpSent ? 
                <div className='w-[30vw]' >
                    <button  className='bg-orangeChosen h-[3vw] w-[30vw] font-poppins text-regularText text-white rounded-[6.25vw]' onClick={sendOtp}>Send OTP</button>
                    <p className='text-red-400 text-right'>{message}</p>

                </div>
             : (
                <>

                    
                    <div className='w-[30vw]' >
                    <button  className='bg-orangeChosen h-[3vw] w-[30vw] font-poppins text-regularText text-white rounded-[6.25vw]' onClick={verifyOtp}>Verify OTP</button>
                    <p className='text-red-400 text-right'>{message}</p>
                </div>

                </>
            )}
            
        </div>
  );
};

export default OtpLogin;
