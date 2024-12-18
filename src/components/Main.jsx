import React from "react";
import mainImage from '../assets/icons_assets/restauranfood.jpg'
import Box from "./Box";
import Testimonials from "./Testimonials";
import './Main.css'
import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonSalad from '../assets/icons_assets/lemon dessert.jpg'
import menu from '../assets/menu.pdf'


//import img from '../assets/icons_assets/bruchetta.svg'

const Main = (props) => {
    const testimonials = props.testimonials
    return (
        <main>
            <div className="main-description">
                <div className="text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                    <a href="/Reservations">Reserve a table</a>
                </div>
                <div className="img">
                    <img src={mainImage} alt="Restarant food"/>
                </div>
            </div>
            <div className="cards-header">
                <h1>This week's specials</h1>
                <a href={menu} target="_blank" rel="noreferrer">Online menu</a>
            </div>
            <div className="cards">
                <Box
                    src={greekSalad}
                    alt="img alt"
                    name="Greek Salad"
                    price="$12.50"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "/>
                <Box
                    src={bruchetta}
                    alt="img alt"
                    name="Bruchetta"
                    price="$12.50"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
                <Box
                    src={lemonSalad}
                    alt="img alt"
                    name="Lemon Dessert"
                    price="$12.50"
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
            </div>
            <Testimonials testimonials={testimonials}/>
        </main>
    )
}

export default Main;