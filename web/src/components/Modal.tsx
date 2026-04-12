import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-stone-900/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 overflow-hidden shadow-2xl animate-fade-in-up">
        <div className="bg-brand-brown p-6 text-white flex justify-between items-center">
          <h3 className="font-bold text-xl">{title}</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>
        <div className="p-8">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Form submitted successfully!'); }}>
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent transition-all" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent transition-all" placeholder="+91 9876543210" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-1">Requirements</label>
              <textarea className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent transition-all resize-none h-24" placeholder="Tell us about the plies, sizes, or quantities you need..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 mt-4 bg-brand-brown text-white font-bold rounded-xl hover:bg-stone-800 transition-colors shadow-md">
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
