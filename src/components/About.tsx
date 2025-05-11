import { Clock, MapPin, Phone, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Năm kinh nghiệm', value: '25+' },
    { label: 'Đầu bếp chuyên nghiệp', value: '12' },
    { label: 'Món ăn đặc biệt', value: '150+' },
    { label: 'Khách hàng hài lòng', value: '50K+' }
  ];

  const awards = [
    { year: '2023', title: 'Sao Michelin' },
    { year: '2022', title: 'Nhà hàng sang trọng tốt nhất' },
    { year: '2021', title: 'Xuất sắc về rượu vang' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full text-amber-600 mb-6">
              <Award className="h-5 w-5 mr-2" />
              <span className="font-medium">Nhà hàng đoạt nhiều giải thưởng</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
            <p className="text-lg text-gray-600 mb-8">
              Được thành lập vào năm 1995, Saveur đã phục vụ ẩm thực tinh tế trong hơn hai thập kỷ. 
              Cam kết của chúng tôi về nguyên liệu chất lượng, công thức sáng tạo và dịch vụ hoàn hảo 
              đã làm nên điểm đến nổi bật cho những người yêu thích ẩm thực tinh tế.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-amber-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Giờ mở cửa</h3>
                  <p className="text-gray-600">Thứ 2 - Chủ nhật: 11:00 - 23:00</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-amber-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Địa điểm</h3>
                  <p className="text-gray-600">123 Đường Ẩm Thực, Quận Ẩm Thực</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-amber-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Đặt bàn</h3>
                  <p className="text-gray-600">+84 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {awards.map((award, index) => (
                <div key={index} className="text-center bg-gray-50 px-6 py-4 rounded-lg">
                  <p className="text-amber-600 font-bold">{award.year}</p>
                  <p className="text-sm text-gray-600">{award.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
              alt="Nội thất nhà hàng"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg">
              <p className="text-3xl font-bold">25+</p>
              <p>Năm kinh nghiệm</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Đội ngũ của chúng tôi</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đội ngũ tài năng của chúng tôi mang đến nhiều năm kinh nghiệm
              từ các nhà hàng nổi tiếng trên khắp thế giới.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1000&auto=format&fit=crop"
                alt="Bếp trưởng"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold mb-1">Michael Chen</h4>
              <p className="text-amber-600 text-sm mb-2">Bếp trưởng</p>
              <p className="text-gray-600 text-sm">
                15 năm kinh nghiệm trong ẩm thực cao cấp
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop"
                alt="Bếp bánh"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold mb-1">Sophie Laurent</h4>
              <p className="text-amber-600 text-sm mb-2">Bếp bánh</p>
              <p className="text-gray-600 text-sm">
                Nghệ nhân làm bánh đoạt nhiều giải thưởng
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000&auto=format&fit=crop"
                alt="Chuyên gia rượu vang"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold mb-1">James Wilson</h4>
              <p className="text-amber-600 text-sm mb-2">Chuyên gia rượu vang</p>
              <p className="text-gray-600 text-sm">
                Chuyên gia rượu vang được chứng nhận với kinh nghiệm toàn cầu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}