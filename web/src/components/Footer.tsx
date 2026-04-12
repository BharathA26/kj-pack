import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-2 flex flex-col items-start pr-8">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-brown to-stone-900 rounded-xl flex items-center justify-center text-white shadow-md">
                    <i className="fas fa-box-open text-lg"></i>
                </div>
                <span className="font-black text-2xl tracking-tighter text-stone-900 leading-none">KJ PACK</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Precision-engineered, hassle-free packaging solutions that manufacturers and businesses trust.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 mb-8 text-stone-400">
              <a href="#" className="hover:text-stone-900 transition-colors"><i className="fab fa-x-twitter text-lg"></i></a>
              <a href="#" className="hover:text-brand-brown transition-colors"><i className="fab fa-instagram text-lg"></i></a>
              <a href="#" className="hover:text-brand-brown transition-colors"><i className="fab fa-linkedin text-lg"></i></a>
              <a href="#" className="hover:text-brand-brown transition-colors"><i className="fab fa-facebook text-lg"></i></a>
              <a href="#" className="hover:text-brand-brown transition-colors"><i className="fab fa-youtube text-lg"></i></a>
            </div>

            {/* Status Pill */}
            <div className="flex items-center space-x-2 border border-stone-200 rounded-lg px-4 py-2 hover:bg-stone-50 transition-colors cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-semibold text-stone-700">All services operational</span>
            </div>
          </div>

          {/* Column 2: Products & Explore */}
          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-stone-900 mb-5">Products</h4>
              <ul className="space-y-4 text-sm text-stone-500">
                <li><a href="#" className="hover:text-brand-brown transition-colors">Corrugated Boxes <span className="ml-2 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span></a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Corrugated Rolls</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">White Board Cartons</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Custom Printing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 mb-5">Explore</h4>
              <ul className="space-y-4 text-sm text-stone-500">
                <li><a href="#" className="hover:text-brand-brown transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Sustainability</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Company & Blogs */}
          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-stone-900 mb-5">Company</h4>
              <ul className="space-y-4 text-sm text-stone-500">
                <li><a href="#" className="hover:text-brand-brown transition-colors">About KJ Pack</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Factory Tour</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Quality Standards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 mb-5">Media</h4>
              <ul className="space-y-4 text-sm text-stone-500">
                <li><a href="#" className="hover:text-brand-brown transition-colors">News Hub</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Events</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Partner & Support */}
          <div className="space-y-10">
            <div>
              <h4 className="font-bold text-stone-900 mb-5">Partner with us</h4>
              <ul className="space-y-4 text-sm text-stone-500">
                <li><a href="#" className="hover:text-brand-brown transition-colors">Bulk Ordering</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Wholesale Program</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 mb-5">Support</h4>
              <ul className="space-y-4 text-sm text-stone-500">
                <li><a href="#" className="hover:text-brand-brown transition-colors">Request a Quote</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-brand-brown transition-colors">Shipping Zones</a></li>
              </ul>
            </div>
            <div>
                <a href="#" className="text-sm font-bold text-stone-900 hover:text-brand-brown transition-colors flex items-center">
                    Comparisons <i className="fas fa-chevron-right ml-2 text-[10px]"></i>
                </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-stone-500 text-sm">
                © {new Date().getFullYear()} KJ Pack — Coimbatore, Tamil Nadu
            </span>
            <div className="flex items-center space-x-6 text-sm text-stone-500 font-medium">
                <a href="#" className="hover:text-brand-brown transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-brown transition-colors">Terms</a>
                <a href="#" className="hover:text-brand-brown transition-colors">Code of conduct</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
