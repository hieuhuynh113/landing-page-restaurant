import { useState, useEffect } from 'react';
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
    name: "Seared Scallops",
    description: "Fresh scallops with lemon butter sauce",
    price: "720.000₫",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop",
    category: "starters",
    isNew: true,
    details: {
      ingredients: "Fresh Atlantic scallops, lemon butter sauce, herbs, sea salt",
      preparation: "Gently seared to perfect golden brown, our scallops are served with a light lemon butter sauce that highlights their natural sweetness. Garnished with fresh herbs and a touch of sea salt.",
      allergens: "Shellfish, dairy",
      dietary: "Gluten-free",
      pairings: "Pairs beautifully with our restaurant's Chablis or Sancerre"
    }
  },
  {
    name: "Wagyu Beef",
    description: "Premium Wagyu beef with truffle mushroom sauce",
    price: "1.450.000₫",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    category: "main course",
    spicyLevel: 1,
    isPopular: true,
    details: {
      ingredients: "A5 Wagyu beef, black truffle mushroom sauce, roasted garlic, seasonal vegetables",
      preparation: "Cooked to your preference, premium Wagyu beef is served with a rich black truffle mushroom sauce, roasted garlic, and seasonal vegetables.",
      allergens: "Dairy",
      dietary: "Gluten-free",
      pairings: "Recommended with our premium Cabernet Sauvignon"
    }
  },
  {
    name: "Lobster Risotto",
    description: "Creamy Arborio rice with fresh lobster",
    price: "990.000₫",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop",
    category: "main course",
    isPopular: true,
    details: {
      ingredients: "Maine lobster, Arborio rice, white wine, aged Parmesan cheese, fresh herbs",
      preparation: "Arborio rice is slowly cooked and combined with fresh Maine lobster, aged Parmesan cheese, and a touch of white wine. Garnished with fresh herbs.",
      allergens: "Shellfish, dairy",
      dietary: "Gluten-free option available",
      pairings: "Perfect with Italian Verdicchio wine"
    }
  },
  {
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry sauce",
    price: "850.000₫",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop",
    category: "main course",
    details: {
      ingredients: "Duck leg, reduced cherry sauce, fresh thyme, fingerling potatoes",
      preparation: "Duck leg is slowly cooked in its own fat until tender, served with a rich cherry sauce and fingerling potatoes roasted with herbs.",
      allergens: "None",
      dietary: "Gluten-free",
      pairings: "Excellent with our Pinot Noir"
    }
  },
  {
    name: "Truffle Mushroom Soup",
    description: "Creamy wild mushroom soup with truffle oil",
    price: "360.000₫",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    category: "starters",
    details: {
      ingredients: "Wild mushrooms, cream, truffle oil, herbs",
      preparation: "A smooth blend of wild mushrooms, finished with truffle oil and fresh herbs.",
      allergens: "Dairy",
      dietary: "Vegetarian, Gluten-free",
      pairings: "Try with our Chardonnay"
    }
  },
  {
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla ice cream",
    price: "320.000₫",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070&auto=format&fit=crop",
    category: "desserts",
    isNew: true,
    details: {
      ingredients: "Dark chocolate, eggs, butter, sugar, vanilla ice cream",
      preparation: "Freshly baked chocolate soufflé, served with house-made vanilla ice cream.",
      allergens: "Dairy, eggs, gluten",
      dietary: "Vegetarian",
      pairings: "Perfect with our dessert wine selection"
    }
  },
  {
    name: "Spicy Tuna Tartare",
    description: "Fresh tuna with Asian spices",
    price: "540.000₫",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2070&auto=format&fit=crop",
    category: "starters",
    spicyLevel: 2,
    details: {
      ingredients: "Sushi-grade tuna, sesame oil, soy sauce, chili",
      preparation: "Hand-cut tuna mixed with Asian spices and served with crispy wonton chips.",
      allergens: "Fish, soy",
      dietary: "Gluten-free option available",
      pairings: "Excellent with our sake selection"
    }
  },
  {
    name: "Artisan Cheese Board",
    description: "Selection of premium cheeses with accompaniments",
    price: "620.000₫",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2069&auto=format&fit=crop",
    category: "desserts",
    details: {
      ingredients: "Seasonal selection of artisan cheeses, honey, nuts, fruits",
      preparation: "A carefully curated collection of premium cheeses served with honey, nuts, and dried fruits.",
      allergens: "Dairy, nuts",
      dietary: "Vegetarian",
      pairings: "Try with our Port wine collection"
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
    'all': 'all',
    'starters': 'starters',
    'main course': 'main course',
    'desserts': 'desserts'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Dishes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted dishes that combine traditional flavors with modern techniques
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search dishes..."
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
              <p className="text-gray-500 text-lg">No dishes found matching your criteria</p>
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
                      New
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      Popular
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
                    View Details
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
                  New
                </span>
              )}
              {selectedDish.isPopular && (
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Popular
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
                  <h4 className="font-semibold text-gray-900 mb-2">Ingredients</h4>
                  <p className="text-gray-600">{selectedDish.details.ingredients}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Preparation</h4>
                  <p className="text-gray-600">{selectedDish.details.preparation}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Allergens</h4>
                    <p className="text-gray-600">{selectedDish.details.allergens}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dietary</h4>
                    <p className="text-gray-600">{selectedDish.details.dietary}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pairings</h4>
                    <p className="text-gray-600">{selectedDish.details.pairings}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={closeDishDetails}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}