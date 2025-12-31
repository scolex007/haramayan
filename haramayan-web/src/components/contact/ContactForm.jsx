import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    phone_number: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Name must be at least 2 characters';
    }

    if (!formData.reply_to.trim()) {
      newErrors.reply_to = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reply_to)) {
      newErrors.reply_to = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (formData.phone_number && !/^[\d\s\-\+\(\)]+$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please correct the errors above.'
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name.trim(),
          reply_to: formData.reply_to.trim(),
          phone_number: formData.phone_number.trim() || 'Not provided',
          message: formData.message.trim()
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you for contacting us! We\'ll respond within 24-48 hours.'
      });

      setFormData({
        from_name: '',
        reply_to: '',
        phone_number: '',
        message: ''
      });

      setTimeout(() => {
        document.getElementById('contact-status')?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }, 100);

    } catch (error) {
      console.error('EmailJS Error:', error);

      let errorMessage = 'Failed to send message. Please try again.';

      if (!navigator.onLine) {
        errorMessage = 'No internet connection. Please check your connection and try again.';
      }

      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary-50 p-8 rounded-lg shadow-lg">
      {/* Status Message */}
      {status.message && (
        <div
          id="contact-status"
          className={`mb-6 border-2 rounded-lg p-4 ${
            status.type === 'success'
              ? 'bg-green-50 border-green-500'
              : 'bg-red-50 border-red-500'
          }`}
        >
          <div className="flex items-center">
            {status.type === 'success' ? (
              <svg className="w-6 h-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <div>
              <h4 className={`font-bold ${status.type === 'success' ? 'text-green-900' : 'text-red-900'}`}>
                {status.type === 'success' ? 'Message Sent Successfully!' : 'Failed to Send Message'}
              </h4>
              <p className={`text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {status.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="from_name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-200 transition-colors ${
              errors.from_name ? 'border-red-500' : 'border-gray-300 focus:border-primary-600'
            }`}
            placeholder="Juan Dela Cruz"
          />
          {errors.from_name && (
            <p className="mt-1 text-sm text-red-600">{errors.from_name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="reply_to" className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-200 transition-colors ${
              errors.reply_to ? 'border-red-500' : 'border-gray-300 focus:border-primary-600'
            }`}
            placeholder="juan@example.com"
          />
          {errors.reply_to && (
            <p className="mt-1 text-sm text-red-600">{errors.reply_to}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-200 transition-colors ${
              errors.phone_number ? 'border-red-500' : 'border-gray-300 focus:border-primary-600'
            }`}
            placeholder="0995-389-5071"
          />
          {errors.phone_number && (
            <p className="mt-1 text-sm text-red-600">{errors.phone_number}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            maxLength="1000"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-200 transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300 focus:border-primary-600'
            }`}
            placeholder="Tell us how we can help you..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
          <p className="mt-1 text-sm text-gray-600">
            {formData.message.length} / 1000 characters
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg transition-all transform ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 hover:scale-105'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
