import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import AboutPage from './components/AboutPage';

function App() {
const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  fetch('/testimonials.json')
  .then(res => res.json())
  .then(data => {
    setTestimonials(data)
  })
}, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage  testimonials={testimonials}/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
