import React from 'react';
import { ArrowDown } from 'lucide-react';
import { HeroCTA } from './shared/Buttons';

const Hero = () => {
  const scrollToNextSection = () => {
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-green-50 to-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-64 w-64 rounded-full bg-green-200 opacity-20 -top-20 -right-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-yellow-200 opacity-20 -bottom-20 -left-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Спасите еду и экономьте вместе с <span className="text-green-700">Sarqyt</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Первое в Казахстане приложение для спасения еды от выбрасывания. 
              Покупайте вкусную еду по сниженным ценам и боритесь с пищевыми отходами.
            </p>
            <div className="flex flex-wrap gap-4">
              <HeroCTA 
                primary
                onClick={() => {}}
                label="Скачать приложение"
              />
              <HeroCTA 
                onClick={() => {}}
                label="Для бизнеса"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[620px] bg-gray-800 rounded-[40px] p-3 shadow-2xl">
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-white relative">
                <img 
                  src="https://images.pexels.com/photos/6941027/pexels-photo-6941027.jpeg" 
                  alt="Sarqyt app"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Sarqyt</h3>
                  <p className="text-lg mb-6 text-center">Спасайте еду, экономьте деньги</p>
                  <div className="w-12 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-green-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;