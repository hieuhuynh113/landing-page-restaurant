import React from 'react';
import { ArrowRight, Star, Award, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Nội thất nhà hàng"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex items-center space-x-4 mb-8">
          <Star className="text-yellow-400 h-6 w-6" />
          <span className="text-yellow-400 font-medium">Nhà hàng đạt sao Michelin</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white max-w-4xl">
          Trải nghiệm ẩm thực<br />đẳng cấp nhất
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl">
          Đắm mình trong hành trình ẩm thực phi thường nơi mỗi món ăn kể một câu chuyện
          về đam mê, sáng tạo và sự xuất sắc.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition flex items-center justify-center group">
            Xem thực đơn <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
            Đặt bàn ngay
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Award className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Đạt nhiều giải thưởng</h3>
            <p className="text-gray-300">Được công nhận về sự xuất sắc và sáng tạo trong ẩm thực</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Clock className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Nguyên liệu tươi ngon</h3>
            <p className="text-gray-300">Nguồn nguyên liệu địa phương và theo mùa mỗi ngày</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Star className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Đầu bếp chuyên nghiệp</h3>
            <p className="text-gray-300">Các bậc thầy ẩm thực được đào tạo quốc tế</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-scroll">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}