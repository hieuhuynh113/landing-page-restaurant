import React from 'react';

const menuItems = [
  {
    name: "Pan-Seared Scallops",
    description: "Fresh sea scallops with citrus butter sauce",
    price: "$32",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Wagyu Beef Steak",
    description: "Premium grade wagyu with truffle sauce",
    price: "$65",
    image: "https://images.unsplash.com/photo-1546833160-1c5dc35f0d5f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Lobster Risotto",
    description: "Creamy arborio rice with fresh lobster",
    price: "$45",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry sauce",
    price: "$38",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Dishes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted dishes that combine traditional flavors with modern techniques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}