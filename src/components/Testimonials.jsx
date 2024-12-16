import './Testimonials.css'
import { FaRegStar } from "react-icons/fa";


const Testimonials = (props) => {
    const testimonials = props.testimonials

    return(
        <div className='testimonials-container'>
            <div className='testimonials-header'>
                <h1>Testimonials</h1>
            </div>
            <div className='testimonials'>
            {testimonials.map((e, index) => (
                <div key={index} className='testimonial'>
                    <p className='rating'><i>Rating: </i>{Array.from({length: e.rating}, (_, index) => (
                        <FaRegStar className='star'/>
                    ))}
                    </p>
                    <div className='avatar-name'>
                        <img src={e.avatar} alt='Avatar' className='avatar'/>
                        <p><b>{e.customer_name}</b></p>
                    </div>
                    <p className='description'><i>"{e.testimonial_text.slice(0, 100)}"</i></p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Testimonials;