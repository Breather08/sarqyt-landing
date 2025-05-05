import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-2xl font-bold">Sarqyt</span>
            </div>
            <p className="text-gray-400 mb-6">
              Первое в Казахстане приложение для спасения еды от выбрасывания
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram />} href="#" />
              <SocialIcon icon={<Facebook />} href="#" />
              <SocialIcon icon={<Twitter />} href="#" />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <FooterLink href="#problem" label="Проблема" />
              <FooterLink href="#how-it-works" label="Как это работает" />
              <FooterLink href="#benefits" label="Преимущества" />
              <FooterLink href="#download" label="Скачать" />
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="О нас" />
              <FooterLink href="#" label="Для бизнеса" />
              <FooterLink href="#" label="Блог" />
              <FooterLink href="#" label="Карьера" />
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">info@sarqyt.kz</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">+7 (777) 777-7777</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">Алматы, Казахстан</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sarqyt. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
    >
      {label}
    </a>
  </li>
);

export default Footer;