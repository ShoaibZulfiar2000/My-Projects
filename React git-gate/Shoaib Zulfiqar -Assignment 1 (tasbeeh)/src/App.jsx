import { useState } from 'react'; // React Hook import kiya

function App() {
  // 1. State Banayi (count variable aur usay update karne wala function)
  const [count, setCount] = useState(0);

  // 2. Button click functions
  const increment = () => {
    setCount(count + 1); // Purani value mein 1 jama kar do
  };

  const reset = () => {
    setCount(0); // Wapis 0 par le aao
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
      {/* 3. Massive Number (Data drives UI) */}
      <h1 style={{ fontSize: '150px', margin: '20px' }}>{count}</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* 4. Green Count Button */}
        <button 
          onClick={increment}
          style={{ padding: '15px 30px', fontSize: '20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Count
        </button>

        {/* 5. Red Reset Button */}
        <button 
          onClick={reset}
          style={{ padding: '15px 30px', fontSize: '20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
