import React from 'react';

interface ContactProps {
  onOpenModal: (title: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenModal }) => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                <div>
                    <h2 className="text-4xl font-bold mb-10 section-title">Get in Touch</h2>
                    <div className="grid gap-8">
                        <div className="flex group">
                            <div className="w-14 h-14 bg-brand-tan rounded-2xl flex items-center justify-center text-brand-brown flex-shrink-0 group-hover:bg-brand-brown group-hover:text-white transition-all shadow-sm">
                                <i className="fas fa-map-marker-alt text-2xl"></i>
                            </div>
                            <div className="ml-6">
                                <h4 className="font-bold text-stone-900 text-lg">Factory Location</h4>
                                <p className="text-stone-500 mt-1">Industrial Estate, Coimbatore, <br />Tamil Nadu - 641001</p>
                            </div>
                        </div>
                        <div className="flex group">
                            <div className="w-14 h-14 bg-brand-tan rounded-2xl flex items-center justify-center text-brand-brown flex-shrink-0 group-hover:bg-brand-brown group-hover:text-white transition-all shadow-sm">
                                <i className="fas fa-phone-alt text-2xl"></i>
                            </div>
                            <div className="ml-6">
                                <h4 className="font-bold text-stone-900 text-lg">Contact Number</h4>
                                <a href="tel:9597350880" className="text-brand-brown font-bold text-xl block mt-1 hover:underline">9597350880</a>
                            </div>
                        </div>
                        <div className="flex group">
                            <div className="w-14 h-14 bg-brand-tan rounded-2xl flex items-center justify-center text-brand-brown flex-shrink-0 group-hover:bg-brand-brown group-hover:text-white transition-all shadow-sm">
                                <i className="fas fa-envelope text-2xl"></i>
                            </div>
                            <div className="ml-6">
                                <h4 className="font-bold text-stone-900 text-lg">Email Address</h4>
                                <a href="mailto:info@kjpack.com" className="text-stone-500 mt-1 hover:text-brand-brown">info@kjpack.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 p-8 bg-brand-beige rounded-3xl border border-stone-100 shadow-inner">
                        <h4 className="text-xl font-bold mb-4">Request a Sample</h4>
                        <p className="text-stone-600 mb-6 font-light">Unsure about the sizing or ply? We provide free samples for corporate orders to ensure perfect fitment.</p>
                        <button 
                          onClick={() => onOpenModal('Sample Request')} 
                          className="font-bold text-brand-brown border-b-2 border-brand-brown pb-1 hover:text-stone-900 hover:border-stone-900 transition-colors">
                            Request Sample Now <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
                
                {/* Visual placeholder for map or contact image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-auto">
                    <img src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1000" 
                         alt="Contact us map" 
                         className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-stone-900/10"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
