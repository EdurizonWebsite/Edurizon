import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ChatAndMeet = () => {
  const [meetLink, setMeetLink] = useState('');
  const router = useRouter();
  const { meetingId } = router.query;

  useEffect(() => {
    const fetchMeetLink = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/meetings/${meetingId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMeetLink(response.data.googleMeetUrl);
      } catch (error) {
        console.error('Failed to fetch meet link', error);
      }
    };

    if (meetingId) {
      fetchMeetLink();
    }
  }, [meetingId, router]);

  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-4">Meeting Link</h1>
      {meetLink ? (
        <p className="text-lg mb-2">
          Join the meeting: <a href={meetLink} target="_blank" rel="noopener noreferrer">{meetLink}</a>
        </p>
      ) : (
        <p className="text-lg mb-2">Loading meeting link...</p>
      )}
    </div>
  );
};

export default ChatAndMeet;