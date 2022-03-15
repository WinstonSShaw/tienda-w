import React, { useState, useContext } from 'react';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

//COMPONENTS
import './Shop.css';
import MessageSuccess from '../MesageSuccess/MessageSuccess';

import TextField from '@mui/material/TextField';

//CONTEXT
import { CartContext } from "../../Context/CartContext";

const initialState = {
	name: '',
	phone: '',
	email: '',
};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Shop = () => {
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

    const [cartItems, setCartItems] = useContext(CartContext);

    const itemsCompr = [];
    const comprados = () => { cartItems.map((item) => {
                    return itemsCompr.push({id: item.id, title: item.title, price: item.price, cant: item.comprar})
                });
            }
    
    comprados();


	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
        
		e.preventDefault();

		const docRef = await addDoc(collection(db, 'purchases'), {
			values, itemsCompr,
		});

		setPurchaseID(docRef.id);

        
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
			{cartItems.length === 0 ? null : <form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					value={values.name}
					name='name'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Phone'
					style={{ margin: 10, width: 400 }}
					value={values.phone}
					name='phone'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='email'
					style={{ margin: 10, width: 400 }}
					value={values.email}
					name='email'
					onChange={handleOnChange}
				/>
				{values.name === '' ? <button className='btnASendAction' disabled={values.name === ''}>Para terminar complete el nombre</button> 
				:  <button className='btnASendAction' disabled={values.name === ''}>Terminar Compra</button>}
				
			</form>}
			
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>
	);
};

export default Shop;
