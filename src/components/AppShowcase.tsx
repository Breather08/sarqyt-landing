import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { AppStoreCTA, GooglePlayCTA } from './shared/Buttons';

const AppShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="download" 
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Скачайте Sarqyt прямо сейчас
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Наше приложение доступно в App Store и Google Play. 
                Скачайте его бесплатно сегодня и начните спасать еду!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <AppStoreCTA onClick={() => {}} />
                <GooglePlayCTA onClick={() => {}} />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className={`relative transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Phone mockup 1 */}
              <div className="absolute -left-4 md:-left-12 top-10 w-[220px] h-[440px] bg-gray-800 rounded-[30px] p-3 shadow-xl transform -rotate-6">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-white">
                  <img 
                    src="https://images.pexels.com/photos/5965528/pexels-photo-5965528.jpeg" 
                    alt="Sarqyt map screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Phone mockup 2 - main phone */}
              <div className="relative z-10 w-[240px] h-[480px] bg-gray-800 rounded-[32px] p-3 shadow-2xl">
                <div className="w-full h-full rounded-[24px] overflow-hidden bg-white">
                  <img 
                    src="https://images.pexels.com/photos/3943379/pexels-photo-3943379.jpeg" 
                    alt="Sarqyt app screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Phone mockup 3 */}
              <div className="absolute -right-4 md:-right-12 top-20 w-[220px] h-[440px] bg-gray-800 rounded-[30px] p-3 shadow-xl transform rotate-6">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-white">
                  <img 
                    src="https://images.pexels.com/photos/5965530/pexels-photo-5965530.jpeg" 
                    alt="Sarqyt checkout screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;