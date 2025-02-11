import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const UniversityDetails = ({ university }) => {
  const [meetingStatus, setMeetingStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    course: '',
  });
  const [loading, setLoading] = useState(false);
  const [meeting, setMeeting] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMeetingStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/meetings/status/${university._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status === 'No meeting found') {
          setMeetingStatus(null);
        } else {
          setMeetingStatus(response.data.status);
          setMeeting(response.data.meeting); // Set the meeting object
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized access - invalid token');
          localStorage.removeItem('token');
          router.push('/login');
        } else {
          console.error('Failed to fetch meeting status', error);
        }
      }
    };

    if (university && university._id) {
      fetchMeetingStatus();
    }
  }, [university, router]);

  const handleBookCounseling = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await axios.post('http://localhost:5000/api/meetings/create', {
        universityId: university._id,
        ...formData,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Meeting request sent successfully!');
      setMeetingStatus('Waiting for scheduling');
      setShowModal(false);
    } catch (error) {
      toast.error('Failed to book counseling');
    } finally {
      setLoading(false);
    }
  };

  const handleJoinMeeting = () => {
    console.log('Joining meeting:', meeting);
    setShowJoinModal(true);
  };

  useEffect(() => {
    if (showJoinModal && meeting) {
      const interval = setInterval(() => {
        if (window.JitsiMeetExternalAPI) {
          clearInterval(interval);
          const domain = 'meet.jit.si';
          const options = {
            roomName: meeting.jitsiUrl?.split('/').pop(),
            width: '100%',
            height: '100%',
            parentNode: document.querySelector('#jitsi-container'),
            userInfo: {
              displayName: 'Student',
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
  }, [showJoinModal, meeting]);

  const handleCloseModal = () => {
    setShowJoinModal(false);
  };

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-4">{university.name}</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-gray-800 p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">University Details</h2>
          <p className="text-lg mb-2">Name: {university.name}</p>
          <p className="text-lg mb-2">Location: {university.location}</p>
          <p className="text-lg mb-2">Courses: {university.courses ? university.courses.join(', ') : 'N/A'}</p>
          {meetingStatus === 'Waiting for scheduling' && (
            <button className="bg-yellow-500 text-white px-4 py-2 rounded" disabled>
              Waiting for scheduling
            </button>
          )}
          {meetingStatus === 'Waiting' && (
            <button className="bg-yellow-500 text-white px-4 py-2 rounded" disabled>
              Waiting
            </button>
          )}
          {meetingStatus === 'Join' && (
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleJoinMeeting}>
              Join Meeting
            </button>
          )}
          {meetingStatus === 'Completed' && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded" disabled>
              Completed
            </button>
          )}
          {meetingStatus === null && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(true)}
            >
              Book a Counseling
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-white">Request a Counseling</h2>
            <form onSubmit={handleBookCounseling}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="course">
                  Course
                </label>
                <input
                  type="text"
                  id="course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                disabled={loading}
              >
                {loading ? 'Booking...' : 'Request Counseling'}
              </button>
            </form>
          </div>
        </div>
      )}

      {showJoinModal && meeting && (
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

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await axios.get(`http://localhost:5000/api/universities/${id}`);
    return {
      props: {
        university: response.data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch university details', error);
    return {
      notFound: true,
    };
  }
}

export default UniversityDetails;