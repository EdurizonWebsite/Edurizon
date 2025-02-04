import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../utils/auth';

const UniversityDetails = () => {
  useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        console.log('Fetching university with ID:', id);
        const response = await axios.get(`http://localhost:5000/api/universities/${id}`);
        setUniversity(response.data);
      } catch (error) {
        console.error('Error fetching university details:', error);
      }
    };

    if (id) {
      fetchUniversity();
    }
  }, [id]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 pt-24 text-center">
        <h1 className="text-3xl font-bold mb-4">{university.name}</h1>
        <p className="text-lg mb-4">Country: {university.country}</p>
        <p className="text-lg mb-4">Type: {university.type}</p>
        <div className="fixed bottom-4 left-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Book a Counseling</button>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;