import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//CONTEXT
import { CartContext } from '../../Context/CartContext';

//COMPONENTS
import CartList from '../../components/CartList/CartList';

const styles = {
	container: {
		margin: '40px 0 40px 0',
	},
};

const Cart = () => {
	const [cartItems, setCartItems, addNewItem, cantComprar, cantContador, deleteItem, clearCart] = useContext(CartContext);

	const total = cartItems.reduce((acc, value) =>
		acc + (value.price * value.comprar), 0);

	return (
		<div style={styles.container}>

			<div>
				{cartItems.length === 0 ? <h3>No hay items para mostrar. Vaya a la galeria para <Link to='/'>comprar</Link></h3> 
				: cartItems.map((item) => {
					return <p>Item: {item.title} Precio: {item.price} Cantidad: {item.comprar}</p>
				})}
				{cartItems.length ===0 ? null : <h3>Precio Total: {total.toFixed(2)}</h3>}
				
			</div>
			
			

			<div>
				<CartList />
			</div>
			
			
		</div>
	);
};

export default Cart;