import React from 'react';

interface CTAProps {
  onOpenModal: (title: string) => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
        {/* Background decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-stone-800 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-brown/20 rounded-full opacity-50 shadow-[inset_0_0_100px_rgba(141,110,99,0.1)]"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
                Ready to secure your product <br className="hidden md:block"/> with unbreakable boxes?
            </h2>
            <p className="text-stone-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                Whether you need robust corrugated protection for exports or premium white board retail cartons, our manufacturing facility is ready to scale with you.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => onOpenModal('Bulk Order Pricing')} 
                  className="w-full sm:w-auto bg-brand-brown text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#7a5e54] transition-colors shadow-lg shadow-brand-brown/20 active:scale-95"
                >
                    Get Bulk Pricing
                </button>
                <a 
                  href="tel:9597350880" 
                  className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                    Call <span className="font-normal ms-1">9597350880</span>
                </a>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-6 text-stone-500 text-sm font-medium">
                <span className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Free Samples</span>
                <span className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Fast Hub Transport</span>
            </div>
        </div>
    </section>
  );
};

export default CTA;
