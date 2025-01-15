import { useEffect, useState } from 'react';
import './BookingForm.css'
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";

const BookingForm = (props) => {
    const availableTimes = props.availableTimes;

    const dispatch = props.dispatch;
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        mobile: '',
        email: ''
    });
    const [error, setError] = useState('')
    const [confirmed, setConfirmed] = useState(false)

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleDateChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
    const selectedDate = e.target.value;
    dispatch({type: "UPDATE_TIMES", payload: selectedDate})
}
const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time || !formData.guests
        || !formData.occasion || !formData.mobile || !formData.email)
    {
        setError('All fields are required!')
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
        setError('Por favor ingrese un correo electrónico válido');
        return;
    }

    setError('');
    setConfirmed(true);
    window.scrollTo(0,0);
    console.log(formData);
}

const handleReset = (e) => {
    e.preventDefault();
    setFormData({
        ...formData,
        name: '',
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        mobile: '',
        email: ''
    });
    setError('');
    setConfirmed(false)
}

    return (
        <div className='booking-form'>
            {confirmed && <Alert severity="success" className='alert'>
                <AlertTitle id='alert-title'>Thank you for booking, {formData.name}!</AlertTitle>
                <p>Your reservation is confirmed for <b>{formData.date}</b> at <b>{formData.time}</b>.</p>
                <p><b>Number of guests: </b> {formData.guests}</p>
                <p>We are excited to see you soon!</p>
                <Link className='home' to='/'><IoReturnUpBackOutline className='home-icon'/>Home</Link>
            </Alert>}
            <div className={!confirmed ? 'booking-form-container' : 'booking-form-container booking-completed' }>
                <h1>Book a reservation!</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={formData.name}
                        placeholder='John Doe'
                        maxLength={40}
                        onChange={handleChange}/>
                    <label htmlFor='occasion'>Select an occasion</label>
                    <select
                        id='occasion'
                        name='occasion'
                        value={formData.occasion}
                        onChange={handleChange}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Date">Casual</option>
                    </select>
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        name='date'
                        id='date'
                        value={formData.date}
                        min={new Date().toISOString().slice(0, 10)}
                        onChange={handleDateChange}/>
                    <label htmlFor='time'>Time</label>
                    <select
                        id='time'
                        name='time'
                        value={formData.time}
                        onChange={handleChange}>
                        {formData.date && availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                            {time}
                            </option>
                        ))}
                    </select>
                    <label htmlFor='guests'>Guests</label>
                    <input
                        type='range'
                        min={1}
                        max={10}
                        name='guests'
                        id='guests'
                        value={formData.guests}
                        onChange={handleChange}/>
                        <p className='guests'>{formData.guests}</p>
                    <label htmlFor='mobile'>Mobile</label>
                    <input
                        type='tel'
                        name='mobile'
                        id='mobile'
                        value={formData.mobile}
                        placeholder='XXXXXXXXXX'
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        onChange={handleChange}/>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={formData.email}
                        placeholder='email@email.com'
                        onChange={handleChange}/>
                    <div className='buttons'>
                        <button type='submit' className='book'>Book</button>
                        <button onClick={handleReset} className='reset'>Reset</button>
                    </div>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default BookingForm;