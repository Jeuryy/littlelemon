import './About.css'
import chef from '../assets/icons_assets/restaurantchef.jpg'
import restaurant from '../assets/icons_assets/restaurant.jpg'

const About = () => {
    return (
        <div className="about-description" id='About'>
            <div className="text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <p>Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            </div>
            <div className="img">
                <img src={chef} alt="Restarant chef" className='image1'/>
                <img src={restaurant} alt="Restarant" className='image2'/>
            </div>
        </div>
    )
}

export default About;