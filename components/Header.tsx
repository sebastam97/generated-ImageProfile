import React from 'react';
import { Camera, Linkedin } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            ProLink
          </span>
        </div>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          <Linkedin className="w-4 h-4" />
          <span className="hidden sm:inline">LinkedIn Ready</span>
        </a>
      </div>
    </header>
  );
};