import { useState } from 'react';
import './BookingForm.css'

const BookingForm = () => {
const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
    mobile: '',
    email: ''
});
const [error, setError] = useState('')

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

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
    console.log('Form sent');
    console.log(formData);
}

    return (
        <div className='booking-form-container'>
            <h1>Book a reservation!</h1>
            <form>
                <label htmlFor='date'>Date</label>
                <input
                    type='date'
                    name='date'
                    id='date'
                    value={formData.date}
                    onChange={handleChange}/>
                <label htmlFor='time'>Time</label>
                <input
                    type='time'
                    name='time'
                    id='time'
                    value={formData.time}
                    onChange={handleChange}/>
                <label htmlFor='guests'>Guests</label>
                <input
                    type='range'
                    min={1}
                    max={10}
                    name='guests'
                    id='guests'
                    value={formData.guests}
                    onChange={handleChange}/>
                <label htmlFor='occasion'>Select an occasion</label>
                <select
                    id='occasion'
                    name='occasion'
                    value={formData.occasion}
                    onChange={handleChange}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <label htmlFor='mobile'>Mobile</label>
                <input
                    type='text'
                    name='mobile'
                    id='mobile'
                    value={formData.mobile}
                    onChange={handleChange}/>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}/>
                <button type='submit' onClick={handleSubmit}>Book</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default BookingForm;