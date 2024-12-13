import React from "react";
import Nav from "./Nav";
import logo from '../assets/icons_assets/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo Littlelemon"/>
            <Nav/>
        </header>
    )
}

export default Header;