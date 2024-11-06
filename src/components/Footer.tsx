import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <UtensilsCrossed className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-2xl font-semibold">Saveur</span>
            </div>
            <p className="text-gray-400">
              Experience the art of fine dining in an atmosphere of elegance and sophistication.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Gourmet Street</p>
              <p>Culinary District</p>
              <p>+1 (555) 123-4567</p>
              <p>info@saveur.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday</p>
              <p>11:00 AM - 11:00 PM</p>
              <p>Saturday - Sunday</p>
              <p>10:00 AM - 12:00 AM</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saveur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}