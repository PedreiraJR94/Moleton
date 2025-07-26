import React from 'react';
import { ShoppingCart, Star, Zap, Shield, Truck } from 'lucide-react';

const products = [
  {
    id: 1,
    image: '/IMG_3345.jpeg',
    title: 'Style Wind Classic',
    description: 'Moletom com balaclava integrada, perfeito para o dia a dia',
    price: 'R$ 89,90',
    originalPrice: 'R$ 149,90',
    features: ['Tecido premium', 'Balaclava removível', 'Bolso canguru'],
    variants: {
      P: 'https://checkout.lojastylewind.com/r/7B1ZY191620U0tvrg7',
      M: 'https://checkout.lojastylewind.com/r/P1p97yYoMb0E317n',
      G: 'https://checkout.lojastylewind.com/r/7N8101EjC7QH4W9D',
      GG: 'https://checkout.lojastylewind.com/r/wnqjZ1mDX1745970'
    }
  },
  {
    id: 2,
    image: '/IMG_3346.jpeg',
    title: 'Style Wind Pro',
    description: 'Versão premium com tecnologia anti-vento e impermeável',
    price: 'R$ 89,90',
    originalPrice: 'R$ 149,90',
    features: ['Impermeável', 'Anti-vento', 'Respirável'],
    popular: true,
    variants: {
      P: 'https://checkout.lojastylewind.com/r/69ZG2p6i39T51I9',
      M: 'https://checkout.lojastylewind.com/r/j4cU9DOct1w97jI926',
      G: 'https://checkout.lojastylewind.com/r/mHx997V9q2mphk615iW',
      GG: 'https://checkout.lojastylewind.com/r/6690gDrvx8129x49'
    }
  },
  {
    id: 3,
    image: '/IMG_3347.jpeg',
    title: 'Style Wind Urban',
    description: 'Design urbano moderno para quem busca estilo e funcionalidade',
    price: 'R$ 89,90',
    originalPrice: 'R$ 149,90',
    features: ['Design urbano', 'Corte moderno', 'Máximo conforto'],
    variants: {
      P: 'https://checkout.lojastylewind.com/r/29ZC1O72VaK184I10',
      M: 'https://checkout.lojastylewind.com/r/91E2g0704l8s1Q71l',
      G: 'https://checkout.lojastylewind.com/r/r1909vJ011J3H87S',
      GG: 'https://checkout.lojastylewind.com/r/0dK8UjKu719i14H3'
    }
  }
];

export const ProductCards = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Escolha Seu
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Style</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Três versões exclusivas do nosso moletom com balaclava. Cada uma pensada para diferentes momentos e estilos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 ${
                product.popular ? 'ring-2 ring-cyan-400 shadow-2xl shadow-cyan-400/20' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1 z-20">
                    <Zap className="w-4 h-4" />
                    <span>MAIS POPULAR</span>
                  </div>
                </div>
              )}

              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300">{product.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-gray-300 ml-2 text-sm">(4.9)</span>
                </div>

                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                </div>

                <div className="flex items-center space-x-4 text-green-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>Frete Grátis</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>30 dias</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  {Object.entries(product.variants).map(([size, url]) => (
                    <button
                      key={size}
                      onClick={() => window.open(url, '_blank')}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Comprar {size}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
