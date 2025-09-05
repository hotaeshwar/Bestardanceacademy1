import React, { useState, useEffect } from 'react';
import beestarImage from '../assets/images/428629782_122148540770072652_8701818441761608521_n.jpg';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    students: 0,
    performances: 0,
    domains: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Element is visible when its top is within 80% of viewport height
        const isInView = rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        
        if (isInView && !isVisible) {
          setIsVisible(true);
          
          // Animate statistics
          const animateNumber = (target, key, duration = 2000) => {
            const start = 0;
            const startTime = Date.now();
            
            const updateNumber = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(start + (target - start) * progress);
              
              setAnimatedStats(prev => ({ ...prev, [key]: current }));
              
              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              }
            };
            
            updateNumber();
          };

          // Start animations with different delays
          setTimeout(() => animateNumber(10, 'years'), 500);
          setTimeout(() => animateNumber(500, 'students'), 700);
          setTimeout(() => animateNumber(50, 'performances'), 900);
          setTimeout(() => animateNumber(2, 'domains'), 1100);
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Don't call handleScroll immediately - let user scroll to trigger
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BeStar</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 transform delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative group max-w-md mx-auto lg:max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
                <img
                  src={beestarImage}
                  alt="BeeStar Entertainment - Shail and Deepa Parki"
                  className="w-full h-64 sm:h-72 lg:h-80 rounded-xl object-cover shadow-lg transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 transform delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            {/* Our Journey */}
            <div className={`space-y-6 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Our <span className="text-purple-600">Journey</span>
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-purple-600">Founded in 2013</span>, BeStar Entertainment has been a beacon of creativity and artistic excellence for over a decade. What started as a passionate dream has blossomed into a premier destination for dance and fashion enthusiasts.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Under the visionary leadership of <span className="font-semibold text-pink-600">Shail and Deepa Parki</span>, our studio has nurtured countless talents and transformed lives through the power of dance and fashion.
              </p>
            </div>

            {/* Our Mission */}
            <div className={`space-y-6 transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Our <span className="text-pink-600">Mission</span>
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">every individual has a star within them</span> waiting to shine. Our mission is to provide a nurturing environment where creativity flourishes, confidence builds, and dreams take flight.
              </p>
            </div>

            {/* Core Values */}
            <div className={`space-y-6 transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Our <span className="text-purple-600">Values</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600 text-sm">Constantly evolving with <span className="font-semibold">modern techniques</span> and trending styles</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Passion</h4>
                  <p className="text-gray-600 text-sm">Dedicated to nurturing <span className="font-semibold">artistic excellence</span> in every student</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`pt-8 transition-all duration-700 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-2">Join Our Family</h4>
                <p className="mb-4 opacity-90">
                  <span className="font-semibold">Discover your potential</span> and be part of our amazing community of artists and performers.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 transform delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {animatedStats.years}+
            </div>
            <div className="text-gray-600 font-medium">Years of <span className="text-purple-600">Excellence</span></div>
          </div>
          
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {animatedStats.students}+
            </div>
            <div className="text-gray-600 font-medium">Happy <span className="text-pink-600">Students</span></div>
          </div>
          
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {animatedStats.performances}+
            </div>
            <div className="text-gray-600 font-medium">Award Winning <span className="text-purple-600">Performances</span></div>
          </div>
          
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {animatedStats.domains}
            </div>
            <div className="text-gray-600 font-medium">Specialized <span className="text-pink-600">Domains</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;