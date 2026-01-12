import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          Get in <span className="text-primary-700">Touch</span>
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Have questions about HIM membership or our programs? We're here to help. Send us a message and we'll respond within 24-48 hours.
        </p>

        <ContactForm />

        {/* Alternative Contact Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Or call us directly: <span className="font-semibold text-primary-700">📱 0995-389-5071</span>
          </p>
          <p className="text-sm mt-1">
            Email: <a href="mailto:hpiharamayan@gmail.com" className="font-semibold text-primary-700 hover:underline">hpiharamayan@gmail.com</a>
          </p>
          <p className="text-sm mt-1">
            Contact Person: Javier Garde
          </p>
        </div>
      </div>
    </section>
  );
}
