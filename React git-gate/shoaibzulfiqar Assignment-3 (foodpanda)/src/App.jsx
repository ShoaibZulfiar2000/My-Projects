import React, { useState } from 'react';
import MenuItem from './MenuItem';

const App = () => {
  const initialMenu = [
    { id: 1, name: "Chicken Biryani", price: 500, isSpicy: true },
    { id: 2, name: "Egg Biryani", price: 350, isSpicy: false },
    { id: 3, name: "Sada Biryani", price: 200, isSpicy: false },
    { id: 4, name: "Tikka Biryani", price: 600, isSpicy: true },
    { id: 5, name: "Veg Pulao", price: 300, isSpicy: false },
  ];

  const [menu, setMenu] = useState(initialMenu);

  const showNonSpicy = () => {
    const filtered = initialMenu.filter(item => !item.isSpicy);
    setMenu(filtered);
  };

  const showAll = () => setMenu(initialMenu);

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 mt-4">
          <h1 className="text-4xl font-black text-pink-600 tracking-tighter">foodpanda</h1>
          <p className="text-gray-500 font-medium mt-1">Local Biryani Joint 🍛</p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          <button 
            onClick={showAll} 
            className="bg-white text-gray-800 border-2 border-gray-200 px-6 py-2 rounded-full font-bold shadow-sm hover:border-pink-500 transition-colors">
            All Items
          </button>
          <button 
            onClick={showNonSpicy} 
            className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-pink-700 active:scale-95 transition-all">
            Show Non-Spicy Only
          </button>
        </div>

        {/* Menu Items List */}
        <div className="menu-container">
          {menu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {menu.length === 0 && (
          <p className="text-center text-gray-400 mt-20">Nothing on the menu right now!</p>
        )}
      </div>
    </div>
  );
};

export default App;
