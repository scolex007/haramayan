import { useState, useEffect } from 'react';

function AuthorizationWaiverModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    memberId: '',
    address: '',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 overflow-y-auto py-8 waiver-print-overlay" onClick={onClose}>
      <div
        className="bg-white w-full max-w-3xl mx-4 rounded-lg shadow-2xl waiver-print-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex justify-end p-4 waiver-no-print">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Letter content */}
        <div className="px-8 sm:px-12 pb-10">
          {/* Letterhead */}
          <div className="text-center border-b-2 border-primary-600 pb-6 mb-8">
            <img
              src="/logos/hpi-logo.png"
              alt="HPIO Logo"
              className="h-20 mx-auto mb-3"
            />
            <h1 className="text-xl font-bold text-primary-800 tracking-wide">
              HIM PLUS INTERNATIONAL ORGANIZATION
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Essential School, Bongabon, Nueva Ecija, Philippines
            </p>
            <p className="text-sm text-gray-500">
              Email: hpiharamayan@gmail.com &nbsp;|&nbsp; Phone: 0995-389-5071
            </p>
          </div>

          {/* Title */}
          <h2 className="text-center text-lg font-bold tracking-widest mb-8 text-gray-800">
            AUTHORIZATION AND WAIVER LETTER
          </h2>

          {/* Date */}
          <div className="mb-6">
            <label className="text-sm text-gray-500 block mb-1">Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="waiver-input w-64 border-b border-gray-300 focus:border-primary-600 outline-none py-1 text-gray-800"
            />
          </div>

          {/* Body */}
          <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
            <p>To Whom It May Concern,</p>

            <p>
              I, <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="waiver-input border-b border-gray-300 focus:border-primary-600 outline-none py-1 px-1 mx-1 w-56 text-gray-800 inline"
              />, a duly registered member of <strong>HIM Plus International Organization (HPIO)</strong> with
              Member ID <input
                type="text"
                name="memberId"
                value={formData.memberId}
                onChange={handleChange}
                placeholder="Member ID"
                className="waiver-input border-b border-gray-300 focus:border-primary-600 outline-none py-1 px-1 mx-1 w-36 text-gray-800 inline"
              />, do hereby voluntarily and knowingly authorize HPIO to act on my behalf in all matters
              relating to the processing, filing, and management of insurance claims with HPIO's partner
              insurance companies.
            </p>

            <div>
              <p className="font-semibold mb-2">Scope of Authorization:</p>
              <p className="mb-1">This authorization grants HPIO the right and authority to:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>File, submit, and process insurance claims on my behalf;</li>
                <li>Communicate and correspond with partner insurance companies regarding my claims;</li>
                <li>Receive, review, and submit documents and information necessary for claim processing;</li>
                <li>Negotiate and facilitate settlement of claims in my best interest;</li>
                <li>Perform any and all acts necessary to carry out the purposes of this authorization.</li>
              </ol>
            </div>

            <div>
              <p className="font-semibold mb-2">Waiver and Release:</p>
              <p>
                In consideration of the services provided by HPIO, I hereby release, waive, and discharge
                HPIO, its officers, directors, employees, and authorized representatives from any and all
                claims, liabilities, demands, and causes of action arising from or related to the
                good-faith processing and management of my insurance claims, provided that such actions
                are performed within the scope of this authorization and in accordance with applicable
                laws and regulations.
              </p>
            </div>

            <p>
              I understand that this authorization shall remain in effect until revoked by me in writing.
              I further acknowledge that I have read and understood the terms of this letter and have
              signed it voluntarily.
            </p>
          </div>

          {/* Member Information */}
          <div className="mt-10 space-y-4">
            <h3 className="font-semibold text-gray-700">Member Information:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 block mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="waiver-input w-full border-b border-gray-300 focus:border-primary-600 outline-none py-1 text-gray-800"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-1">Member ID</label>
                <input
                  type="text"
                  name="memberId"
                  value={formData.memberId}
                  onChange={handleChange}
                  placeholder="Enter your member ID"
                  className="waiver-input w-full border-b border-gray-300 focus:border-primary-600 outline-none py-1 text-gray-800"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                className="waiver-input w-full border-b border-gray-300 focus:border-primary-600 outline-none py-1 text-gray-800"
              />
            </div>
          </div>

          {/* Signature blocks */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <div className="border-b border-gray-400 mb-2 h-16"></div>
              <p className="text-sm text-gray-600 font-medium">Member's Signature</p>
              <div className="border-b border-gray-300 mt-4 mb-2 h-8"></div>
              <p className="text-sm text-gray-600">Date</p>
            </div>
            <div>
              <div className="border-b border-gray-400 mb-2 h-16"></div>
              <p className="text-sm text-gray-600 font-medium">Witness Signature</p>
              <div className="border-b border-gray-300 mt-4 mb-2 h-8"></div>
              <p className="text-sm text-gray-600">Date</p>
            </div>
          </div>

          {/* HPIO acknowledgment */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">For HPIO Use Only:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <div className="border-b border-gray-400 mb-2 h-12"></div>
                <p className="text-sm text-gray-600">Received by (HPIO Representative)</p>
              </div>
              <div>
                <div className="border-b border-gray-400 mb-2 h-12"></div>
                <p className="text-sm text-gray-600">Date Received</p>
              </div>
            </div>
          </div>

          {/* Print button */}
          <div className="mt-10 text-center waiver-no-print">
            <button
              onClick={handlePrint}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print / Save as PDF
            </button>
            <p className="text-sm text-gray-400 mt-2">
              Use your browser's "Save as PDF" option in the print dialog to download
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorizationWaiverModal;
