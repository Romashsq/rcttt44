import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Redux Counter</h1>
      <button style={{ margin: '5px' }}>+</button>


      <Counter />
    </div>
  );
}

export default App;
