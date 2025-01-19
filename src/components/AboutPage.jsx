import Footer from './Footer';
import Header from './Header';
import './AboutPage.css'
import './About.css'
import chef from '../assets/icons_assets/restaurantchef.jpg'
import restaurant from '../assets/icons_assets/restaurant.jpg'

const AboutPage = () => {
    return (
        <div className='about-page-container'>
            <Header/>
            <div className='about-page'>
                <div className='about-page-description'>
                    <div className='p'>
                        <h1>About Us!</h1>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <p>Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    </div>
                    <div className="img">
                        <img src={chef} alt="Restarant chef" className='image1'/>
                        <img src={restaurant} alt="Restarant" className='image2'/>
                    </div>
                </div>
                <iframe
                    title='Location'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.099346114299!2d-6.2592442!3d53.3414778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f886b1dd297%3A0xf1b04af0735a4553!2sLittle%20Lemon!5e0!3m2!1ses-419!2sdo!4v1734398519895!5m2!1ses-419!2sdo" 
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage;