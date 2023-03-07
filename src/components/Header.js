import React from "react";
import LogoH from "../assets/LogoOrange.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <nav>
                <img className="header__logo" 
                    src={LogoH} 
                    alt="Logo Kasa">
                </img>
                <ul>
                    <li>
                        <Link to="/" className="nav">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/APropos" className="nav">
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header