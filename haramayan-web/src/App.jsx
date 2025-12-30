import { useState, useEffect } from 'react';
import TestimonialsSection from './components/testimonials/TestimonialsSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showFullStory, setShowFullStory] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'testimonials', 'programs', 'membership'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-700">HIM</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'testimonials' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'programs' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('membership')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'membership' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Membership
              </button>
            </div>

            {/* Login/Register Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://secure.haramayan.com/page-auth-login.php"
                className="px-4 py-2 text-sm font-medium text-primary-700 border border-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Login
              </a>
              <a
                href="https://secure.haramayan.com/page-auth-register.php"
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Register
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('membership')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Membership
              </button>
              <div className="pt-4 space-y-2">
                <a
                  href="https://secure.haramayan.com/page-auth-login.php"
                  className="block w-full text-center px-3 py-2 text-base font-medium text-primary-700 border border-primary-700 rounded-md hover:bg-primary-50"
                >
                  Login
                </a>
                <a
                  href="https://secure.haramayan.com/page-auth-register.php"
                  className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              No One Stands Alone<br />
              <span className="text-primary-700">in Times of Need</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-semibold">
              Haramayan Itinakdang Makatulong (HIM)
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              The Best Social Welfare Service Program ONLINE
            </p>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                For 10 years, we've walked alongside thousands of families through their challenges and triumphs.
                From medical emergencies to life's journey, we're here – not just for financial assistance,
                but for hope, prayer, and genuine care.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('membership')}
                className="px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-lg transition-all transform hover:scale-105"
              >
                Join Us Now
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 text-lg font-semibold text-primary-700 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HIM Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose <span className="text-primary-700">HIM</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-primary-50 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Recognized and Trusted</h3>
              <p className="text-gray-700">
                Acknowledged by Central Luzon Conference (CLC) since 2015 as an authentic supporting ministry
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-primary-50 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">10 Years of Faithful Service</h3>
              <p className="text-gray-700">
                A decade of dedicated service to our bonafide members and their families
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-primary-50 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Holistic Support</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Financial assistance for medical needs</li>
                <li>• Help with accidental emergencies</li>
                <li>• Natal care support</li>
                <li>• Funeral assistance</li>
                <li>• Personal visits and sympathy</li>
                <li>• Prayer and spiritual care</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-primary-50 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Online and Accessible</h3>
              <p className="text-gray-700">
                Get help wherever you are – the first damayan program fully embracing the digital age
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspired by Faith Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Inspired by <span className="text-primary-700">Faith</span>
          </h2>
          <p className="text-2xl text-primary-700 font-semibold mb-6 italic">
            "Love your neighbor as yourself"
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our ministry is rooted in Biblical stories of the Good Samaritan and the Good and Faithful Servant of God.
            Like them, we believe that true service comes from the heart – ready to help, care for, and stand with
            others at every stage of life.
          </p>

          {/* Testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
            <svg className="w-12 h-12 text-primary-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-700 text-lg italic mb-4">
              "We weren't alone when our child was hospitalized. HIM became the answer to our prayers –
              not just financially, but emotionally and spiritually."
            </p>
            <p className="text-primary-700 font-semibold">— Maria Santos, Member since 2018</p>
          </div>
        </div>
      </section>

      {/* Real Stories, Real Hope - Testimonials */}
      <TestimonialsSection />

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-primary-700">Story</span>
          </h2>

          <div className="space-y-12">
            {/* Beginning */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning of a Mission</h3>
              <h4 className="text-xl font-semibold text-primary-700 mb-3">The Haranista Legacy</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                HIM's roots trace back to the <strong>Haranista</strong>, a founding group of compassionate elders in
                Bongabon, Nueva Ecija, who pioneered the spirit of mutual aid approximately 30 years ago. When a member
                passed away, the Haranista came together—contributing financially from their own pockets and singing during
                wakes to comfort grieving families. This tradition later expanded to include dance, creating a beautiful
                expression of community solidarity.
              </p>

              {/* Collapsible Full Story */}
              {showFullStory && (
                <div className="space-y-6 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed">
                    The Haranista movement spread throughout the country as people witnessed its profound impact during
                    times of loss. However, as the group grew, management challenges led to fragmentation into smaller groups.
                    The original vision, while powerful, remained limited to funeral assistance only.
                  </p>

                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">The Birth of HIM</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      One of the Haranista leaders approached me to become their adviser, offering free monthly contributions
                      as an incentive. I suggested expanding their services to include medical assistance for members during
                      sickness—not just funerals. While they appreciated the idea, their commitment remained solely focused on
                      funeral support.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Instead, these leaders and their assistants encouraged me to form my own group and implement my vision.
                      They believed this broader program would serve the community better. For several nights, I couldn't sleep.
                      It felt as if God was speaking to me, urging me to answer the people's call.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Finally, I prayed and dedicated myself to follow what I believed was God's voice speaking through these people.
                      On <strong>June 12, 2014</strong>, Help Intended Ministry (HIM) was born—with its Tagalog translation:
                      <em> Harana at Damayan</em>, or <strong>Haramayan Itinakdang Makatulong</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">From Local Roots to International Reach</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      HIM began serving Seventh-day Adventist church brethren in our town, then expanded to nearby church
                      communities and the broader public. We provided financial assistance and spiritual inspiration to members
                      and their dependents for medical, accidental, natal, and funeral needs.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      God blessed the ministry with many members. During the pandemic, numbers declined, but the mission continued.
                      Then came a pivotal moment: during HIM's tenth-year anniversary, Pastor Andoy delivered a message challenging
                      us to soar high and dominate.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      To materialize this vision, God intervened by inspiring us to upgrade from manual to digital operations.
                      This transformation enabled us to serve wider, faster, and more strategically. With this digital evolution,
                      HIM became <strong>HIM Plus International Organization (HPIO)</strong>—duly registered with the Security and
                      Exchange Commission (SEC) and adopted by churches and other associations.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Today, HPIO remains a recognized supporting ministry of the Central Luzon Conference of Seventh-day Adventists,
                      continuing the Haranista legacy while expanding the vision to serve communities worldwide.
                    </p>
                  </div>
                </div>
              )}

              {/* Read More Button */}
              <div className="mt-6">
                <button
                  onClick={() => setShowFullStory(!showFullStory)}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  {showFullStory ? (
                    <>
                      <span>Show Less</span>
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Read Our Full Story</span>
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Decade of Service */}
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Decade of Service</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                From our founding on June 12, 2014, and official recognition in 2015 to the present, we have remained
                faithful to our mission: to serve with heart, integrity, and genuine care. Over these years:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  We've helped hundreds of families through their medical emergencies
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  We've stood beside parents on their natal journey
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  We've provided dignity and support in times of loss
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  We've been a channel of hope during accidents and unexpected events
                </li>
              </ul>
            </div>

            {/* More Than Financial */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Than Financial Assistance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                HIM is not simply an insurance or damayan program. We are a community united by faith, compassion,
                and a mission to leave no one behind.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Every member is not just a number. You are:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center bg-primary-50 p-4 rounded-lg">
                  <span className="text-primary-600 text-2xl mr-3">🙏</span>
                  <span className="text-gray-700">Our brother or sister whom we pray for</span>
                </div>
                <div className="flex items-center bg-primary-50 p-4 rounded-lg">
                  <span className="text-primary-600 text-2xl mr-3">🤝</span>
                  <span className="text-gray-700">Our friend whom we visit</span>
                </div>
                <div className="flex items-center bg-primary-50 p-4 rounded-lg">
                  <span className="text-primary-600 text-2xl mr-3">👨‍👩‍👧‍👦</span>
                  <span className="text-gray-700">Our family whom we accompany at all times</span>
                </div>
              </div>
            </div>

            {/* Biblical Foundation */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Foundation: Biblical Principles</h3>
              <p className="text-gray-700 leading-relaxed mb-4">We are guided by stories such as:</p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-700 mb-2">The Good Samaritan (Luke 10:25-37)</h4>
                  <p className="text-gray-700 text-sm">
                    Which teaches us that a true neighbor is one willing to help even strangers.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-700 mb-2">The Good and Faithful Servant (Matthew 25:14-30)</h4>
                  <p className="text-gray-700 text-sm">
                    Which inspires us to use our talents and resources for the benefit of many.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4 italic">
                We're not perfect, but every day, we strive to be God's instruments in meeting your needs.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  To provide holistic welfare support to our bonafide members and their dependents through
                  financial assistance, spiritual care and prayer, personal presence and sympathy,
                  and a community of support and hope.
                </p>
              </div>
              <div className="bg-primary-700 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="leading-relaxed">
                  A community where no one stands alone in times of need – where every member experiences
                  compassion, dignity, and hope.
                </p>
              </div>
            </div>

            {/* Recognition */}
            <div className="bg-white border-2 border-primary-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Recognition and Trust</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">✓</div>
                  <h4 className="font-bold text-gray-900 mb-2">CLC Supporting Ministry</h4>
                  <p className="text-gray-700 text-sm">Officially recognized since 2015</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="font-bold text-gray-900 mb-2">10 Years of Service</h4>
                  <p className="text-gray-700 text-sm">A decade proving our commitment</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">✝️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Rooted in Faith</h4>
                  <p className="text-gray-700 text-sm">Service is more than obligation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            Our <span className="text-primary-700">Programs</span>
          </h2>
          <p className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            HIM is a social welfare evangelism program offering comprehensive assistance to our bonafide members
            and their dependents. We care for the whole person: physical, emotional, and spiritual.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Medical Assistance */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Medical Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">When illness or medical emergency strikes, you're not alone.</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What's covered:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Primary Member: ₱200 to ₱40,000</li>
                    <li>• Dependents: ₱100 to ₱20,000</li>
                    <li>• Can claim assistance twice per year</li>
                    <li>• Based on prevailing bracket and case level</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Beyond the money:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Prayer for your healing</li>
                    <li>• Personal visits when possible</li>
                    <li>• Emotional and spiritual support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accidental Assistance */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Accidental Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">Accidents are unexpected, but HIM is always ready.</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What's covered:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Primary Member: ₱200 to ₱40,000</li>
                    <li>• Dependents: ₱100 to ₱20,000</li>
                    <li>• Emergency financial support</li>
                    <li>• Help with documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Beyond the money:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Quick response to emergencies</li>
                    <li>• Prayer support</li>
                    <li>• Recovery process support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Natal Care */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Natal Care Support</h3>
              </div>
              <p className="text-gray-700 mb-4">The arrival of new life should be a celebration, not a stress.</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What's covered:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Primary Member: ₱200 to ₱40,000</li>
                    <li>• Dependents: ₱100 to ₱20,000</li>
                    <li>• Prenatal and delivery expenses</li>
                    <li>• Postnatal care support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Beyond the money:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Prayer for safe delivery</li>
                    <li>• Celebration of new life</li>
                    <li>• Support system for new parents</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Funeral Assistance */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Funeral Assistance</h3>
              </div>
              <p className="text-gray-700 mb-3">In the most difficult times, we're here for you.</p>
              <div className="bg-primary-50 p-3 rounded-lg mb-4">
                <p className="text-primary-700 font-bold text-sm">💰 Special Benefit: Doubled coverage for funeral assistance</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What's covered (Doubled Benefits):</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Member:</span> ₱400 to ₱80,000<br/>
                        <span className="text-xs text-gray-600">(Doubled the prevailing brackets)</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Dependents:</span> ₱200 to ₱40,000<br/>
                        <span className="text-xs text-gray-600">(Doubled the prevailing brackets)</span>
                      </div>
                    </li>
                    <li>• Funeral and burial expenses</li>
                    <li>• Documentation support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Beyond the money:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Personal presence and sympathy</li>
                    <li>• Prayer and spiritual comfort</li>
                    <li>• Community support during mourning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why HIM is Different */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why HIM is Different?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-bold text-gray-900 mb-2">Online and Accessible</h4>
                <p className="text-sm text-gray-700">Wherever you are, you can get help</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h4 className="font-bold text-gray-900 mb-2">Personal Touch</h4>
                <p className="text-sm text-gray-700">You're not a number, you're family</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✝️</div>
                <h4 className="font-bold text-gray-900 mb-2">Faith-Based</h4>
                <p className="text-sm text-gray-700">Rooted in Biblical principles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            Become Part of the <span className="text-primary-700">HIM Family</span>
          </h2>
          <p className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Joining Haramayan Itinakdang Makatulong isn't just a transaction – it's joining a community that will
            care for you and your family at every stage of life.
          </p>

          {/* Membership Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Qualifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">No age limit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Good health declaration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Commitment to regular contributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Agreement with HIM principles and values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Submission of required documents</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Membership Contributions</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary-700">₱200</div>
                  <div className="text-gray-700">Monthly subscription</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary-700">₱300</div>
                  <div className="text-gray-700">Membership fee (one-time only)</div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-primary-600 text-white p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">How to Apply</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">1</div>
                <h4 className="font-bold mb-2">Inquire</h4>
                <p className="text-sm">Contact us for initial consultation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">2</div>
                <h4 className="font-bold mb-2">Prepare Documents</h4>
                <p className="text-sm">Gather all required documents</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">3</div>
                <h4 className="font-bold mb-2">Submit & Join</h4>
                <p className="text-sm">Complete application and orientation</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              <details className="bg-primary-50 p-6 rounded-lg">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  How long before benefits become available?
                </summary>
                <p className="mt-3 text-gray-700">
                  A 2-month probationary period begins from your enrollment date. Following this period,
                  you gain complete benefit access.
                </p>
              </details>
              <details className="bg-primary-50 p-6 rounded-lg">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Does HIM cover pre-existing medical conditions?
                </summary>
                <p className="mt-3 text-gray-700">
                  Absolutely! All pre-existing conditions receive full coverage. Additionally, no age restrictions apply.
                  However, remember each member accesses assistance twice annually maximum.
                </p>
              </details>
              <details className="bg-primary-50 p-6 rounded-lg">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  How does overseas residence affect membership?
                </summary>
                <p className="mt-3 text-gray-700">
                  Location creates no distinction! Our fully online transaction system delivers identical service
                  and benefits globally.
                </p>
              </details>
              <details className="bg-primary-50 p-6 rounded-lg">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  What assistance amount can I expect?
                </summary>
                <p className="mt-3 text-gray-700">
                  Support ranges from ₱200 to ₱40,000, determined by prevailing assessment brackets and case severity.
                  Remember the twice-yearly maximum limitation.
                </p>
              </details>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              "Two are better than one... For if they fall, one will lift up his companion." – Ecclesiastes 4:9-10
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg">
                📧 Email: <a href="mailto:jegessentialcollegesinc@gmail.com" className="underline">jegessentialcollegesinc@gmail.com</a>
              </p>
              <p className="text-lg">📱 Phone: 0995-389-5071</p>
              <p className="text-lg">📍 Essential School, Bongabon Nueva Ecija</p>
              <p className="text-lg">Contact Person: Javier Garde</p>
            </div>
            <a
              href="https://secure.haramayan.com/page-auth-register.php"
              className="inline-block px-8 py-4 text-lg font-semibold bg-white text-primary-700 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Application Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HIM</h3>
              <p className="text-gray-400">
                Haramayan Itinakdang Makatulong - The Best Social Welfare Service Program ONLINE
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white">
                  About Us
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-gray-400 hover:text-white">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('programs')} className="block text-gray-400 hover:text-white">
                  Programs
                </button>
                <button onClick={() => scrollToSection('membership')} className="block text-gray-400 hover:text-white">
                  Membership
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 jegessentialcollegesinc@gmail.com</p>
                <p>📱 0995-389-5071</p>
                <p>📍 Essential School, Bongabon Nueva Ecija</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HIM Plus International Organization. All rights reserved.</p>
            <p className="mt-2">Recognized by Central Luzon Conference since 2015</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
