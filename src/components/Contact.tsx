import React, { useState } from 'react';
import { Calendar, Clock, Users, UtensilsCrossed } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2 People',
    requests: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '2 People',
      requests: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Reservation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book your table online and experience our exceptional cuisine and service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="Your name"
                />
                <UtensilsCrossed className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <Calendar className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <Clock className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent appearance-none"
              >
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
              <Users className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                placeholder="Any special requests or dietary requirements?"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
              >
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <UtensilsCrossed className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Reservation Confirmed!</h3>
              <p className="text-sm text-gray-500">
                Thank you for choosing to dine with us. We'll send you a confirmation email shortly.
              </p>
              <button
                onClick={() => setShowConfirmation(false)}
                className="mt-6 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
