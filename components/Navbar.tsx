import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ShieldCheck className="h-8 w-8 text-hillstone-900" />
              <span className="ml-2 text-xl font-bold text-slate-800 tracking-tight">Hillstone <span className="text-hillstone-600">Networks</span></span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button onClick={() => scrollTo('features')} className="text-gray-600 hover:text-hillstone-600 px-3 py-2 text-sm font-medium transition-colors">Why Hillstone</button>
            <button onClick={() => scrollTo('references')} className="text-gray-600 hover:text-hillstone-600 px-3 py-2 text-sm font-medium transition-colors">레퍼런스</button>
            <button onClick={() => scrollTo('pricing')} className="bg-hillstone-600 hover:bg-hillstone-800 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md transform hover:scale-105">
              모델 및 가격 보기
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hillstone-600"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollTo('features')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-hillstone-600 hover:bg-gray-50">Why Hillstone</button>
            <button onClick={() => scrollTo('references')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-hillstone-600 hover:bg-gray-50">레퍼런스</button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-left px-3 py-2 text-base font-bold text-hillstone-600 hover:bg-gray-50">모델 및 가격 보기</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;