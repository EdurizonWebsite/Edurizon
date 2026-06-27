import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import Select from 'react-select';
import { courseOptions } from '@/lib/adminData';
import { useStaticAttributes } from '@/context/StaticAttributesContext';
import toast from 'react-hot-toast';

interface AddRegisteredStudentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const FormToAddRegisteredStudent = ({ isOpen, onClose, onSuccess }: AddRegisteredStudentDialogProps) => {
  const { countries, universities, addCountry, addUniversity } = useStaticAttributes();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'male',
    dob: '',
    password: '',
    phone: '',
    studyDestination: '',
    intendedCourse: '',
    preferedUniversity: 'None',
    assignedCounsellor: '',
    notes: '',
    source: 'Website',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [counsellors, setCounsellors] = useState([]);

  // Add new item state
  const [addingCountry, setAddingCountry] = useState(false);
  const [newCountryName, setNewCountryName] = useState('');
  const [addingUniversity, setAddingUniversity] = useState(false);
  const [newUniversityName, setNewUniversityName] = useState('');
  const [savingItem, setSavingItem] = useState(false);

  const countrySelectOptions = [
    ...countries.map(c => ({ value: c, label: c })),
    { value: '__add_new__', label: '+ Add new country' },
  ];

  const universitySelectOptions = [
    { value: 'None', label: 'None' },
    ...universities.map(u => ({ value: u, label: u })),
    { value: '__add_new__', label: '+ Add new university' },
  ];

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        gender: 'male',
        dob: '',
        password: '',
        phone: '',
        studyDestination: '',
        intendedCourse: '',
        preferedUniversity: 'None',
        assignedCounsellor: '',
        notes: '',
        source: 'Website',
      });
      setError('');
      setShowNotification(false);
      setAddingCountry(false);
      setAddingUniversity(false);
      setNewCountryName('');
      setNewUniversityName('');
      fetchCounsellors();
    }
  }, [isOpen]);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
        if (notificationType === 'success') {
          onClose();
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification, notificationType, onClose]);

  const fetchCounsellors = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${baseUrl}/api/admin/getAllCounsellors`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.data) {
        setCounsellors(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching counsellors:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSelectChange = (name: string, value: any) => {
    if (value === '__add_new__') {
      if (name === 'studyDestination') setAddingCountry(true);
      if (name === 'preferedUniversity') setAddingUniversity(true);
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSaveNewCountry = async () => {
    if (!newCountryName.trim()) return;
    setSavingItem(true);
    try {
      await addCountry(newCountryName.trim());
      setFormData(prev => ({ ...prev, studyDestination: newCountryName.trim() }));
      setAddingCountry(false);
      setNewCountryName('');
      toast.success('Country added');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to add country');
    } finally {
      setSavingItem(false);
    }
  };

  const handleSaveNewUniversity = async () => {
    if (!newUniversityName.trim()) return;
    setSavingItem(true);
    try {
      await addUniversity(newUniversityName.trim());
      setFormData(prev => ({ ...prev, preferedUniversity: newUniversityName.trim() }));
      setAddingUniversity(false);
      setNewUniversityName('');
      toast.success('University added');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to add university');
    } finally {
      setSavingItem(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShowNotification(false);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post(
        `${baseUrl}/api/registered-students/create`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setNotificationType('success');
        setNotificationMessage('Student enrolled successfully!');
        setShowNotification(true);
        onSuccess();
      }
    } catch (err: any) {
      setNotificationType('error');
      setNotificationMessage(err.response?.data?.message || 'Failed to enroll student');
      setShowNotification(true);
      setError(err.response?.data?.message || 'Failed to enroll student');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 flex items-center justify-center z-[100]" style={{ margin: 0 }}>
      {showNotification && (
        <div className={`absolute top-0 left-0 right-0 p-4 ${notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white rounded-t-lg text-center transition-all duration-300 transform ${showNotification ? 'translate-y-0' : '-translate-y-full'}`}>
          {notificationMessage}
        </div>
      )}

      <div className="relative bg-white rounded-lg w-[90%] max-w-2xl p-6 m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Enroll a Student</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter full name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter email address" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter phone number" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter password" />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Academic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Study Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Study Destination</label>
                {addingCountry ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={newCountryName}
                      onChange={e => setNewCountryName(e.target.value)}
                      className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter country name"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button type="button" onClick={handleSaveNewCountry} disabled={savingItem}
                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700 disabled:opacity-50">
                        {savingItem ? 'Adding...' : 'Add'}
                      </button>
                      <button type="button" onClick={() => { setAddingCountry(false); setNewCountryName(''); }}
                        className="flex-1 px-3 py-2 border border-gray-300 text-gray-600 text-sm rounded-md hover:bg-gray-50">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <Select
                    options={countrySelectOptions}
                    value={countrySelectOptions.find(o => o.value === formData.studyDestination) || null}
                    onChange={option => handleSelectChange('studyDestination', option?.value || '')}
                    placeholder="Select study destination"
                    className="w-full"
                    classNamePrefix="select"
                    styles={{
                      option: (base, state) => ({
                        ...base,
                        color: state.data.value === '__add_new__' ? '#0d9488' : base.color,
                        fontWeight: state.data.value === '__add_new__' ? 600 : base.fontWeight,
                      })
                    }}
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Intended Course</label>
                <Select
                  options={courseOptions}
                  value={courseOptions.find(option => option.value === formData.intendedCourse)}
                  onChange={(option) => handleSelectChange('intendedCourse', option?.value || '')}
                  placeholder="Select course"
                  className="w-full"
                  classNamePrefix="select"
                />
              </div>

              {/* Preferred University */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred University</label>
                {addingUniversity ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={newUniversityName}
                      onChange={e => setNewUniversityName(e.target.value)}
                      className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter university name"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button type="button" onClick={handleSaveNewUniversity} disabled={savingItem}
                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700 disabled:opacity-50">
                        {savingItem ? 'Adding...' : 'Add'}
                      </button>
                      <button type="button" onClick={() => { setAddingUniversity(false); setNewUniversityName(''); }}
                        className="flex-1 px-3 py-2 border border-gray-300 text-gray-600 text-sm rounded-md hover:bg-gray-50">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <Select
                    options={universitySelectOptions}
                    value={universitySelectOptions.find(o => o.value === formData.preferedUniversity) || null}
                    onChange={option => handleSelectChange('preferedUniversity', option?.value || 'None')}
                    placeholder="Select university"
                    className="w-full"
                    classNamePrefix="select"
                    styles={{
                      option: (base, state) => ({
                        ...base,
                        color: state.data.value === '__add_new__' ? '#0d9488' : base.color,
                        fontWeight: state.data.value === '__add_new__' ? 600 : base.fontWeight,
                      })
                    }}
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Counsellor</label>
                <select name="assignedCounsellor" value={formData.assignedCounsellor} onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                  <option value="">Select counsellor</option>
                  {counsellors.map((counsellor: any) => (
                    <option className='text-black' key={counsellor._id} value={counsellor._id}>
                      {counsellor.username}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Source */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
            <input type="text" name="source" value={formData.source} onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter source (e.g., Website, Referral, Social Media)" />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter any additional notes or comments..." />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>
          )}

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button type="button" onClick={onClose}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Cancel
            </button>
            <button type="submit" disabled={loading}
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {loading ? 'Enrolling...' : 'Enroll Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormToAddRegisteredStudent;
