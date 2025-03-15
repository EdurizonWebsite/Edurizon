import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [loading, setLoading] = useState(true);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [scheduledTime, setScheduledTime] = useState('');
  const router = useRouter();

  // Check authentication on mount and setup interval to check token expiry
  useEffect(() => {
    const token = localStorage.getItem('counselorToken');
    if (!token) {
      router.push('/counselor/login');
      return;
    }

    // Check token expiry every minute
    const interval = setInterval(() => {
      const token = localStorage.getItem('counselorToken');
      if (!token) {
        router.push('/counselor/login');
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [router]);

  // Fetch meetings with authentication
  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const token = localStorage.getItem('counselorToken');
        if (!token) {
          router.push('/counselor/login');
          return;
        }

        const response = await axios.get('http://localhost:5001/api/meetings', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMeetings(response.data);
        setLoading(false);
      } catch (error: any) {
        console.error('Failed to fetch meetings:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('counselorToken');
          router.push('/counselor/login');
        }
        toast.error('Failed to fetch meetings');
        setLoading(false);
      }
    };

    fetchMeetings();
  }, [router]);

  const handleScheduleMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('counselorToken');
      if (!token) {
        router.push('/counselor/login');
        return;
      }

      await axios.put(
        `http://localhost:5001/api/meetings/${selectedMeeting?._id}`,
        {
          status: 'Waiting',
          scheduledTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMeetings(meetings.map((meeting) =>
        meeting._id === selectedMeeting?._id
          ? { ...meeting, status: 'Waiting', scheduledTime }
          : meeting
      ));

      toast.success('Meeting scheduled successfully!');
      setShowScheduleModal(false);
    } catch (error: any) {
      console.error('Failed to schedule meeting:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('counselorToken');
        router.push('/counselor/login');
      }
      toast.error('Failed to schedule meeting');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('counselorToken');
    router.push('/counselor/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white">Counselor Dashboard</div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {meetings.map((meeting) => (
              <div key={meeting._id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {meeting.university.name}
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Student: {meeting.studentDetails.name}</p>
                  <p>Email: {meeting.studentDetails.email}</p>
                  <p>Phone: {meeting.studentDetails.phone}</p>
                  <p>Country: {meeting.studentDetails.country}</p>
                  <p>Course: {meeting.studentDetails.course}</p>
                  {meeting.scheduledTime && (
                    <p>Scheduled: {new Date(meeting.scheduledTime).toLocaleString()}</p>
                  )}
                </div>
                <div className="mt-4">
                  {meeting.status === 'Waiting for scheduling' ? (
                    <button
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      onClick={() => {
                        setSelectedMeeting(meeting);
                        setShowScheduleModal(true);
                      }}
                    >
                      Schedule Meeting
                    </button>
                  ) : meeting.status === 'Waiting' ? (
                    <div className="w-full bg-yellow-600 text-white px-4 py-2 rounded text-center">
                      Waiting
                    </div>
                  ) : meeting.status === 'Join' ? (
                    <button
                      className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      onClick={() => {
                        setSelectedMeeting(meeting);
                        setShowJoinModal(true);
                      }}
                    >
                      Join Meeting
                    </button>
                  ) : (
                    <div className="w-full bg-gray-600 text-white px-4 py-2 rounded text-center">
                      Completed
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-4">Schedule Meeting</h2>
            <form onSubmit={handleScheduleMeeting}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">
                  Select Date and Time
                </label>
                <input
                  type="datetime-local"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? 'Scheduling...' : 'Schedule'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Join Meeting Modal */}
      {showJoinModal && selectedMeeting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Meeting Room</h2>
              <button
                onClick={() => setShowJoinModal(false)}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <div id="jitsi-container" className="w-full h-full rounded overflow-hidden" />
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CounselorDashboard;