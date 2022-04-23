import React from 'react';
import '../src/tailwind.css';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="grid place-content-center bg-bg-light sm:px-8 md:px-16 lg:px-32">
      <Header />
      <Home />
    </div>
  );
};

export default App;