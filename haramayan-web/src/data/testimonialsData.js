export const testimonialsData = {
  video: {
    id: 'video1',
    src: '/testimonials/Video1.mp4',
    title: 'Hear from Our Members',
    description: 'Real stories from HIM members who experienced our support firsthand'
  },

  images: [
    {
      id: 1,
      name: 'Jackielyn Jacinto',
      image: '/testimonials/image1.jpg',
      benefitType: 'medical',
      amount: null,
      date: null,
      story: 'Jackielyn Jacinto receives medical assistance from HIM',
      shortQuote: 'Medical assistance when I needed it most',
      featured: true
    },
    {
      id: 2,
      name: 'Caroline B. Cebuano',
      image: '/testimonials/image2.jpg',
      benefitType: 'accidental',
      amount: 2540,
      date: null,
      story: 'Caroline B. Cebuano claim ₱2,540 for Accidental benefit (dog bites)',
      shortQuote: 'Quick help after my accident',
      featured: true
    },
    {
      id: 3,
      name: 'Juanario Baterzal Jr.',
      image: '/testimonials/image3.jfif',
      benefitType: 'funeral',
      amount: 25000,
      date: 'December 13, 2022',
      deceasedName: 'Myra P. Baterzal',
      relationship: 'wife',
      story: 'Juanario Baterzal Jr. received ₱25,000 from HIM Damayan for burial financial assistance of his wife Myra P. Baterzal.',
      shortQuote: 'HIM stood with us in our darkest hour',
      featured: true
    },
    {
      id: 4,
      name: 'Marcelo E. Riguer',
      image: '/testimonials/image4.jfif',
      benefitType: 'testimonial',
      amount: null,
      date: null,
      story: 'Marcelo E. Riguer: matured HIM member with years of faithful partnership',
      shortQuote: 'Proud to be a long-standing HIM member',
      featured: false
    },
    {
      id: 5,
      name: 'Beneficiary of Reuben James Sacatani',
      image: '/testimonials/image5.jfif',
      benefitType: 'accidental',
      amount: 1060,
      date: null,
      memberName: 'Reuben James Sacatani',
      story: 'Beneficiary of Reuben James Sacatani received amount of ₱1,060 for her Accidental Expenses.',
      shortQuote: 'Fast support for unexpected expenses',
      featured: false
    },
    {
      id: 6,
      name: 'Henry Vinculado',
      image: '/testimonials/image6.jfif',
      benefitType: 'medical',
      amount: 5000,
      date: 'April 27, 2023',
      story: 'Sponsor received ₱5,000 for Henry Vinculado Surgical benefits from HIM Damayan.',
      shortQuote: 'Surgery support that made all the difference',
      featured: false
    },
    {
      id: 7,
      name: 'Jannilyn Tobias',
      image: '/testimonials/image7.jfif',
      benefitType: 'natal',
      amount: 5000,
      date: null,
      story: 'Jannilyn Tobias received ₱5,000 financial assistance from HIM Damayan (normal delivery)',
      shortQuote: 'Welcoming new life with HIM support',
      featured: false
    },
    {
      id: 8,
      name: 'Carol Carren V. Cornelio',
      image: '/testimonials/image8.jpg',
      benefitType: 'general',
      amount: 1200,
      date: null,
      story: 'Carol Carren V. Cornelio received the amount of ₱1,200 assistance from HIM Bayanihan.',
      shortQuote: 'Grateful for the care and compassion',
      featured: false
    },
    {
      id: 9,
      name: 'Jessie Lejano',
      image: '/testimonials/image9.jpg',
      benefitType: 'accidental',
      amount: 2000,
      date: null,
      beneficiaryName: 'Jason Lejano',
      story: 'Jessie Lejano received ₱2,000 assistance for her beneficiary Jason Lejano who met an accident.',
      shortQuote: 'Help arrived when we needed it',
      featured: false
    }
  ]
};

// Benefit type configuration with colors matching HIM green theme
export const benefitTypes = {
  medical: {
    label: 'Medical Assistance',
    color: 'bg-primary-600 text-white',
    icon: '🏥'
  },
  accidental: {
    label: 'Accidental Support',
    color: 'bg-yellow-600 text-white',
    icon: '⚠️'
  },
  funeral: {
    label: 'Funeral Assistance',
    color: 'bg-gray-700 text-white',
    icon: '🕊️'
  },
  natal: {
    label: 'Natal Care',
    color: 'bg-pink-600 text-white',
    icon: '👶'
  },
  general: {
    label: 'General Support',
    color: 'bg-primary-700 text-white',
    icon: '🤝'
  },
  testimonial: {
    label: 'Member Testimonial',
    color: 'bg-primary-500 text-white',
    icon: '⭐'
  }
};

// Helper function to format currency
export const formatCurrency = (amount) => {
  return amount ? `₱${amount.toLocaleString('en-PH')}` : null;
};
