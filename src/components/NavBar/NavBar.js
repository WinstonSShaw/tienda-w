import React from "react";

import { AppBar, Container, Toolbar } from '@mui/material';

//COMPONENTS
import Cart from "./CartWidjet";
import "./NavBar.css";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const styles = {
	linkButton: {
		textDecoration: 'none',
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	purchaseButton: {
		color: 'grey',
		fontSize: 18,
		fontWeight: 'bold',
	},
};

const NavBar = (props) => {
    return(
        <AppBar position='static' className='ResponsiveNavigation'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters className='ResponsiveNavigationContainer'>
        
            <h1>Tienda W</h1>

                    <Link to='/' style={styles.linkButton}>Home</Link>
                    <CategoryMenu />
                    <Link to='/cart' style={styles.linkButton}>Carrito</Link>
                    <Link to='/about' style={styles.linkButton}>About</Link>

            <Cart/>

            
        
                </Toolbar>
			</Container>
		</AppBar>
    );

}

export default NavBar;