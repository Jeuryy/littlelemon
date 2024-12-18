import { useState } from 'react';
import './BookingForm.css'

const BookingForm = () => {
const [formData, setFormData] = useState({
    name: ''
});

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    console.log(formData)
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
}

    return (
        <div>
            <h2>Book a reservaton</h2>
            <form>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'/>
                <button type='submit' onClick={handleSubmit}>Book</button>
            </form>
        </div>
    )
}

export default BookingForm;