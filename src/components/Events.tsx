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
          <h4 className="font-semibold mb-2">Về sự kiện này</h4>
          <p className="text-gray-600">{event.fullDescription || event.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Bao gồm</h4>
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
              Số lượng khách
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent">
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Khách' : 'Khách'}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yêu cầu đặc biệt
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              rows={3}
              placeholder="Yêu cầu về chế độ ăn kiêng hoặc yêu cầu đặc biệt khác?"
            ></textarea>
          </div>

          <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition flex items-center justify-center">
            Đặt chỗ ngay với giá {event.price}
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
      title: "Tối thưởng thức rượu vang",
      date: "15 Tháng 3, 2024",
      time: "19:00 - 22:00",
      description: "Tham gia cùng chuyên gia rượu vang của chúng tôi để thưởng thức các loại rượu vang cao cấp từ hầm rượu.",
      fullDescription: "Hãy bắt đầu hành trình khám phá những vùng rượu vang tuyệt vời nhất thế giới cùng chuyên gia rượu vang của chúng tôi. Buổi tối đặc biệt này bao gồm các loại rượu vang được chọn lọc kỹ lưỡng kèm theo các món khai vị phù hợp.",
      price: "2.000.000₫ một người",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
      icon: GlassWater,
      category: "tasting",
      includes: [
        "Hướng dẫn thưởng thức 6 loại rượu vang cao cấp",
        "Kèm theo các món khai vị",
        "Sách hướng dẫn về rượu vang",
        "Giảm 10% khi mua rượu vang"
      ]
    },
    {
      title: "Trải nghiệm bàn của Bếp trưởng",
      date: "22 Tháng 3, 2024",
      time: "18:30 - 21:30",
      description: "Một trải nghiệm ẩm thực thân mật với bếp trưởng của chúng tôi, với thực đơn nếm thử đặc biệt.",
      fullDescription: "Trải nghiệm nghệ thuật ẩm thực ở mức độ tinh tế nhất với bàn của Bếp trưởng. Hãy xem bếp trưởng của chúng tôi chuẩn bị thực đơn nếm thử nhiều món ngay trước mắt bạn.",
      price: "3.500.000₫ một người",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2070&auto=format&fit=crop",
      icon: ChefHat,
      category: "dining",
      includes: [
        "Thực đơn nếm thử 7 món",
        "Kết hợp với rượu vang",
        "Trình diễn nấu ăn tương tác",
        "Bộ sưu tập công thức nấu ăn"
      ]
    },
    {
      title: "Đêm nhạc Jazz",
      date: "29 Tháng 3, 2024",
      time: "20:00 - 23:00",
      description: "Thưởng thức nhạc jazz trực tiếp trong khi thưởng thức thực đơn buổi tối đặc biệt của chúng tôi.",
      fullDescription: "Đắm mình trong một buổi tối với nhạc jazz êm dịu và ẩm thực tinh tế. Ban nhạc của chúng tôi biểu diễn các bản nhạc jazz cổ điển trong khi bạn thưởng thức thực đơn được chọn lọc đặc biệt.",
      price: "2.200.000₫ một người",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070&auto=format&fit=crop",
      icon: Music,
      category: "entertainment",
      includes: [
        "Bữa tối 3 món",
        "Cocktail chào mừng",
        "Biểu diễn nhạc jazz trực tiếp",
        "Chỗ ngồi đã đặt trước"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'Tất cả sự kiện' },
    { id: 'tasting', label: 'Thưởng thức' },
    { id: 'dining', label: 'Ẩm thực' },
    { id: 'entertainment', label: 'Giải trí' }
  ];

  const filteredEvents = filter === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === filter);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">Sự kiện đặc biệt</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sự kiện sắp tới</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tham gia cùng chúng tôi cho những trải nghiệm ẩm thực đặc biệt và những buổi tối đáng nhớ
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
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sự kiện riêng tư</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tổ chức dịp đặc biệt của bạn trong không gian ăn uống sang trọng của chúng tôi. 
              Từ sự kiện công ty đến lễ kỷ niệm thân mật, chúng tôi sẽ tạo ra một trải nghiệm 
              đáng nhớ được thiết kế riêng theo nhu cầu của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Sức chứa</h4>
              <p className="text-gray-600">Lên đến 100 khách</p>
            </div>
            <div className="text-center">
              <ChefHat className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Thực đơn tùy chỉnh</h4>
              <p className="text-gray-600">Thực đơn được cá nhân hóa theo nhu cầu của bạn</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Có sẵn</h4>
              <p className="text-gray-600">Mọi ngày trong tuần, cả buổi trưa và buổi tối</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition inline-flex items-center">
              Liên hệ để biết thêm thông tin
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </div>
    </section>
  );
}