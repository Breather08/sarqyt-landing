import React, { useEffect, useRef } from 'react';
import { Trash2, Leaf, DollarSign } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Problem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            В Казахстане ежегодно выбрасываются <span className="text-red-600">тонны</span> еды
          </h2>
          <p className="text-xl text-gray-700">
            Мы создали Sarqyt, чтобы помочь решить проблему пищевых отходов, 
            соединяя потребителей с ресторанами и кафе, у которых остается непроданная еда.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <StatCard 
            icon={<Trash2 className="h-12 w-12 text-white" />}
            color="bg-red-600"
            title="300 кг"
            description="В среднем каждый казахстанец выбрасывает около 300 кг пищевых отходов в год"
          />
          <StatCard 
            icon={<DollarSign className="h-12 w-12 text-white" />}
            color="bg-yellow-500"
            title="₸93 000 000 000"
            description="Экономические потери от выброшенной еды в Казахстане ежегодно"
          />
          <StatCard 
            icon={<Leaf className="h-12 w-12 text-white" />}
            color="bg-green-600"
            title="8%"
            description="Глобальных выбросов парниковых газов связаны с пищевыми отходами"
          />
        </div>

        <div className="mt-16 p-6 md:p-8 bg-gray-100 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-4">
            Sarqyt - первое решение этой проблемы в Казахстане
          </h3>
          <p className="text-lg text-gray-700 text-center">
            Мы соединяем людей с ресторанами и кафе, которые в конце дня 
            предлагают непроданную еду со скидкой до 70%. Это позволяет снизить 
            количество пищевых отходов и дает возможность пользователям пробовать 
            вкусную еду по доступным ценам.
          </p>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
}

const StatCard = ({ icon, color, title, description }: StatCardProps) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
    <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

export default Problem;