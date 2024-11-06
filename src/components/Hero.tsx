import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Restaurant interior"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Experience Fine Dining<br />at Its Finest
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Indulge in an extraordinary culinary journey where every dish tells a story
          of passion, creativity, and excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition flex items-center justify-center">
            View Menu <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition">
            Make Reservation
          </button>
        </div>
      </div>
    </section>
  );
}