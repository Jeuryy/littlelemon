import { useState } from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css'
import Footer from './Footer';
import Header from './Header';

const BookingPage = () => {

    return (
        <div>
            <Header/>
            <div> Booking Page</div>
            <BookingForm/>
            <Footer/>
        </div>
    )
}

export default BookingPage;