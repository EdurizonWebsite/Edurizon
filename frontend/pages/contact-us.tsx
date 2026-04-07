import { TitleButton } from "@/components/Buttons";
import { baseUrl } from "@/lib/baseUrl";
import React,{useState,useEffect} from "react";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";

// Office locations
const OFFICE_LOCATIONS = [
  {
    id: 'delhi',
    name: 'Delhi Office',
    city: 'New Delhi',
    address: '111,113,115,1st floor, Best Arcade, market, beside Canara Bank, near K.M. Chowk, Sector 7 Extension, Pocket 6, Sector 12 Dwarka, Dwarka, New Delhi, Delhi, 110075',
    phone: '+919873381377',
    whatsapp: '919873381377',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2553018646577!2d77.0454665!3d28.592116899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2870491009%3A0x8b3922528c2683f6!2sEdurizon%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1746528635326!5m2!1sen!2sin',
  },
  {
    id: 'kolkata',
    name: 'Kolkata Office',
    city: 'Kolkata',
    address: 'Gate No. 3, Room no. GA, 18A, 7th Floor, Rabindra Sarani, Poddar Court, Kolkata, West Bengal 700001',
    phone: '+918274014900',
    whatsapp: '918274014900',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4590.805240932832!2d88.35307341694683!3d22.57322373677324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a1c086f16b%3A0x2cc5ec8674d52d0!2sEdurizon%20Pvt.%20Ltd.-%20STUDY%20ABROAD!5e1!3m2!1sen!2sin!4v1769806240684!5m2!1sen!2sin',
  },
  {
    id:'Dubai',
    name:'Dubai Office',
    city:'Dubai',
    address:'16 Gold House Building, Gold Souk Dubai',
    phone: '+918274014900',
    whatsapp: '918274014900',
    mapLink:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4495.927065491783!2d55.29813610000001!3d25.270023499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43438edb60cd%3A0xbc047ee4e16b356d!2sDubai%20Gold%20Souk!5e1!3m2!1sen!2sin!4v1775585772384!5m2!1sen!2sin'
  }
];

