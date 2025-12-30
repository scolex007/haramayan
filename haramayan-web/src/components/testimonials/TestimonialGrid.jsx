import TestimonialCard from './TestimonialCard';

export default function TestimonialGrid({ testimonials, onImageClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          onClick={onImageClick}
        />
      ))}
    </div>
  );
}
