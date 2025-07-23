import React from 'react';
import { Hero } from './components/Hero';
import { ProductCards } from './components/ProductCards';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCards />
      <SocialProof />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;