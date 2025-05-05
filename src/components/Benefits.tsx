import React, { useRef } from 'react';
import { Sprout, DollarSign, Clock, Users, Utensils, BadgePercent, BarChart, Heart } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Преимущества Sarqyt
          </h2>
          <p className="text-xl text-gray-700">
            Sarqyt выгоден всем: пользователям, бизнесу и окружающей среде
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`bg-green-50 rounded-xl p-8 transition-all duration-500 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-green-700" />
              Для пользователей
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <BenefitCard 
                icon={<DollarSign className="h-5 w-5 text-green-700" />}
                title="Экономия денег"
                description="Скидки до 70% от обычной цены"
              />
              <BenefitCard 
                icon={<Utensils className="h-5 w-5 text-green-700" />}
                title="Вкусная еда"
                description="Качественная еда из любимых заведений"
              />
              <BenefitCard 
                icon={<Sprout className="h-5 w-5 text-green-700" />}
                title="Борьба с отходами"
                description="Вклад в сокращение пищевых отходов"
              />
              <BenefitCard 
                icon={<Clock className="h-5 w-5 text-green-700" />}
                title="Удобство"
                description="Простое бронирование и получение"
              />
            </div>
          </div>

          <div className={`bg-yellow-50 rounded-xl p-8 transition-all duration-500 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Utensils className="h-6 w-6 mr-2 text-yellow-600" />
              Для бизнеса
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <BenefitCard 
                icon={<DollarSign className="h-5 w-5 text-yellow-600" />}
                title="Дополнительный доход"
                description="Монетизация непроданной еды"
              />
              <BenefitCard 
                icon={<Users className="h-5 w-5 text-yellow-600" />}
                title="Новые клиенты"
                description="Привлечение новой аудитории"
              />
              <BenefitCard 
                icon={<BarChart className="h-5 w-5 text-yellow-600" />}
                title="Сокращение отходов"
                description="Уменьшение расходов на утилизацию"
              />
              <BenefitCard 
                icon={<Heart className="h-5 w-5 text-yellow-600" />}
                title="Социальная ответственность"
                description="Демонстрация заботы об экологии"
              />
            </div>
          </div>
        </div>

        <div className={`max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white p-8 md:p-10 shadow-lg transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Вместе мы можем изменить ситуацию
          </h3>
          <p className="text-lg md:text-xl text-center mb-8">
            Присоединяйтесь к растущему сообществу ответственных граждан и 
            бизнесов, которые борются с проблемой пищевых отходов в Казахстане
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-green-700 hover:bg-gray-100 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg shadow-md hover:shadow-lg">
              Присоединиться к движению
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="bg-white rounded-lg shadow-sm p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
    <div className="flex items-start">
      <div className="mr-3 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export default Benefits;