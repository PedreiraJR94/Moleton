import React from 'react';
import { Wind } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Wind className="w-8 h-8 text-cyan-400" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Style Wind
      </span>
    </div>
  );
};