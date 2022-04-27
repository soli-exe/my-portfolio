import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../src/tailwind.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="grid justify-items-center md:px-16 lg:px-32">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;