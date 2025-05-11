import { useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('recent');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      author: "Emily Thompson",
      role: "Nhà phê bình ẩm thực",
      content: "Một trải nghiệm ẩm thực phi thường. Sự chú ý đến từng chi tiết trong mỗi món ăn thật đáng kinh ngạc. Đề xuất kết hợp rượu vang hoàn hảo và dịch vụ thì không thể chê vào đâu được.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
      date: "2024-03-01",
      likes: 24,
      replies: 3,
      verified: true
    },
    {
      author: "Michael Chen",
      role: "Người yêu rượu vang",
      content: "Bộ sưu tập rượu vang thật xuất sắc, và những đề xuất của chuyên gia rượu vang rất hoàn hảo. Mỗi khóa học được kết hợp một cách chu đáo với những loại rượu vang đặc biệt.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-28",
      likes: 18,
      replies: 2,
      verified: true
    },
    {
      author: "Sarah Johnson",
      role: "Khách hàng thường xuyên",
      content: "Mỗi lần đến đều cảm thấy đặc biệt. Dịch vụ hoàn hảo và không khí luôn tuyệt vời. Thực đơn theo mùa không bao giờ làm thất vọng.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-25",
      likes: 15,
      replies: 1,
      verified: true
    },
    {
      author: "David Wilson",
      role: "Blogger ẩm thực",
      content: "Một hành trình ẩm thực vượt quá mong đợi. Thực đơn nếm thử là sự thể hiện hoàn hảo của nguyên liệu theo mùa và kỹ thuật sáng tạo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-20",
      likes: 21,
      replies: 4,
      verified: true
    },
    {
      author: "Lisa Martinez",
      role: "Khách lần đầu",
      content: "Hoàn toàn bị choáng ngợp bởi trải nghiệm. Ngay từ khi chúng tôi bước vào, dịch vụ đã rất đặc biệt. Món ăn đơn giản là xuất sắc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      date: "2024-02-15",
      likes: 12,
      replies: 2,
      verified: false
    }
  ];

  const stats = [
    { label: 'Đánh giá tổng thể', value: '4.9' },
    { label: 'Lượt đánh giá', value: '500+' },
    { label: 'Khuyến nghị', value: '98%' }
  ];

  const filteredReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">Lời chứng thực</span>
          <h2 className="text-4xl font-bold mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Đọc về trải nghiệm từ những vị khách quý giá của chúng tôi
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
            Đánh giá gần đây
          </button>
          <button
            onClick={() => setActiveTab('top')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'top'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition`}
          >
            Đánh giá cao nhất
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
                        Đã xác minh
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
            {showAllReviews ? 'Hiển thị ít hơn' : 'Xem thêm đánh giá'}
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
            <h3 className="text-2xl font-bold mb-4">Chia sẻ trải nghiệm của bạn</h3>
            <p className="text-gray-400">
              Chúng tôi đánh giá cao phản hồi của bạn. Hãy cho chúng tôi biết về trải nghiệm ẩm thực của bạn tại Saveur.
            </p>
          </div>
          
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Đánh giá</label>
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
              <label className="block text-sm font-medium mb-2">Đánh giá của bạn</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                placeholder="Chia sẻ trải nghiệm ẩm thực của bạn..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
              >
                Gửi đánh giá
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
