import React from 'react';
//import './Home.css';

import ItemListContainer from '../../components/ItemList/ItemListContainer';


const Home = () => {
	return (
		<div className='Home'>
            <ItemListContainer greeting="Bienvenido a Tiendas W" />
			
		</div>
	);
};

export default Home;
