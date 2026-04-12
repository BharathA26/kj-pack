import React from 'react';

interface HeaderProps {
  onOpenModal: (title: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="sticky top-0 z-[100] bg-white/75 backdrop-blur-2xl border-b border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-6 h-24 flex items-center justify-between">
            
            {/* Logo area */}
            <div 
              className="flex items-center space-x-4 cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-brown to-stone-900 flex items-center justify-center text-white shadow-lg shadow-brand-brown/30 group-hover:scale-105 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <i className="fas fa-box-open text-xl transform group-hover:rotate-12 transition-transform duration-500"></i>
                </div>
                <div className="flex flex-col justify-center">
                    <span className="font-black text-2xl tracking-tighter text-stone-900 leading-none group-hover:text-brand-brown transition-colors duration-300">KJ PACK</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold mt-1">Coimbatore</span>
                </div>
            </div>
            
            {/* Navigation links */}
            <nav className="hidden lg:flex items-center bg-stone-100/50 p-1.5 rounded-full border border-stone-200/50">
                {['About', 'Products', 'Contact'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="px-6 py-2 rounded-full text-sm font-bold text-stone-600 hover:text-brand-brown hover:bg-white hover:shadow-sm transition-all duration-300"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Action Group */}
            <div className="flex items-center space-x-3 sm:space-x-6">
                <a 
                  href="tel:9597350880" 
                  className="hidden sm:flex items-center font-bold text-stone-700 hover:text-brand-brown transition-colors group"
                >
                    <div className="w-10 h-10 bg-brand-tan/50 group-hover:bg-brand-tan rounded-full flex items-center justify-center mr-3 transition-colors">
                        <i className="fas fa-phone-alt text-brand-brown text-sm"></i>
                    </div>
                    <span className="tracking-wide">9597350880</span>
                </a>
                <button 
                  onClick={() => onOpenModal('Request Quote')} 
                  className="relative group overflow-hidden bg-stone-900 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-stone-900/20 active:scale-95 transition-all duration-300 border border-stone-800"
                >
                    <span className="relative z-10 flex items-center justify-center">
                        Request Quote
                        <i className="fas fa-arrow-right ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
                    </span>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-brown via-[#7a5e54] to-brand-brown scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                </button>
            </div>
        </div>
    </header>
  );
};

export default Header;
