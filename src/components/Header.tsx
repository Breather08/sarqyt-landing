import React, { useState, useEffect } from 'react';
import { Menu, X, Apple, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ShoppingBag 
              className="h-8 w-8 text-green-700 mr-2" 
              strokeWidth={2} 
            />
            <span className="text-2xl font-bold text-green-700">Sarqyt</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#problem" label="Проблема" />
            <NavLink href="#how-it-works" label="Как это работает" />
            <NavLink href="#benefits" label="Преимущества" />
            <NavLink href="#download" label="Скачать" />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <MobileNavLink href="#problem" label="Проблема" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#how-it-works" label="Как это работает" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#benefits" label="Преимущества" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#download" label="Скачать" onClick={() => setIsOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => (
  <a 
    href={href} 
    className="text-gray-800 hover:text-green-700 font-medium transition-colors duration-300"
  >
    {label}
  </a>
);

interface MobileNavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink = ({ href, label, onClick }: MobileNavLinkProps) => (
  <a 
    href={href} 
    className="text-gray-800 hover:text-green-700 font-medium py-2 transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </a>
);

export default Header;