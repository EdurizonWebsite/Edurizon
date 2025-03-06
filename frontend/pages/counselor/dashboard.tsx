import { useState, useEffect } from 'react';

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface Meeting {
  _id: string;
  university: {
    name: string;
  };
  studentDetails: {
    name: string;
    email: string;
    phone: string;
    country: string;
    course: string;
  };
  status: string;
  jitsiUrl?: string;
  scheduledTime?: string;
}

const CounselorDashboard = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [scheduledTime, setScheduledTime] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/counselor/login');
          return;
        }

        console.log('Sending token in headers:', token);
        const response = await axios.get('http://localhost:5000/api/meetings', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Meetings response:', response.data);

        setMeetings(response.data);
      } catch (error) {
        console.error('Failed to fetch meetings', error);
        router.push('/counselor/login');
      }
    };

    fetchMeetings();
  }, [router]);

  const handleScheduleMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      console.log('Sending token in headers:', token);
      const response = await axios.put(`http://localhost:5000/api/meetings/${selectedMeeting?._id}`, {
        status: 'Waiting',
        scheduledTime,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Meeting scheduled successfully!');
      setMeetings(meetings.map((meeting) => meeting._id === selectedMeeting?._id ? { ...meeting, status: 'Waiting', scheduledTime } : meeting));
      setShowScheduleModal(false);
    } catch (error) {
      toast.error('Failed to schedule meeting');
    } finally {
      setLoading(false);
    }
  };

  const handleJoinMeeting = (meeting: Meeting) => {
    console.log('Joining meeting:', meeting);
    setSelectedMeeting(meeting);
    setShowJoinModal(true);
  };

  useEffect(() => {
    if (showJoinModal && selectedMeeting) {
      const interval = setInterval(() => {
        if (window.JitsiMeetExternalAPI) {
          clearInterval(interval);
          const domain = 'meet.jit.si';
          const options = {
            roomName: selectedMeeting.jitsiUrl?.split('/').pop(),
            width: '100%',
            height: '100%',
            parentNode: document.querySelector('#jitsi-container'),
            userInfo: {
              displayName: 'Counselor',
            },
          };
          const api = new window.JitsiMeetExternalAPI(domain, options);
          api.addEventListener('videoConferenceJoined', () => {
            console.log('Local User Joined');
          });
          api.addEventListener('videoConferenceLeft', () => {
            console.log('Local User Left');
          });
        }
      }, 100);
    }
  }, [showJoinModal, selectedMeeting]);

  const handleCloseModal = () => {
    setShowJoinModal(false);
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-4">Counselor Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {meetings.map((meeting) => (
          <div key={meeting._id} className="bg-gray-800 p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{meeting.university.name}</h2>
            <p className="text-lg mb-2">Student: {meeting.studentDetails.name}</p>
            <p className="text-lg mb-2">Email: {meeting.studentDetails.email}</p>
            <p className="text-lg mb-2">Phone: {meeting.studentDetails.phone}</p>
            <p className="text-lg mb-2">Country: {meeting.studentDetails.country}</p>
            <p className="text-lg mb-2">Course: {meeting.studentDetails.course}</p>
            {meeting.status === 'Waiting for scheduling' ? (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setSelectedMeeting(meeting);
                  setShowScheduleModal(true);
                }}
              >
                Schedule Meeting
              </button>
            ) : meeting.status === 'Waiting' ? (
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded"
                disabled
              >
                Waiting
              </button>
            ) : meeting.status === 'Join' ? (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handleJoinMeeting(meeting)}
              >
                Join Meeting
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled
              >
                Completed
              </button>
            )}
          </div>
        ))}
      </div>

      {showScheduleModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setShowScheduleModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-white">Schedule Meeting</h2>
            <form onSubmit={handleScheduleMeeting}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="scheduledTime">
                  Scheduled Time
                </label>
                <input
                  type="datetime-local"
                  id="scheduledTime"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                disabled={loading}
              >
                {loading ? 'Scheduling...' : 'Schedule Meeting'}
              </button>
            </form>
          </div>
        </div>
      )}

      {showJoinModal && selectedMeeting && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-2xl relative">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-white">Join Meeting</h2>
            <div id="jitsi-container" className="w-full h-96"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CounselorDashboard;