const ContactUs = () => {
    const [selectedLocation, setSelectedLocation] = useState('delhi');
    const currentLocation = OFFICE_LOCATIONS.find(loc => loc.id === selectedLocation) || OFFICE_LOCATIONS[0];

    const callBtnFnc=()=>{
        window.location.href = `tel:${currentLocation.phone}`
    }
    const whatsappBtnFnc=()=>{
        window.open(`https://wa.me/${currentLocation.whatsapp}?`)
    }

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      interestedCountry: '',
      interestedCourse:'',
      passport:'',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        // Send request without requiring login
        const requestData = {
          ...formData,
          status: 'pending'
        };
  
        const response = await axios.post(
          `${baseUrl}/api/consultation/request`, 
          requestData
        );
  
        if (response.data.success) {
          toast.success('Consultation request submitted successfully! We will contact you soon.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            interestedCountry: '',
            interestedCourse:'',
            passport:'',
          })
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
        setLoading(false);
      }
    };
  return (
    <div className="relative ">

    <div className="container  py-[60px] lg:py-[80px] xl:py-[120px] mb-[20vw] md:mb-[10vw] mx-[6vw] md:mx-[12.5vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8vw] md:gap-[2vw] items-center justify-center">
        {/* First Column - Company Information */}
        <div className="">
          <h2 className="font-bold mb-[2vw] text-h4TextPhone md:text-h3Text text-black text-center">Contact Us</h2>
          

          <div className="relative bg-orangeChosen dark:bg-gray-800 flex mx-auto  rounded-[2vw] md:rounded-[.5vw] w-[90vw] md:w-[28.625vw] h-auto overflow-y-auto my-[2vh]">
        <div id='form' className={` p-8 w-full  h-full pointer-events-auto`}>
        <h2 className="text-h6TextPhon text-white md:text-h5Text mb-[4vw] md:mb-[2vw] font-bold  dark:text-white">Book a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="text-smallTextPhone md:text-smallText flex flex-col gap-[2vw] md:gap-[.875vw] pointer-events-auto">
          <div className=' '>
            <label className="block  font-medium text-white dark:text-gray-300">Name</label>
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
            <label className="block font-medium text-white dark:text-gray-300">Email</label>
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
            <label className="block font-medium text-white dark:text-gray-300">Phone</label>
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
            <label className="block  font-medium text-white dark:text-gray-300">Country Intrested</label>
            <input
              type="text"
              name="interestedCountry"
              value={formData.interestedCountry}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orangeChosen focus:border-orangeChosen dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block  font-medium text-white dark:text-gray-300">Course Intrested</label>
            <input
              type="text"
              name="interestedCourse"
              value={formData.interestedCourse}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orangeChosen focus:border-orangeChosen dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block  font-medium text-white dark:text-gray-300">Do you have passport</label>
            <input
              type="text"
              name="passport"
              value={formData.passport}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orangeChosen focus:border-orangeChosen dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
         
          <div className="mt-[.7125vw] text-smallTextPhone md:text-smallText flex justify-end gap-[2vw] md:gap-[.5vw]">
            <button
              type="button"
              className="px-[4vw] md:px-[1.5vw] py-[1.5vw] md:py-[.5vw] font-medium text-black bg-white border-[#CACACA] border-[1px] rounded-[12.5vw] md:rounded-[6.25vw] hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-[4vw] md:px-[1.5vw] py-[1.5vw] md:py-[.5vw] font-medium text-black bg-white border-[1px] rounded-[12.5vw] md:rounded-[6.25vw] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeChosen disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={5000} />
        </div>
        {/* <div id='success' className={`absolute p-8 top-0 left-0 ${success ? 'opacity-100' : 'opacity-0'} w-full transition-all duration-100 h-full flex flex-col items-center justify-center`}>
          <h5 className="text-h6TextPhone leading-[120%] md:text-h5Text mb-[4vw] md:mb-[2vw] font-bold text-gray-900 dark:text-white text-center">Thank You 🎉</h5>
          <p className='text-smallTextPhone md:text-regularText font-medium leading-[140%] text-center md:w-[21.25vw]'>For Booking a Free Consulation with us well reach out to you soon</p>
        </div> */}
      </div>
        </div>

        {/* Second Column - Map */}
        <div>
          {/* Location Tabs */}
          <div className="flex gap-[2vw] md:gap-[1vw] mb-[2vw] md:mb-[1vw]">
            {OFFICE_LOCATIONS.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`px-[4vw] md:px-[1.25vw] py-[1.5vw] md:py-[0.5vw] rounded-[12.5vw] md:rounded-[6.25vw] font-medium text-smallTextPhone md:text-smallText transition-all duration-200 ${
                  selectedLocation === location.id
                    ? 'bg-orangeChosen text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {location.city}
              </button>
            ))}
          </div>

          {/* Address and Map */}
          <div>
            <h3 className="text-h6TextPhone md:text-h5Text mb-[2vw] md:mb-[1vw]">Edurizon Private Limited - {currentLocation.city}</h3>
            <p className="text-regularTextPhone md:text-regularText mb-[2vw] md:mb-[1vw]">{currentLocation.address}</p>
            <div className="flex">
            <p className="text-regularTextPhone md:text-regularText mb-[2vw] md:mb-[1vw]"><strong>Contact Number:</strong></p>
            <p className="text-regularTextPhone md:text-regularText mb-[2vw] md:mb-[1vw]">{currentLocation.phone}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[3vw] md:gap-[.5vw] mb-[4vw] md:mb-[2vw] ">
            <button className="bg-green-500 text-white rounded-[17.5vw] md:rounded-[6.25vw] w-full md:w-[16.1875vw] h-[11vw] md:h-[3vw]" onClick={whatsappBtnFnc}>Connect with us on WhatsApp</button>
            <TitleButton btnTitle={"Call Us Now"} btnHeight={3} btnHeightPhone={11} btnWidth={16.1875} btnWidthPhone={92} btnRadius={6.25} btnRadiusPhone={17.5}  onClick={callBtnFnc}/>
          </div>
          <iframe
            src={currentLocation.mapLink}
            className="rounded-lg shadow-md w-[100%] h-[300px] md:h-[30vw]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ContactUs;
