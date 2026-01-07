import React, { useState } from 'react';
import { Calendar, Clock, Users, ChefHat, Music, GlassWater, Star, ArrowRight, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface EventItem {
  title: string;
  date: string;
  time: string;
  description: string;
  fullDescription: string;
  price: string;
  image: string;
  icon: LucideIcon;
  category: string;
  includes: string[];
}

interface EventModalProps {
  event: EventItem;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-1 rounded-full">
          {event.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <event.icon className="h-6 w-6 text-amber-600 mr-2" />
          <h3 className="text-2xl font-bold">{event.title}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{event.time}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">About This Event</h4>
          <p className="text-gray-600">{event.fullDescription || event.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Includes</h4>
          <ul className="space-y-2">
            {event.includes.map((item: string, index: number) => (
              <li key={index} className="flex items-center text-gray-600">
                <Star className="h-4 w-4 text-amber-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent">
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              rows={3}
              placeholder="Dietary restrictions or other special requests?"
            ></textarea>
          </div>

          <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition flex items-center justify-center">
            Book Now for {event.price}
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [filter, setFilter] = useState('all');

  const upcomingEvents = [
    {
      title: "Wine Tasting Evening",
      date: "March 15, 2024",
      time: "19:00 - 22:00",
      description: "Join our wine sommelier to sample premium wines from our cellar.",
      fullDescription: "Embark on a journey to discover the world's finest wine regions with our wine sommelier. This special evening includes carefully selected wines paired with complementary appetizers.",
      price: "2,000,000₫ per person",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
      icon: GlassWater,
      category: "tasting",
      includes: [
        "Tasting guide for 6 premium wines",
        "Paired appetizers",
        "Wine guide booklet",
        "10% discount on wine purchases"
      ]
    },
    {
      title: "Chef's Table Experience",
      date: "March 22, 2024",
      time: "18:30 - 21:30",
      description: "An intimate culinary experience with our head chef, featuring a special tasting menu.",
      fullDescription: "Experience culinary artistry at its finest with the Chef's Table. Watch our head chef prepare a multi-course tasting menu right before your eyes.",
      price: "3,500,000₫ per person",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2070&auto=format&fit=crop",
      icon: ChefHat,
      category: "dining",
      includes: [
        "7-course tasting menu",
        "Wine pairing",
        "Interactive cooking demonstration",
        "Recipe collection"
      ]
    },
    {
      title: "Jazz Night",
      date: "March 29, 2024",
      time: "20:00 - 23:00",
      description: "Enjoy live jazz music while savoring our special evening menu.",
      fullDescription: "Immerse yourself in an evening of smooth jazz and fine cuisine. Our band performs classic jazz pieces while you enjoy a specially curated menu.",
      price: "2,200,000₫ per person",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070&auto=format&fit=crop",
      icon: Music,
      category: "entertainment",
      includes: [
        "3-course dinner",
        "Welcome cocktail",
        "Live jazz performance",
        "Reserved seating"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'tasting', label: 'Tasting' },
    { id: 'dining', label: 'Dining' },
    { id: 'entertainment', label: 'Entertainment' }
  ];

  const filteredEvents = filter === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === filter);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">Special Events</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for special culinary experiences and memorable evenings
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full ${
                filter === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition shadow-sm`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-1 rounded-full text-sm">
                  {event.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <event.icon className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition flex items-center justify-center group"
                >
                  View Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Events</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Host your special occasion in our elegant dining space. 
              From corporate events to intimate celebrations, we'll create a memorable 
              experience tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Capacity</h4>
              <p className="text-gray-600">Up to 100 guests</p>
            </div>
            <div className="text-center">
              <ChefHat className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Customized Menu</h4>
              <p className="text-gray-600">Menu personalized to your needs</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Available</h4>
              <p className="text-gray-600">Every day of the week, both lunch and dinner</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition inline-flex items-center">
              Contact for More Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </div>
    </section>
  );
}