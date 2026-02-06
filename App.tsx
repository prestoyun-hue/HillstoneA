import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import References from './components/References';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('General');

  const handleOpenModal = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-cyan-200 selection:text-hillstone-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <References />
        <Pricing onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        selectedProduct={selectedProduct} 
      />
    </div>
  );
}

export default App;