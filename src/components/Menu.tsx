import React, { useState } from 'react';
import { X } from 'lucide-react';

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
}

const menuItems: MenuItem[] = [
  {
    name: "Pan-Seared Scallops",
    description: "Fresh sea scallops with citrus butter sauce",
    price: "$32",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop",
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
    details: {
      ingredients: "Duck leg, cherry reduction sauce, fresh thyme, fingerling potatoes",
      preparation: "Duck leg slowly cooked in its own fat until tender, served with a rich cherry reduction sauce and herb-roasted fingerling potatoes.",
      allergens: "None",
      dietary: "Gluten-free",
      pairings: "Excellent with our Pinot Noir"
    }
  },
  {
    name: "Grilled Salmon",
    description: "Fresh salmon fillet with lemon dill sauce",
    price: "$28",
    image: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg",
    details: {
      ingredients: "Salmon fillet, lemon, dill, olive oil, sea salt",
      preparation: "Grilled to perfection, our salmon is served with a zesty lemon dill sauce that complements its rich flavor.",
      allergens: "Fish",
      dietary: "Gluten-free",
      pairings: "Pairs well with our Sauvignon Blanc"
    }
  },
  {
    name: "Vegetable Stir-Fry",
    description: "A medley of seasonal vegetables in a savory sauce",
    price: "$22",
    image: "https://images.themodernproper.com/billowy-turkey/production/posts/VegetableStirFry_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1703377301&s=3484d660c4b404c6d23b0c3ec7ac66eb",
    details: {
      ingredients: "Broccoli, bell peppers, carrots, soy sauce, sesame oil",
      preparation: "Stir-fried with a blend of soy sauce and sesame oil, this dish is vibrant and packed with flavor.",
      allergens: "Soy",
      dietary: "Vegan, gluten-free",
      pairings: "Great with our house-made ginger tea"
    }
  },
  {
    name: "Chicken Parmesan",
    description: "Breaded chicken breast topped with marinara and cheese",
    price: "$30",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2023-09-chicken-parmesan%2Fchicken-parmesan-1287",
    details: {
      ingredients: "Chicken breast, marinara sauce, mozzarella cheese, basil",
      preparation: "Crispy breaded chicken topped with marinara sauce and melted mozzarella, served with a side of pasta.",
      allergens: "Dairy, gluten",
      dietary: "Contains gluten",
      pairings: "Pairs beautifully with our Chianti"
    }
  },
  {
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a molten center",
    price: "$10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaM0cCVxQQXHXT_QGA2befLdt35iuZGJUCA&s",
    details: {
      ingredients: "Dark chocolate, butter, eggs, sugar, flour",
      preparation: "Baked to perfection, this cake has a gooey chocolate center that flows out when cut.",
      allergens: "Dairy, eggs, gluten",
      dietary: "Contains gluten",
      pairings: "Delicious with our vanilla ice cream"
    }
  },
];

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [showReservationModal, setShowReservationModal] = useState(false);

  const openDishDetails = (dish: MenuItem) => {
    setSelectedDish(dish);
  };

  const closeDishDetails = () => {
    setSelectedDish(null);
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
              onClick={() => openDishDetails(item)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
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
                  onClick={closeDishDetails}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
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
