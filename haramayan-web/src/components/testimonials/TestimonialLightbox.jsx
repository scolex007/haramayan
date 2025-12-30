import { useEffect } from 'react';
import BenefitBadge from './BenefitBadge';
import { formatCurrency } from '../../data/testimonialsData';

export default function TestimonialLightbox({
  isOpen,
  currentIndex,
  testimonials,
  onClose,
  onNext,
  onPrev
}) {
  const testimonial = testimonials[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg transition-all"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-96 md:h-auto">
            <img
              src={testimonial.image}
              alt={testimonial.story}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <BenefitBadge type={testimonial.benefitType} />

            <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
              {testimonial.name}
            </h3>

            {testimonial.amount && (
              <p className="text-4xl font-bold text-primary-600 mb-4">
                {formatCurrency(testimonial.amount)}
              </p>
            )}

            {testimonial.date && (
              <p className="text-sm text-gray-500 mb-4">{testimonial.date}</p>
            )}

            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">{testimonial.story}</p>
            </div>

            {(testimonial.deceasedName || testimonial.beneficiaryName || testimonial.memberName) && (
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  {testimonial.deceasedName && (
                    <>In loving memory of <strong>{testimonial.deceasedName}</strong></>
                  )}
                  {testimonial.beneficiaryName && (
                    <>Beneficiary: <strong>{testimonial.beneficiaryName}</strong></>
                  )}
                  {testimonial.memberName && (
                    <>Member: <strong>{testimonial.memberName}</strong></>
                  )}
                </p>
              </div>
            )}

            {/* Counter */}
            <p className="mt-6 text-sm text-gray-500 text-center">
              {currentIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
