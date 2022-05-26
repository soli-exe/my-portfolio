import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styles
import '../src/tailwind.css';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

// Contexts
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './context/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div className="grid justify-items-center md:px-16 lg:px-32">
        <Header toggleTheme={<ThemeToggle />} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;