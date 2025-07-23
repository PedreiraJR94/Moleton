import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 leading-relaxed">
              Criamos roupas que combinam estilo, conforto e funcionalidade para enfrentar qualquer clima com atitude.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Produtos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Avaliações</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Contato</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Política de Troca</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Rastreamento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Tabela de Tamanhos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>(11) 99614-5931</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>contato@stylewind.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span>São Paulo, SP<br />Brasil</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-r-lg hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Style Wind. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};