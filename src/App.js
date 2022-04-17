import React from 'react';
import '../src/tailwind.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="container h-screen bg-bg-light">
      <Header />
    </div>
  );
};

export default App;