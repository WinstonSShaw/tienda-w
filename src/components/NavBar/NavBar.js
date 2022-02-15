import React from "react";

import Cart from "./CartWidjet";
import "./NavBar.css";

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <nav className="Navigation" style={{border: `10px solid ${props.myColor}`}}>
            <h1>Tienda W</h1>

            <div>
                <ul>
                    <Link to='/' className="Link">Home</Link>
                    <Link to='/consolas' className="Link">Consolas</Link>
                    <Link to='/juegos' className="Link">Juegos</Link>
                    <Link to='/about' className="Link">About</Link>
                </ul>
            </div>

            <Cart/>

            
        </nav>
    );

}

export default NavBar;