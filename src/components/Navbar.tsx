import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-800">
              Игорь Каменев
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Услуги
            </a>
            <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors">
              Кейсы
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Обо мне
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Отзывы
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Блог
            </a>
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md font-medium transition-colors"
            >
              Связаться
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#cases" 
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Кейсы
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Обо мне
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </a>
              <a 
                href="#blog" 
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </a>
              <a 
                href="#contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md font-medium text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Связаться
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;