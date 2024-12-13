import React, { useState } from "react";
import "./Nav.css";
import { useMediaQuery } from "react-responsive";
import { CiMenuBurger } from "react-icons/ci";

const links = [
    { href: "/Home", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Reservations", label: "Reservations" },
    { href: "/order_online", label: "Order online" },
    { href: "/Login", label: "Login" }
];

const Nav = () => {
const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => setMenuOpen((prev) => !prev);

return (
    <nav className={isMobile ? "mobile-nav" : "desktop-nav"}>
    {isMobile ? (
        <div>
            <CiMenuBurger className="burger-menu" onClick={toggleMenu} />
            <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
        ) : (
        <ul className="desktop-menu">
            {links.map((link, index) => (
            <li key={index}>
                <a href={link.href}>{link.label}</a>
            </li>
            ))}
        </ul>
        )}
    </nav>
    );
};

export default Nav;