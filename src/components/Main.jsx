import React from "react";
import mainImage from '../assets/icons_assets/restauranfood.jpg'
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className="main-description">
                <div className="text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dfsd sdf sdfbsdjbhf sdfnasdbfhisdahfsd fsd fsdhfas  fasdbf sasdhfdaj fsdjfhaslkdf asdkfhasjk</p>
                    <a href="/Reservations">Reserve a table</a>
                </div>
                <div className="img">
                    <img src={mainImage} alt="Restarant food"/>
                </div>
            </div>
        </main>
    )
}

export default Main;