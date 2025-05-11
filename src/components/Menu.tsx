import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';

interface DishDetails {
  ingredients: string;
  preparation: string;
  allergens: string;
  dietary: string;
  pairings: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  details: DishDetails;
  category: string;
  spicyLevel?: number;
  isNew?: boolean;
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Sò điệp áp chảo",
    description: "Sò điệp tươi với sốt bơ chanh",
    price: "720.000₫",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop",
    category: "starters",
    isNew: true,
    details: {
      ingredients: "Sò điệp Đại Tây Dương tươi, sốt bơ chanh, rau thơm, muối biển",
      preparation: "Được áp chảo nhẹ nhàng đến khi vàng hoàn hảo, sò điệp của chúng tôi được phục vụ với sốt bơ chanh nhẹ nhàng làm nổi bật vị ngọt tự nhiên. Trang trí với rau thơm tươi và một chút muối biển.",
      allergens: "Hải sản, sữa",
      dietary: "Không chứa gluten",
      pairings: "Kết hợp tuyệt vời với rượu vang Chablis hoặc Sancerre của nhà hàng"
    }
  },
  {
    name: "Bò Wagyu",
    description: "Thịt bò Wagyu cao cấp với sốt nấm truffle",
    price: "1.450.000₫",
    image: "https://www.dukeshill.co.uk/cdn/shop/collections/Wagyu_RibEye_For_Web_03.jpg?v=1714563513",
    category: "main course",
    spicyLevel: 1,
    isPopular: true,
    details: {
      ingredients: "Thịt bò Wagyu A5, sốt nấm truffle đen, tỏi nướng, rau củ theo mùa",
      preparation: "Thịt nướng theo yêu cầu của bạn, bò Wagyu cao cấp được phục vụ kèm sốt nấm truffle đen thơm ngon, tỏi nướng và rau củ theo mùa.",
      allergens: "Sữa",
      dietary: "Không chứa gluten",
      pairings: "Khuyến nghị với rượu vang Cabernet Sauvignon hảo hạng của chúng tôi"
    }
  },
  {
    name: "Cơm Risotto Tôm Hùm",
    description: "Cơm Arborio kem với tôm hùm tươi",
    price: "990.000₫",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop",
    category: "main course",
    isPopular: true,
    details: {
      ingredients: "Tôm hùm Maine, gạo Arborio, rượu vang trắng, phô mai Parmesan, thảo mộc tươi",
      preparation: "Gạo Arborio được nấu chậm và kết hợp với tôm hùm Maine tươi, phô mai Parmesan lâu năm, và một chút rượu vang trắng. Trang trí với thảo mộc tươi.",
      allergens: "Hải sản, sữa",
      dietary: "Có phiên bản không chứa gluten",
      pairings: "Hoàn hảo với rượu vang Verdicchio của Ý"
    }
  },
  {
    name: "Đùi Vịt Ngâm Mỡ",
    description: "Đùi vịt nấu chậm với sốt anh đào",
    price: "850.000₫",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop",
    category: "main course",
    details: {
      ingredients: "Đùi vịt, sốt anh đào cô đặc, thyme tươi, khoai tây fingerling",
      preparation: "Đùi vịt được nấu chậm trong chính mỡ của nó đến khi mềm, phục vụ với sốt anh đào đậm đà và khoai tây fingerling nướng với thảo mộc.",
      allergens: "Không có",
      dietary: "Không chứa gluten",
      pairings: "Tuyệt vời với rượu vang Pinot Noir của chúng tôi"
    }
  },
  {
    name: "Súp Nấm Truffle",
    description: "Súp nấm rừng kem với dầu truffle",
    price: "360.000₫",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    category: "starters",
    details: {
      ingredients: "Nấm rừng, kem, dầu truffle, thảo mộc",
      preparation: "Hỗn hợp mịn màng của các loại nấm rừng, hoàn thiện với dầu truffle và thảo mộc tươi.",
      allergens: "Sữa",
      dietary: "Chay, Không chứa gluten",
      pairings: "Thử với rượu vang Chardonnay của chúng tôi"
    }
  },
  {
    name: "Bánh Soufflé Sô-cô-la",
    description: "Bánh soufflé sô-cô-la ấm với kem vani",
    price: "320.000₫",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070&auto=format&fit=crop",
    category: "desserts",
    isNew: true,
    details: {
      ingredients: "Sô-cô-la đen, trứng, bơ, đường, kem vani",
      preparation: "Bánh soufflé sô-cô-la nướng tươi, phục vụ kèm kem vani tự làm.",
      allergens: "Sữa, trứng, gluten",
      dietary: "Chay",
      pairings: "Hoàn hảo với lựa chọn rượu vang tráng miệng của chúng tôi"
    }
  },
  {
    name: "Cá Ngừ Sống Cay",
    description: "Cá ngừ tươi với gia vị kiểu Á",
    price: "540.000₫",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2070&auto=format&fit=crop",
    category: "starters",
    spicyLevel: 2,
    details: {
      ingredients: "Cá ngừ cấp sushi, dầu mè, nước tương, ớt",
      preparation: "Cá ngừ cắt tay trộn với gia vị Á Đông và phục vụ kèm bánh wonton giòn.",
      allergens: "Cá, đậu nành",
      dietary: "Có phiên bản không chứa gluten",
      pairings: "Tuyệt vời với các lựa chọn rượu sake của chúng tôi"
    }
  },
  {
    name: "Đĩa Phô Mai Thủ Công",
    description: "Tuyển chọn phô mai cao cấp với các món kèm",
    price: "620.000₫",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2069&auto=format&fit=crop",
    category: "desserts",
    details: {
      ingredients: "Tuyển chọn phô mai thủ công theo mùa, mật ong, các loại hạt, trái cây",
      preparation: "Bộ sưu tập phô mai cao cấp được lựa chọn kỹ lưỡng phục vụ kèm mật ong, các loại hạt và trái cây khô.",
      allergens: "Sữa, các loại hạt",
      dietary: "Chay",
      pairings: "Thử với bộ sưu tập rượu vang Port của chúng tôi"
    }
  }
];

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['all', 'starters', 'main course', 'desserts'];
  const categoriesVN = {
    'all': 'tất cả',
    'starters': 'khai vị',
    'main course': 'món chính',
    'desserts': 'tráng miệng'
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openDishDetails = (dish: MenuItem) => {
    setSelectedDish(dish);
    document.body.style.overflow = 'hidden';
  };

  const closeDishDetails = () => {
    setSelectedDish(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Các Món Đặc Trưng Của Chúng Tôi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những món ăn được chế biến kỹ lưỡng kết hợp hương vị truyền thống với kỹ thuật hiện đại
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Tìm kiếm món ăn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {categoriesVN[category as keyof typeof categoriesVN]}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading Skeleton
            [...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 loading"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 loading rounded"></div>
                  <div className="h-4 w-full loading rounded"></div>
                  <div className="h-4 w-1/2 loading rounded"></div>
                </div>
              </div>
            ))
          ) : filteredItems.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Không tìm thấy món ăn nào phù hợp với tiêu chí của bạn</p>
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group"
                onClick={() => openDishDetails(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {item.isNew && (
                    <span className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                      Mới
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      Phổ biến
                    </span>
                  )}
                  {item.spicyLevel && (
                    <div className="absolute bottom-2 left-2 flex">
                      {[...Array(item.spicyLevel)].map((_, i) => (
                        <span key={i} className="text-red-600 text-lg">🌶️</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-amber-600 font-semibold ml-2">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-amber-600 hover:text-amber-700 transition flex items-center text-sm font-medium">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Dish Details Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeDishDetails}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <X className="h-6 w-6" />
              </button>
              {selectedDish.isNew && (
                <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                  Mới
                </span>
              )}
              {selectedDish.isPopular && (
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Phổ biến
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedDish.name}</h3>
                <span className="text-amber-600 font-bold text-xl">{selectedDish.price}</span>
              </div>
              <p className="text-gray-600 mb-6">{selectedDish.description}</p>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nguyên liệu</h4>
                  <p className="text-gray-600">{selectedDish.details.ingredients}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cách chế biến</h4>
                  <p className="text-gray-600">{selectedDish.details.preparation}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dị ứng</h4>
                    <p className="text-gray-600">{selectedDish.details.allergens}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Chế độ ăn</h4>
                    <p className="text-gray-600">{selectedDish.details.dietary}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Kết hợp</h4>
                    <p className="text-gray-600">{selectedDish.details.pairings}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={closeDishDetails}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}