import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { baseUrl } from '@/lib/baseUrl';
import { countryOptions } from '@/lib/adminData';
import { getAdminToken } from '@/utils/adminStorage';

export interface EditableAdminUser {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  country: string[];
  contactNo: string;
  whatsapp?: string;
  active: boolean;
}

interface EditMemberDialogProps {
  isOpen: boolean;
  member: EditableAdminUser | null;
  onClose: () => void;
  onSuccess: () => void;
}

const roles = [
  { value: 'super-admin', label: 'Super Admin' },
  { value: 'counsellor', label: 'Counsellor' },
  { value: 'documentHandler', label: 'Document Handler' },
  { value: 'finance', label: 'Finance' },
  { value: 'digitalMarketing', label: 'Digital Marketing' },
  { value: 'counsellorAdmin', label: 'Counsellor Admin' },
];

const EditMemberDialog = ({ isOpen, member, onClose, onSuccess }: EditMemberDialogProps) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'counsellor',
    country: [] as string[],
    contactNo: '',
    whatsapp: '',
    active: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isSuperAdminMember = member?.role === 'super-admin';

  useEffect(() => {
    if (isOpen && member) {
      setFormData({
        username: member.username || '',
        email: member.email || '',
        password: '',
        firstName: member.firstName || '',
        lastName: member.lastName || '',
        role: member.role || 'counsellor',
        country: member.country || [],
        contactNo: member.contactNo || '',
        whatsapp: member.whatsapp || '',
        active: member.active ?? true,
      });
      setError('');
    }
  }, [isOpen, member]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleCountryChange = (selectedOptions: any) => {
    const selectedCountries = selectedOptions
      ? selectedOptions.map((option: any) => option.value)
      : [];

    setFormData((prev) => ({
      ...prev,
      country: selectedCountries,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!member) return;

    setLoading(true);
    setError('');

    try {
      const token = getAdminToken();
      if (!token) {
        setError('Authentication required');
        return;
      }

      const payload: Record<string, unknown> = {
        username: formData.username,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: formData.role,
        country: formData.country,
        contactNo: formData.contactNo,
        whatsapp: formData.whatsapp,
        active: formData.active,
      };

      if (formData.password.trim()) {
        payload.password = formData.password;
      }

      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      const response = await axios.patch(
        `${baseUrl}/api/admin/users/${member._id}`,
        payload,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );

      if (response.data.status === 'success') {
        onSuccess();
        onClose();
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update team member');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 flex items-center justify-center z-[100]"
      style={{ margin: 0 }}
    >
      <div className="relative bg-white rounded-lg w-[90%] max-w-lg p-6 m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Member</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              disabled={isSuperAdminMember}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm disabled:bg-gray-100"
            >
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {formData.role === 'counsellor' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Countries</label>
              <Select
                isMulti
                name="countries"
                options={countryOptions}
                className="mt-1"
                classNamePrefix="select"
                onChange={handleCountryChange}
                placeholder="Select countries..."
                value={countryOptions.filter((option) => formData.country.includes(option.value))}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+91XXXXXXXXXX"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="active"
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleChange}
              disabled={isSuperAdminMember}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded disabled:opacity-50"
            />
            <label htmlFor="active" className="text-sm font-medium text-gray-700">
              Login access enabled
            </label>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMemberDialog;
