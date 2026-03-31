import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className={`p-5 rounded-2xl border-2 flex justify-between items-center shadow-sm mb-4 transition-all duration-300 hover:shadow-md
      ${item.isSpicy ? 'bg-red-50 border-red-100' : 'bg-white border-gray-100'}`}>
      
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          {item.name} 
          {item.isSpicy && <span className="text-lg">🔥</span>}
        </h2>
        <p className="text-orange-600 font-bold text-lg italic">
          Rs. {item.price}
        </p>
      </div>

      <div className={`text-[10px] font-black tracking-widest px-3 py-1 rounded-full border-2 
        ${item.isSpicy 
          ? 'bg-red-600 text-white border-red-600' 
          : 'bg-green-500 text-white border-green-500'}`}>
        {item.isSpicy ? 'HOT' : 'MILD'}
      </div>
    </div>
  );
};

export default MenuItem;
