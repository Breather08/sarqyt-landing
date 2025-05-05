import React, { useRef } from 'react';
import { Download, Search, ShoppingBag, Save } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-20 bg-green-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Как работает Sarqyt
          </h2>
          <p className="text-xl text-gray-700">
            Используйте наше приложение, чтобы спасать еду от выбрасывания и 
            одновременно экономить деньги. Это просто!
          </p>
        </div>

        <div className={`transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            <div className="space-y-12 md:space-y-0">
              <Step 
                icon={<Download />}
                title="Скачайте приложение"
                description="Загрузите Sarqyt из App Store или Google Play и создайте свой аккаунт"
                position="left"
                index={1}
              />
              
              <Step 
                icon={<Search />}
                title="Найдите поблизости"
                description="Просмотрите рестораны, кафе и магазины поблизости, предлагающие еду со скидкой"
                position="right"
                index={2}
              />
              
              <Step 
                icon={<ShoppingBag />}
                title="Сделайте заказ"
                description="Выберите наборы еды, которые хотите спасти, и оплатите их через приложение"
                position="left"
                index={3}
              />
              
              <Step 
                icon={<Save />}
                title="Заберите и наслаждайтесь"
                description="Заберите ваш заказ в указанное время и наслаждайтесь вкусной едой, зная, что вы помогли сократить пищевые отходы"
                position="right"
                index={4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: 'left' | 'right';
  index: number;
}

const Step = ({ icon, title, description, position, index }: StepProps) => (
  <div className="md:grid md:grid-cols-2 items-center">
    <div className={`md:col-span-1 ${position === 'right' ? 'md:order-2' : ''}`}>
      <div className="flex items-start md:items-center p-6">
        <div className={`md:hidden mr-4 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center`}>
          {index}
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 max-w-md transition-transform duration-300 hover:shadow-lg">
          <div className="mb-4 w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
    
    <div className={`hidden md:flex md:col-span-1 justify-center ${position === 'right' ? 'md:order-1' : ''}`}>
      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center z-10">
        {index}
      </div>
    </div>
  </div>
);

export default HowItWorks;