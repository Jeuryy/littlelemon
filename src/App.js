import { useEffect, useState, useReducer } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import AboutPage from './components/AboutPage';
import BookingPage from './components/BookingPage';
import { fetchAPI } from './api';

const updateTimes = (state, action) => {
  switch (action.type){
    case 'UPDATE_TIMES':
      const selectedDate = action.payload;
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00']
    default:
      return state;
  }
};

const initializeTimes = () => {
  const today = new Date();

  fetchAPI(today);

  /*return [
    '15:00', '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00', '22:00', '23:00'];*/
};


function App() {

const [testimonials, setTestimonials] = useState([]);
const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

useEffect(() => {
  fetch('/testimonials.json')
  .then(res => res.json())
  .then(data => {
    setTestimonials(data)
  })
}, [])

/*useEffect(() => {
  console.log(fetchAPI(new Date()))
}, [])*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage  testimonials={testimonials}/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Reservations' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
