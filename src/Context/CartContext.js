import React, {createContext, useState} from 'react';

export const CartContext = createContext();

//State inicial
const initialCartState = 0;

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(initialCartState);


    return (
        <CartContext.Provider value={[cartItems, setCartItems]} >
            {children}
        </CartContext.Provider>
    );
};

