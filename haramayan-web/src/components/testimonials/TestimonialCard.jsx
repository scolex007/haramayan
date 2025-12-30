import BenefitBadge from './BenefitBadge';
import { formatCurrency } from '../../data/testimonialsData';

export default function TestimonialCard({ testimonial, onClick }) {
  return (
    <article
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={() => onClick(testimonial.id - 1)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(testimonial.id - 1);
        }
      }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.story}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Benefit Badge */}
        <div className="absolute top-4 right-4">
          <BenefitBadge type={testimonial.benefitType} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h4>

        {testimonial.amount && (
          <p className="text-2xl font-bold text-primary-600 mb-2">
            {formatCurrency(testimonial.amount)}
          </p>
        )}

        <p className="text-gray-700 italic">"{testimonial.shortQuote}"</p>

        {testimonial.date && (
          <p className="text-sm text-gray-500 mt-3">{testimonial.date}</p>
        )}
      </div>
    </article>
  );
}
