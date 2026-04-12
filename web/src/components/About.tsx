import React from 'react';

interface AboutProps {
  onOpenModal: (title: string) => void;
}

const About: React.FC<AboutProps> = ({ onOpenModal }) => {
  return (
    <section id="about" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-tan rounded-full -z-10 opacity-50"></div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-stone-50">
                        <img src="https://images.unsplash.com/photo-1530124560676-574932f9435c?auto=format&fit=crop&q=80&w=1000" 
                             alt="KJ Pack manufacturing unit" 
                             className="w-full h-[500px] object-cover" />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-brand-brown text-white p-8 rounded-2xl shadow-xl hidden md:block">
                        <p className="text-4xl font-bold">10+</p>
                        <p className="text-sm font-semibold opacity-80 uppercase tracking-widest">Years Expertise</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-8 section-title leading-tight">Coimbatore's Premier Manufacturing Unit</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                        KJ Pack is a modern manufacturing unit dedicated to providing the Coimbatore region with high-strength, custom-sized packaging. We specialize in everything from rugged 7-ply shipping boxes to elegant retail white board cartons.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div className="flex items-center p-4 bg-brand-beige rounded-xl border border-stone-100">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-brown shadow-sm mr-4">
                                <i className="fas fa-truck text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Local Delivery</h4>
                                <p className="text-xs text-stone-500">Fast hub transport</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-brand-beige rounded-xl border border-stone-100">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-brown shadow-sm mr-4">
                                <i className="fas fa-shield-alt text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Industrial Grade</h4>
                                <p className="text-xs text-stone-500">Certified Strength</p>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                      onClick={() => onOpenModal('About Us Inquiry')} 
                      className="group flex items-center font-bold text-brand-brown hover:text-stone-900 transition-colors">
                        Learn more about our process 
                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
