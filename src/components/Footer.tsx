import { UtensilsCrossed, Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Thực đơn', href: '#menu' },
    { name: 'Đặt bàn', href: '#contact' },
    { name: 'Sự kiện riêng tư', href: '#' },
    { name: 'Thẻ quà tặng', href: '#' },
    { name: 'Tuyển dụng', href: '#' }
  ];

  const openingHours = [
    { days: 'Thứ Hai - Thứ Năm', hours: '11:00 - 22:00' },
    { days: 'Thứ Sáu - Thứ Bảy', hours: '11:00 - 23:00' },
    { days: 'Chủ Nhật', hours: '10:00 - 21:00' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-3">Đăng ký nhận bản tin</h3>
              <p className="text-gray-400 mb-6">
                Cập nhật thông tin về thực đơn mới, sự kiện đặc biệt và ưu đãi độc quyền.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition flex items-center">
                  Đăng ký <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center mb-6">
                <UtensilsCrossed className="h-8 w-8 text-amber-600" />
                <span className="ml-2 text-2xl font-semibold">Saveur</span>
              </div>
              <p className="text-gray-400 mb-6">
                Trải nghiệm nghệ thuật ẩm thực tinh tế trong bầu không khí sang trọng và tinh tế.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-amber-600 transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Giờ mở cửa</h4>
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="text-gray-400">
                    <p className="font-medium text-white">{schedule.days}</p>
                    <p>{schedule.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-3 text-amber-600" />
                  <p>123 Đường Ẩm Thực<br />Quận Ẩm Thực</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-3 text-amber-600" />
                  <p>+84 (555) 123-4567</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-3 text-amber-600" />
                  <p>info@saveur.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Saveur. Bảo lưu mọi quyền.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-600 transition">Chính sách riêng tư</a>
              <a href="#" className="hover:text-amber-600 transition">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-amber-600 transition">Chính sách cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}