import BookingForm from './BookingForm';
import './BookingPage.css'
import Footer from './Footer';
import Header from './Header';

const BookingPage = (props) => {
    const availableTimes = props.availableTimes;
    const dispatch = props.dispatch

    return (
        <div>
            <Header/>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
            <Footer/>
        </div>
    )
}

export default BookingPage;