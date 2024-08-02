import React, { createContext, useState } from 'react';

const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    resetCart: () => {},
    removeProductFromCart: () => {},
});

export const DataProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const addProductToCart = (product) => {
        setCart([...cart, product]);
    };

    const resetCart = () => {
        setCart([]);
    };

    const removeProductFromCart = (productToRemove) => {
        setCart(cart.filter(product => product._id !== productToRemove._id));
    };

    return (
        <DataContext.Provider value={{ cart, user, addProductToCart, resetCart, removeProductFromCart }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
