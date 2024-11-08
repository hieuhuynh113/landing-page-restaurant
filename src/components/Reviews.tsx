import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      author: "Emily Thompson",
      role: "Food Critic",
      content: "An extraordinary dining experience. The attention to detail in every dish is remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
      author: "Michael Chen",
      role: "Wine Enthusiast",
      content: "The wine selection is outstanding, and the sommelier's recommendations were perfect.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      author: "Sarah Johnson",
      role: "Regular Guest",
      content: "Every visit feels special. The service is impeccable and the atmosphere is always perfect.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">Testimonials</span>
          <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Read about experiences from our valued guests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-600 opacity-50" />
              
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{review.author}</h4>
                  <p className="text-amber-600 text-sm">{review.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300">{review.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center text-amber-600 hover:text-amber-500 transition"
          >
            Read More Reviews
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}