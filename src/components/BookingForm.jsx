import { useState } from 'react';
import './BookingForm.css'

const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState ([
        '15:00', '16:00', '17:00', '18:00', '19:00',
        '20:00', '21:00', '22:00', '23:00'])
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
}

    return (
        <div className='booking-form-container'>
            <h1>Book a reservation!</h1>
            <form>
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
                </select>
                <label htmlFor='date'>Date</label>
                <input
                    type='date'
                    name='date'
                    id='date'
                    value={formData.date}
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={handleChange}/>
                <label htmlFor='time'>Time</label>
                <select
                    id='time'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}>
                    {availableTimes.map((e, index) => (
                        <option key={index} value={e}>
                        {e}
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
                    placeholder='XXX-XXX-XXXX'
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                    <button onClick={handleReset} className='reset'>Reset</button>
                    <button type='submit' onClick={handleSubmit} className='book'>Book</button>
                </div>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default BookingForm;