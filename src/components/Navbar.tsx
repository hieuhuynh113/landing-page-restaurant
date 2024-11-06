import React, { useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-2xl font-semibold text-gray-900">Saveur</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-amber-600">Home</a>
              <a href="#menu" className="text-gray-900 hover:text-amber-600">Menu</a>
              <a href="#about" className="text-gray-900 hover:text-amber-600">About</a>
              <a href="#contact" className="text-gray-900 hover:text-amber-600">Contact</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
                Reserve Table
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Menu</a>
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-amber-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Contact</a>
            <button className="w-full text-center bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              Reserve Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}