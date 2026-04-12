import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient text-white py-28 md:py-48 flex items-center">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
            <div className="max-w-3xl text-center md:text-left">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest mb-6">Manufacturing Excellence</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                    Precision-Engineered <br className="hidden md:block" />Packaging Solutions
                </h1>
                <p className="text-xl md:text-2xl mb-12 max-w-2xl opacity-90 leading-relaxed font-light">
                    Coimbatore's trusted partner for premium corrugated and white board boxes. Durable, custom-sized, and delivered with speed.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
                    <button 
                      onClick={() => document.getElementById('products')?.scrollIntoView()} 
                      className="bg-white text-stone-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-tan transition-all shadow-xl">
                        Explore Catalog
                    </button>
                    <a href="https://wa.me/919597350880" target="_blank" rel="noopener noreferrer" className="bg-stone-900/40 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                        <i className="fab fa-whatsapp mr-3 text-2xl text-green-400"></i> WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
