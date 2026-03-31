import { useState } from "react";
import MenuItem from "./MenuItem";

function App() {
  const menu = [
    { id: 1, name: "Chicken Biryani", price: 500, isSpicy: true },
    { id: 2, name: "Beef Biryani", price: 600, isSpicy: false },
    { id: 3, name: "Zinger Burger", price: 400, isSpicy: true },
    { id: 4, name: "Fries", price: 200, isSpicy: false },
  ];

  const [showNonSpicy, setShowNonSpicy] = useState(false);

  // Filter logic
  const filteredMenu = showNonSpicy
    ? menu.filter((item) => item.isSpicy === false)
    : menu;

  return (
    <div className="container mt-4">
      <h2>🍽️ Biryani Menu</h2>

      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowNonSpicy(!showNonSpicy)}
      >
        Show Non-Spicy Only
      </button>

      {/* map() loop */}
      {filteredMenu.map((item) => (
        <MenuItem
          key={item.id}   // 🔥 VERY IMPORTANT
          name={item.name}
          price={item.price}
          isSpicy={item.isSpicy}
        />
      ))}
    </div>
  );
}

export default App;