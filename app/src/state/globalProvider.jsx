import { useState } from 'react';
import DataContext from './dataContext'; 

function GlobalProvider(props) {
    const [cart, setCart] = useState([]); 
    const [user, setUser] = useState({});

    function addProductToCart(product){
        console.log('Global fn');

        let copy = [...cart]; 
        copy.push(product); 
        setCart(copy);

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