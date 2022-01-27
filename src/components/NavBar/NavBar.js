import Cart from "./CartWidjet";
import "./NavBar.css";

const NavBar = (props) => {
    return(
        <nav className="Navigation" style={{border: `10px solid ${props.myColor}`}}>
            <h1>Tienda W</h1>

            <div>
                <ul>
                    <li>Home</li>
                    <li>Consolas</li>
                    <li>Juegos</li>
                    <li>Promociones</li>
                </ul>
            </div>

            <Cart/>

            
        </nav>
    );

}

export default NavBar;