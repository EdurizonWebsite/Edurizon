import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { baseUrl } from '@/lib/baseUrl';
import { courseOptions } from '@/lib/adminData';
const SESSION_STORAGE_KEY = 'edurizon_hero_lead_submitted';

const HeroLeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    city: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true') {
      setAlreadySubmitted(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || alreadySubmitted) return;

    const courseLabel =
      courseOptions.find((o) => o.value === formData.course)?.label ||
      formData.course ||
      'Not specified';

    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/consultation/request`, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        interestedCountry: courseLabel,
        remark: `Course: ${courseLabel} | City: ${formData.city.trim()} | Hero Slider Lead Form`,
      });

      if (response.data.success) {
        setSubmitted(true);
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        setAlreadySubmitted(true);
        toast.success('Request submitted! Our counsellor will contact you soon.');
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      toast.error(
        err.response?.data?.message || 'Failed to submit. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-[22rem] xl:max-w-[26rem]">
      <div className="rounded-2xl bg-white/[0.97] backdrop-blur-md shadow-[0_24px_64px_rgba(0,0,0,0.4)] border border-white/25 overflow-hidden ring-1 ring-black/5">
        <div className="bg-gradient-to-br from-[#0c3d4c] via-[#0d4a5c] to-[#0a5c6e] px-5 py-4">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
            Get Free Counseling Now
          </h3>
          <p className="text-xs sm:text-sm text-teal-100/90 mt-1">
            Fill the form — our expert will call you within 24 hours
          </p>
        </div>

        {hydrated && (submitted || alreadySubmitted) ? (
          <div className="px-5 py-10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center text-2xl text-emerald-600">
              ✓
            </div>
            <p className="font-semibold text-gray-900">Thank you!</p>
            <p className="text-sm text-gray-600 mt-2">
              We&apos;ve received your details. Our team will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orangeChosen/50 focus:border-orangeChosen"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="10-digit mobile number"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orangeChosen/50 focus:border-orangeChosen"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orangeChosen/50 focus:border-orangeChosen"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Select Course *
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-orangeChosen/50 focus:border-orangeChosen"
              >
                <option value="">Choose course</option>
                {courseOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Your city"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orangeChosen/50 focus:border-orangeChosen"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 mt-1 rounded-xl bg-gradient-to-r from-orangeChosen to-[#e86500] text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-orange-500/35 hover:shadow-orange-500/50 hover:brightness-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Book Free Counseling →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default HeroLeadForm;
