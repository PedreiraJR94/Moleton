import React from 'react';
import { Star, User, Heart, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    location: 'São Paulo, SP',
    rating: 5,
    comment: 'Simplesmente perfeito! O tecido é super macio e a balaclava protege mesmo do vento frio. Recomendo demais!',
    avatar: '👩🏻‍💼'
  },
  {
    name: 'Carlos Mendes',
    location: 'Porto Alegre, RS',
    rating: 5,
    comment: 'Qualidade excepcional! Uso todos os dias no inverno. O design é moderno e muito confortável.',
    avatar: '👨🏽‍💻'
  },
  {
    name: 'Mariana Costa',
    location: 'Curitiba, PR',
    rating: 5,
    comment: 'Chegou super rápido e a qualidade superou minhas expectativas. Vale cada centavo!',
    avatar: '👩🏼‍🎨'
  },
  {
    name: 'Pedro Santos',
    location: 'Belo Horizonte, MG',
    rating: 5,
    comment: 'Excelente para quem trabalha ao ar livre. Protege do frio e ainda fica estiloso!',
    avatar: '👨🏻‍🔧'
  }
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            O Que Nossos
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Clientes</span>
            <br />Estão Dizendo
          </h2>
          
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">2.847</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <div className="text-gray-300">4.9/5 Estrelas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">98%</div>
              <div className="text-gray-300">Recomendariam</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center space-x-4 mt-4 text-gray-400 text-xs">
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>Útil</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl">🚚</div>
            <div className="text-white font-bold">Entrega Rápida</div>
            <div className="text-gray-400 text-sm">2-5 dias úteis</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🔒</div>
            <div className="text-white font-bold">Compra Segura</div>
            <div className="text-gray-400 text-sm">SSL Certificado</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">↩️</div>
            <div className="text-white font-bold">Troca Fácil</div>
            <div className="text-gray-400 text-sm">30 dias garantia</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">💳</div>
            <div className="text-white font-bold">Pague Parcelado</div>
            <div className="text-gray-400 text-sm">Até 12x sem juros</div>
          </div>
        </div>
      </div>
    </section>
  );
};