import React from "react";
import logo from '../assets/icons_assets/Logo.svg'
import './Footer.css'
import { useMediaQuery } from "react-responsive";

const links = [
    { href: "/Home", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Reservations", label: "Reservations" },
    { href: "/order_online", label: "Order online" },
    { href: "/Login", label: "Login" }
];

const Footer = () => {

    return (
        <footer>
            <div className="footer-img">
                <img src={logo} alt="Logo Littlelemon"/>
            </div>
            <div className="footer-links">
                <div>
                    <h4>Navigation</h4>
                    <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/link">Address</a></li>
                        <li><a href="/link">Phone number</a></li>
                        <li><a href="/link">Email</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="/link">Instagram</a></li>
                        <li><a href="/link">Facebook</a></li>
                        <li><a href="/link">Twitter</a></li>
                        <li><a href="/link">Website</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;