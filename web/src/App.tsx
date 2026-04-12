import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenModal = (title: string = 'Request Quote') => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      
      <main>
        <Hero />
        <TrustedBy />
        <About onOpenModal={handleOpenModal} />
        <Products onOpenModal={handleOpenModal} />
        <Testimonials />
        <CTA onOpenModal={handleOpenModal} />
        <Contact onOpenModal={handleOpenModal} />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919597350880" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25d366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] z-[1000] hover:scale-110 hover:rotate-6 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Reusable Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        title={modalTitle} 
      />
    </>
  );
}

export default App;
