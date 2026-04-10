import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {baseUrl} from '@/lib/baseUrl';
interface ConsultationFormProps {
  onClose: () => void;
}
import Image from 'next/image';

const SESSION_STORAGE_KEY = 'edurizon_consultation_submitted';

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedCountry: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadySubmittedThisSession, setAlreadySubmittedThisSession] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true') {
      setAlreadySubmittedThisSession(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || alreadySubmittedThisSession) return;
    setLoading(true);
    let succeeded = false;
    try {
      const requestData = {
        ...formData,
        status: 'pending'
      };

      const response = await axios.post(
        `${baseUrl}/api/consultation/request`,
        requestData
      );

      if (response.data.success) {
        succeeded = true;
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        }
        setAlreadySubmittedThisSession(true);
        toast.success('Consultation request submitted successfully! We will contact you soon.');
        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (error: any) {
      console.error('Consultation request error:', error);
      if (error.response) {
        toast.error(error.response.data.message || 'Failed to submit consultation request');
      } else if (error.request) {
        console.error('Request made but no response received:', error);
        toast.error('Unable to reach the server. Please check your internet connection.');
      } else {
        toast.error('An error occurred while submitting your request.');
      }
    } finally {
      if (!succeeded) setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto" >
      <div className='absolute h-full w-full top-0 left-0  z-0' onClick={onClose}> </div>
      <div className="z-50 relative bg-white dark:bg-gray-800  rounded-[2vw] md:rounded-[.5vw] w-[90vw] md:w-[55vw] h-[85vw] md:h-[37vw] max-h-[95vh] overflow-y-auto my-[2vh]">
        <div id='form' className={`absolute p-4 md:p-0  md:flex top-0 left-0 ${success ? 'opacity-0' : 'opacity-100'} z-50 w-full transition-all duration-100 h-full`}>
          <Image src='/assets/Images/consultationForm.png' alt='consultation' className='hidden md:block w-[28vw] h-full  shadow-2xl' width={1920} height={1080} />
          <div className='md:flex md:flex-col items-center  md:pt-[2vw] lg:md:pt-[4vw] w-full h-full'>
        <h2 className="text-h6TextPhone md:text-h5Text mb-[4vw] md:mb-[2vw] font-bold text-gray-900 dark:text-white text-center">Book a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="text-smallTextPhone md:w-[20vw] md:text-smallText flex flex-col gap-[2vw] md:gap-[.875vw]">
          <div className=' '>
            <label className="block  font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orangeChosen focus:border-orangeChosen dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orangeChosen focus:border-orangeChosen dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orangeChosen focus:border-orangeChosen dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          
          
          <div>
            <label className="block  font-medium text-gray-700 dark:text-gray-300">Country Interested</label>
            <input
              type="text"
              name="interestedCountry"
              value={formData.interestedCountry}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orangeChosen focus:border-orangeChosen dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
         
          <div className="mt-[.7125vw]  text-smallTextPhone md:text-smallText flex justify-center gap-[2vw] md:gap-[.5vw]">
            <button
              type="button"
              onClick={onClose}
              className="px-[4vw] md:px-[1.5vw] py-[1.5vw] md:py-[.5vw] font-medium text-gray-700 bg-transparent border-[#CACACA] border-[1px] rounded-[12.5vw] md:rounded-[6.25vw] hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || alreadySubmittedThisSession}
              className="px-[4vw] md:px-[1.5vw] py-[1.5vw] md:py-[.5vw] font-medium text-white bg-orangeChosen border-[1px] rounded-[12.5vw] md:rounded-[6.25vw] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeChosen disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {alreadySubmittedThisSession ? 'Already submitted' : loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        <ToastContainer className='z-[9999]' position="top-right" autoClose={5000} />
        </div>
        </div>
        <div id='success' className={`absolute p-8 top-0 left-0 ${success ? 'opacity-100' : 'opacity-0'} w-full transition-all duration-100 h-full flex flex-col items-center justify-center`}>
          <h5 className="text-h6TextPhone leading-[120%] md:text-h5Text mb-[4vw] md:mb-[2vw] font-bold text-gray-900 dark:text-white text-center">Thank You 🎉</h5>
          <p className='text-smallTextPhone md:text-regularText font-medium leading-[140%] text-center md:w-[21.25vw]'>For Booking a Free Consulation with us well reach out to you soon</p>
        </div>
      </div>
     
    </div>
  );
};

export default ConsultationForm;