import React from 'react';
import '../src/tailwind.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="grid place-content-center bg-bg-light md:px-16 lg:px-32">
      <Header />
    </div>
  );
};

export default App;