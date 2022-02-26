import React, {createContext, useState} from 'react';

export const CartContext = createContext();

//State inicial
const initialCartState = [];

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(initialCartState);
    const [contador, setContador] = useState(0);

    const addNewItem = (id, title, price, description, category, image, rating) => {
        const foundItem = cartItems.find(
            (item) => item.id === id
        );

        if(foundItem){
            foundItem.comprar += contador;
        } else {
            cartItems.push({id: id, title: title, price: price, description: description, category: category, image: image, rating: rating, comprar: contador});
        }

        setCartItems([...cartItems]);
        console.log(`El nuevo cartItem es: ${cartItems[0].comprar}`);
    }

    const cantComprar = () => {
        cartItems.reduce((acum, valor) => acum + valor.comprar, 0);
    };

    const cantContador = (val) => {
        setContador(val);
    }

    const deleteItem = (id) => {
        const updatedItems = cartItems.filter(
            (item) => item.id !== id
        );

        setCartItems(updatedItems);
    }

    const clearCart = () => {
        setCartItems([]);
    }


    return (
        <CartContext.Provider value={[cartItems, setCartItems, addNewItem, cantComprar, cantContador, deleteItem, clearCart]} >
            {children}
        </CartContext.Provider>
    );
};

