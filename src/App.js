import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

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
      <div className="App">
        <Header/>
        <Main testimonials={testimonials}/>
        <About/>
        <Footer/>
      </div>

  );
}

export default App;
