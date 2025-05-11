import React, { useState } from 'react';
import { UtensilsCrossed, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 People',
    occasion: '',
    requests: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const occasions = [
    'Sinh nhật', 'Kỷ niệm', 'Tiệc công ty', 'Hẹn hò', 'Họp gia đình', 'Khác'
  ];

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Tên là bắt buộc';
    if (!formData.email) newErrors.email = 'Email là bắt buộc';
    if (!formData.date) newErrors.date = 'Ngày là bắt buộc';
    if (!formData.time) newErrors.time = 'Giờ là bắt buộc';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2 People',
        occasion: '',
        requests: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">Đặt bàn</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Đặt bàn trước</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Đặt bàn trực tuyến và trải nghiệm ẩm thực cùng dịch vụ đẳng cấp của chúng tôi
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ tên {errors.name && <span className="text-red-500 text-xs">({errors.name})</span>}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-amber-600 focus:border-transparent`}
                    placeholder="Tên của bạn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email {errors.email && <span className="text-red-500 text-xs">({errors.email})</span>}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-amber-600 focus:border-transparent`}
                    placeholder="Email của bạn"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Điện thoại (Không bắt buộc)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Số điện thoại của bạn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dịp đặc biệt
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    <option value="">Chọn dịp</option>
                    {occasions.map(occasion => (
                      <option key={occasion} value={occasion}>{occasion}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ngày {errors.date && <span className="text-red-500 text-xs">({errors.date})</span>}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-amber-600 focus:border-transparent`}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Giờ {errors.time && <span className="text-red-500 text-xs">({errors.time})</span>}
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.time ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-amber-600 focus:border-transparent`}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số người
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={`${num} ${num === 1 ? 'Person' : 'People'}`}>
                        {num} {num === 1 ? 'Người' : 'Người'}
                      </option>
                    ))}
                    <option value="9+ People">9+ Người</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Yêu cầu đặc biệt
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="Chế độ ăn kiêng hoặc yêu cầu đặc biệt?"
                ></textarea>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <AlertCircle className="h-4 w-4" />
                <p>Chúng tôi sẽ gửi xác nhận qua email sau khi đặt bàn được xác nhận.</p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
                >
                  Đặt bàn ngay
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-xl font-semibold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <p className="text-gray-600">+84 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">datban@saveur.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">Địa điểm</p>
                  <p className="text-gray-600">123 Đường Ẩm Thực<br />Quận Ẩm Thực</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-lg">
              <h4 className="font-medium mb-2">Sự kiện riêng tư</h4>
              <p className="text-sm text-gray-600 mb-4">
                Bạn đang lên kế hoạch tổ chức một buổi lễ đặc biệt? Chúng tôi cung cấp phòng ăn riêng và thực đơn tùy chỉnh cho sự kiện của bạn.
              </p>
              <a href="#" className="text-amber-600 text-sm font-medium hover:text-amber-700">
                Tìm hiểu thêm
              </a>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Giờ mở cửa</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Thứ 2 - Thứ 5:</span>
                  <span>11:00 - 22:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Thứ 6 - Thứ 7:</span>
                  <span>11:00 - 23:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Chủ nhật:</span>
                  <span>10:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
              <UtensilsCrossed className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Cảm ơn bạn!</h3>
              <p className="mb-6 text-gray-600">
                Yêu cầu đặt bàn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn sớm để xác nhận.
              </p>
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}