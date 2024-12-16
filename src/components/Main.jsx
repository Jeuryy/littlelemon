import React from "react";
import mainImage from '../assets/icons_assets/restauranfood.jpg'
import Box from "./Box";
import './Main.css'
//import img from '../assets/icons_assets/bruchetta.svg'

const Main = () => {
    return (
        <main>
            <div className="main-description">
                <div className="text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a href="/Reservations">Reserve a table</a>
                </div>
                <div className="img">
                    <img src={mainImage} alt="Restarant food"/>
                </div>
            </div>
            <div className="cards-header">
                <h1>This week's specials</h1>
                <a href="/menu">Online menu</a>
            </div>
            <div className="cards">
                <Box
                    src={mainImage}
                    alt="img alt"
                    name="Dishname"
                    price="$12.50"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <Box
                    src={mainImage}
                    alt="img alt"
                    name="Dishname"
                    price="$12.50"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <Box
                    src={mainImage}
                    alt="img alt"
                    name="Dishname"
                    price="$12.50"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <Box
                    src={mainImage}
                    alt="img alt"
                    name="Dishname"
                    price="$12.50"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <Box
                    src={mainImage}
                    alt="img alt"
                    name="Dishname"
                    price="$12.50"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <Box
                    src={mainImage}
                    alt="img alt"
                    name="Dishname"
                    price="$12.50"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            </div>

        </main>
    )
}

export default Main;