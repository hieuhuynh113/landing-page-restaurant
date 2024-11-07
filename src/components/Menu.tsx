import React, { useState, useEffect } from 'react';
import { X, Search, Filter } from 'lucide-react';

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
    name: "Pan-Seared Scallops",
    description: "Fresh sea scallops with citrus butter sauce",
    price: "$32",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop",
    category: "starters",
    isNew: true,
    details: {
      ingredients: "Fresh Atlantic scallops, citrus butter sauce, micro herbs, sea salt",
      preparation: "Delicately seared to golden perfection, our scallops are served with a light citrus butter sauce that enhances their natural sweetness. Garnished with fresh micro herbs and a touch of sea salt.",
      allergens: "Shellfish, dairy",
      dietary: "Gluten-free",
      pairings: "Pairs beautifully with our house Chablis or Sancerre"
    }
  },
  {
    name: "Wagyu Beef Steak",
    description: "Premium grade wagyu with truffle sauce",
    price: "$65",
    image: "https://www.dukeshill.co.uk/cdn/shop/collections/Wagyu_RibEye_For_Web_03.jpg?v=1714563513",
    category: "main course",
    spicyLevel: 1,
    isPopular: true,
    details: {
      ingredients: "A5 Wagyu beef, black truffle sauce, roasted garlic, seasonal vegetables",
      preparation: "Grilled to your preference, our premium Wagyu beef is served with a rich black truffle sauce, accompanied by roasted garlic and seasonal vegetables.",
      allergens: "Dairy",
      dietary: "Gluten-free",
      pairings: "Recommended with our reserve Cabernet Sauvignon"
    }
  },
  {
    name: "Lobster Risotto",
    description: "Creamy arborio rice with fresh lobster",
    price: "$45",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069&auto=format&fit=crop",
    category: "main course",
    isPopular: true,
    details: {
      ingredients: "Maine lobster, Arborio rice, white wine, Parmesan, fresh herbs",
      preparation: "Slowly cooked Arborio rice finished with fresh Maine lobster, aged Parmesan, and a touch of white wine. Garnished with fresh herbs.",
      allergens: "Shellfish, dairy",
      dietary: "Available gluten-free",
      pairings: "Perfect with our Italian Verdicchio"
    }
  },
  {
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry sauce",
    price: "$38",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop",
    category: "main course",
    details: {
      ingredients: "Duck leg, cherry reduction sauce, fresh thyme, fingerling potatoes",
      preparation: "Duck leg slowly cooked in its own fat until tender, served with a rich cherry reduction sauce and herb-roasted fingerling potatoes.",
      allergens: "None",
      dietary: "Gluten-free",
      pairings: "Excellent with our Pinot Noir"
    }
  },
  {
    name: "Truffle Mushroom Soup",
    description: "Creamy wild mushroom soup with truffle oil",
    price: "$16",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    category: "starters",
    details: {
      ingredients: "Wild mushrooms, cream, truffle oil, herbs",
      preparation: "A velvety blend of wild mushrooms, finished with a drizzle of truffle oil and fresh herbs.",
      allergens: "Dairy",
      dietary: "Vegetarian, Gluten-free",
      pairings: "Try with our Chardonnay"
    }
  },
  {
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla ice cream",
    price: "$14",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070&auto=format&fit=crop",
    category: "desserts",
    isNew: true,
    details: {
      ingredients: "Dark chocolate, eggs, butter, sugar, vanilla ice cream",
      preparation: "Freshly baked chocolate soufflé, served with homemade vanilla ice cream.",
      allergens: "Dairy, eggs, gluten",
      dietary: "Vegetarian",
      pairings: "Perfect with our dessert wine selection"
    }
  },
  {
    name: "Spicy Tuna Tartare",
    description: "Fresh tuna with Asian-inspired spices",
    price: "$24",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2070&auto=format&fit=crop",
    category: "starters",
    spicyLevel: 2,
    details: {
      ingredients: "Sushi-grade tuna, sesame oil, soy sauce, chili",
      preparation: "Hand-cut tuna mixed with Asian spices and served with wonton crisps.",
      allergens: "Fish, soy",
      dietary: "Available gluten-free",
      pairings: "Excellent with our sake selection"
    }
  },
  {
    name: "Artisanal Cheese Plate",
    description: "Selection of fine cheeses with accompaniments",
    price: "$28",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2069&auto=format&fit=crop",
    category: "desserts",
    details: {
      ingredients: "Seasonal selection of artisanal cheeses, honey, nuts, fruit",
      preparation: "Curated selection of fine cheeses served with honey, nuts, and dried fruits.",
      allergens: "Dairy, nuts",
      dietary: "Vegetarian",
      pairings: "Try with our port wine selection"
    }
  }
];

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['all', 'starters', 'main course', 'desserts'];

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
                {category}
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
                    <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-amber-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.spicyLevel && (
                    <div className="flex items-center gap-1">
                      {[...Array(item.spicyLevel)].map((_, i) => (
                        <span key={i} className="text-red-500">🌶️</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Dish Details Modal */}
        {selectedDish && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeDishDetails();
                  }}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedDish.name}</h3>
                  <span className="text-2xl text-amber-600 font-bold">{selectedDish.price}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600">{selectedDish.details.preparation}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ingredients</h4>
                    <p className="text-gray-600">{selectedDish.details.ingredients}</p>
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
                      <h4 className="font-semibold text-gray-900 mb-2">Wine Pairing</h4>
                      <p className="text-gray-600">{selectedDish.details.pairings}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        closeDishDetails();
                        const contactElement = document.getElementById('contact');
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition"
                    >
                      Reserve a Table to Try This Dish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}