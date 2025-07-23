import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Qual o material do moletom?',
    answer: 'Nosso moletom é feito com 80% algodão premium e 20% poliéster, garantindo máximo conforto, durabilidade e respirabilidade. O tecido interno é felpudo para maior aquecimento.'
  },
  {
    question: 'A balaclava é removível?',
    answer: 'Sim! A balaclava possui um sistema de encaixe prático que permite removê-la quando não precisar usar, oferecendo versatilidade para diferentes situações.'
  },
  {
    question: 'Como funciona o frete grátis?',
    answer: 'O frete é totalmente gratuito para todo o Brasil! Enviamos via Correios com código de rastreamento. O prazo de entrega é de 2 a 5 dias úteis para capitais e 5 a 10 dias para interior.'
  },
  {
    question: 'Posso trocar se não servir?',
    answer: 'Claro! Você tem 30 dias para trocar ou devolver o produto. Basta entrar em contato conosco e enviamos uma nova peça ou fazemos o reembolso integral.'
  },
  {
    question: 'Quais são os tamanhos disponíveis?',
    answer: 'Temos tamanhos de P ao GG. Recomendamos consultar nossa tabela de medidas para escolher o tamanho ideal. Em caso de dúvida, nossa equipe pode ajudar via WhatsApp.'
  },
  {
    question: 'Como faço para lavar o moletom?',
    answer: 'Recomendamos lavar à máquina em água fria (até 30°C), com sabão neutro. Não usar alvejante. Secar à sombra e passar ferro em temperatura baixa se necessário.'
  },
  {
    question: 'Vocês aceitam quais formas de pagamento?',
    answer: 'Aceitamos cartão de crédito (até 12x sem juros), cartão de débito, PIX (com 5% de desconto) e boleto bancário. Todos os pagamentos são processados com segurança.'
  },
  {
    question: 'O produto tem garantia?',
    answer: 'Sim! Oferecemos 30 dias de garantia contra defeitos de fabricação. Se houver qualquer problema, trocamos ou devolvemos seu dinheiro sem complicação.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Perguntas
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tire todas suas dúvidas sobre nosso moletom com balaclava Style Wind
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Ainda tem dúvidas?</p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-xl hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25">
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};