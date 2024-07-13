import { useState } from 'react';
import DataContext from './dataContext'; 

function GlobalProvider(props) {
    const [cart, setCart] = useState([]); 
    const [user, setUser] = useState({});

    function addProductToCart(){

    }

    function resetCart(){

    }
    
    return (
        <DataContext.Provider value={{
            cart: cart, 
            user: user, 
            addProductToCart: addProductToCart,
            resetCart: resetCart, 
        }}> 
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalProvider; 