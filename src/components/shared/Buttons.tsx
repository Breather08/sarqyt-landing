import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeroCTAProps {
  primary?: boolean;
  label: string;
  onClick: () => void;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({ 
  primary = false,
  label,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
        primary
          ? 'bg-green-600 text-white hover:bg-green-700'
          : 'bg-white text-green-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
};

interface AppButtonProps {
  onClick: () => void;
}

export const AppStoreCTA: React.FC<AppButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-lg transition-colors duration-300"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M17.05 20.28c-.98.95-2.05.86-3.08.38-1.07-.5-2.06-.48-3.2 0-1.42.62-2.17.53-3.06-.38C3.33 15.85 4.14 8.23 9.33 7.9c1.23.04 2.09.8 3.02.85 1.15-.22 2.23-.99 3.37-.84 1.93.25 3.31 1.17 4.14 2.87-3.82 2.32-3.04 7.5.73 8.87-.62 1.25-1.51 2.42-2.79 3.67l-.75-2.04zM12.9 3.94c.19 1.6-.42 3.12-1.58 4.11-1.03-1.05-1.77-2.59-1.48-4.11 1.06-.11 2.16.45 3.06 0z"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-xs">Скачать в</span>
        <span className="text-sm font-medium">App Store</span>
      </div>
    </button>
  );
};

export const GooglePlayCTA: React.FC<AppButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-lg transition-colors duration-300"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M3.609 1.814L13.792 12 3.61 22.186c-.28-.305-.44-.708-.44-1.134V2.948c0-.426.16-.83.44-1.134zm10.831 10.833l2.717-2.718 3.031 1.74c.99.572.99 2.002 0 2.571l-3.03 1.74-2.718-2.719zm-1.295-.647L3.92 2.77c.195-.384.567-.626.966-.626.246 0 .49.079.704.238l11.631 6.709-3.166 3.166zM5.59 21.85c-.214.16-.458.239-.704.239-.399 0-.77-.242-.966-.626L13.145 12l3.166 3.166-10.722 6.684z"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-xs">Скачать в</span>
        <span className="text-sm font-medium">Google Play</span>
      </div>
    </button>
  );
};