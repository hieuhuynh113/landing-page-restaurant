import { useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('recent');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      author: "Emily Thompson",
      role: "Food Critic",
      content: "An extraordinary culinary experience. The attention to detail in each dish is remarkable. Perfect wine pairing suggestions and impeccable service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
      date: "2024-03-01",
      likes: 24,
      replies: 3,
      verified: true
    },
    {
      author: "Michael Chen",
      role: "Wine Enthusiast",
      content: "The wine collection is outstanding, and the sommelier's recommendations are perfect. Each course was thoughtfully paired with exceptional wines.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-28",
      likes: 18,
      replies: 2,
      verified: true
    },
    {
      author: "Sarah Johnson",
      role: "Regular Customer",
      content: "Every visit feels special. The service is impeccable and the atmosphere is always wonderful. The seasonal menu never disappoints.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-25",
      likes: 15,
      replies: 1,
      verified: true
    },
    {
      author: "David Wilson",
      role: "Food Blogger",
      content: "A culinary journey that exceeded expectations. The tasting menu is a perfect showcase of seasonal ingredients and creative techniques.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-20",
      likes: 21,
      replies: 4,
      verified: true
    },
    {
      author: "Lisa Martinez",
      role: "First-time Guest",
      content: "Completely blown away by the experience. From the moment we walked in, the service was exceptional. The food was simply outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-15",
      likes: 12,
      replies: 2,
      verified: false
    }
  ];

  const stats = [
    { label: 'Overall Rating', value: '4.9' },
    { label: 'Total Reviews', value: '500+' },
    { label: 'Recommendation Rate', value: '98%' }
  ];

  const filteredReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">Testimonials</span>
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Read about experiences from our valued guests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('recent')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'recent'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition`}
          >
            Recent Reviews
          </button>
          <button
            onClick={() => setActiveTab('top')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'top'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition`}
          >
            Top Rated
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg relative group hover:shadow-xl transition"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-600 opacity-50" />
              
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold">{review.author}</h4>
                    {review.verified && (
                      <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-amber-600 text-sm">{review.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6">{review.content}</p>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{new Date(review.date).toLocaleDateString()}</span>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center hover:text-amber-600 transition">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {review.likes}
                  </button>
                  <button className="flex items-center hover:text-amber-600 transition">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {review.replies}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="inline-flex items-center text-amber-600 hover:text-amber-500 transition"
          >
            {showAllReviews ? 'Show Less' : 'View More Reviews'}
            <svg
              className={`ml-2 h-5 w-5 transform transition-transform ${
                showAllReviews ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-gray-400">
              We value your feedback. Let us know about your culinary experience at Saveur.
            </p>
          </div>
          
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className="p-2 hover:bg-gray-700 rounded-full transition"
                  >
                    <Star className="h-6 w-6 text-gray-400 hover:text-yellow-400" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                placeholder="Share your culinary experience..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
