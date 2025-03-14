import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Penal from './pages/Penal';


export default function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>

        <Route path='/penal' element={<Penal />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}
