import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Heart } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      title: "Khu vực ăn uống chính",
      category: "interior",
      description: "Không gian ăn uống sang trọng với thiết kế hiện đại và ánh sáng ấm cúng"
    },
    {
      url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
      title: "Bò bít tết đặc trưng",
      category: "food",
      description: "Thịt bò hảo hạng được chế biến hoàn hảo với rau theo mùa"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      title: "Phòng ăn riêng",
      category: "interior",
      description: "Không gian thân mật hoàn hảo cho các dịp đặc biệt và sự kiện riêng tư"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop",
      title: "Bộ sưu tập rượu vang",
      category: "drinks",
      description: "Bộ sưu tập rượu vang tuyển chọn từ khắp nơi trên thế giới"
    },
    {
      url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop",
      title: "Món đặc biệt của Bếp trưởng",
      category: "food",
      description: "Món đặc biệt hàng ngày được tạo ra bởi đội ngũ đầu bếp chuyên nghiệp"
    },
    {
      url: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=2070&auto=format&fit=crop",
      title: "Sân hiên ngoài trời",
      category: "interior",
      description: "Ăn uống ngoài trời với tầm nhìn tuyệt đẹp ra thành phố"
    },
    {
      url: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=2070&auto=format&fit=crop",
      title: "Các loại cocktail",
      category: "drinks",
      description: "Cocktail thủ công được pha chế với rượu cao cấp"
    },
    {
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
      title: "Đĩa tráng miệng",
      category: "food",
      description: "Các món tráng miệng nghệ thuật được chuẩn bị bởi đầu bếp bánh của chúng tôi"
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
    const savedLikes = localStorage.getItem('galleryLikes');
    if (savedLikes) {
      setLikedImages(JSON.parse(savedLikes));
    }
  }, []);

  const [filter, setFilter] = useState('all');
  const categories = ['all', 'interior', 'food', 'drinks'];
  const categoriesVN = {
    'all': 'tất cả',
    'interior': 'không gian',
    'food': 'món ăn',
    'drinks': 'đồ uống'
  };

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  const toggleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLikedImages = likedImages.includes(index)
      ? likedImages.filter(i => i !== index)
      : [...likedImages, index];
    setLikedImages(newLikedImages);
    localStorage.setItem('galleryLikes', JSON.stringify(newLikedImages));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">Thư viện ảnh</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Khoảnh khắc ẩm thực</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hãy tham quan nhà hàng qua các hình ảnh về không gian, món ăn và những khoảnh khắc đáng nhớ
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                filter === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition`}
            >
              {categoriesVN[category as keyof typeof categoriesVN]}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-medium mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => toggleLike(index, e)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    likedImages.includes(index)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600'
                  } opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110`}
                >
                  <Heart className={`h-5 w-5 ${likedImages.includes(index) ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-4 w-4 inline-block mr-1" />
                  {categoriesVN[image.category as keyof typeof categoriesVN]}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-4xl max-h-[80vh] relative">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-medium mb-2">{images[selectedImage].title}</h3>
                <p className="text-gray-300">{images[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}