import { useState } from 'react';
import VideoHero from './VideoHero';
import TestimonialCarousel from './TestimonialCarousel';
import TestimonialGrid from './TestimonialGrid';
import TestimonialLightbox from './TestimonialLightbox';
import { testimonialsData } from '../../data/testimonialsData';

export default function TestimonialsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.images.length - 1 : prev - 1
    );
  };

  const featuredTestimonials = testimonialsData.images.filter(t => t.featured);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Stories, Real <span className="text-primary-700">Hope</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the members and families whose lives have been touched by HIM's mission of compassion and care.
          </p>
        </div>

        {/* Video Hero */}
        <VideoHero video={testimonialsData.video} />

        {/* Featured Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Featured Member Stories
          </h3>
          <TestimonialCarousel
            testimonials={featuredTestimonials}
            onCardClick={openLightbox}
          />
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            More Stories from Our Community
          </h3>
          <TestimonialGrid
            testimonials={testimonialsData.images}
            onImageClick={openLightbox}
          />
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <TestimonialLightbox
            isOpen={lightboxOpen}
            currentIndex={currentIndex}
            testimonials={testimonialsData.images}
            onClose={closeLightbox}
            onNext={nextTestimonial}
            onPrev={prevTestimonial}
          />
        )}
      </div>
    </section>
  );
}
