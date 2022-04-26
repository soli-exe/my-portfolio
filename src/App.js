import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../src/tailwind.css';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="grid md:px-16 lg:px-32">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;