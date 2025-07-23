import React from 'react';
import { ShoppingCart, Star, Truck, Shield } from 'lucide-react';
import { Logo } from './Logo';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-white ml-2 text-sm">4.9/5 (2.847 avaliações)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 text-sm font-medium">🔥 LANÇAMENTO EXCLUSIVO</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Moletom com
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                  Balaclava
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                O moletom perfeito para enfrentar o frio com estilo. Design futurista, 
                conforto máximo e proteção total contra o vento gelado.
              </p>
            </div>

            {/* Price */}
            <div className="space-y-4">
              <div className="flex items-baseline space-x-4">
                <span className="text-5xl font-bold text-white">R$ 89,90</span>
                <span className="text-2xl text-gray-400 line-through">R$ 149,90</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  40% OFF
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-green-400">
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5" />
                  <span className="font-medium">Frete Grátis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Garantia 30 dias</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="group relative w-full lg:w-auto px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
            >
              <div className="flex items-center justify-center space-x-3">
                <ShoppingCart className="w-6 h-6" />
                <span>COMPRAR AGORA</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </button>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>2.847 pessoas compraram hoje</span>
              </div>
            </div>
          </div>

          {/* Right side - Product image */}
          <div className="relative animate-fade-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="/IMG_3344.jpeg" 
                alt="Moletom Style Wind com Balaclava" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};