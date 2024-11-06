import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 1995, Saveur has been serving exceptional cuisine for over two decades. 
              Our commitment to quality ingredients, innovative recipes, and impeccable service 
              has made us a landmark destination for fine dining enthusiasts.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-amber-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Opening Hours</h3>
                  <p className="text-gray-600">Mon-Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-amber-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">123 Gourmet Street, Culinary District</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-amber-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Reservations</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg">
              <p className="text-3xl font-bold">25+</p>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}