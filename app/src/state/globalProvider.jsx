import { useState } from 'react';
import DataContext from './dataContext'; 

function GlobalProvider(props) {
    const [cart, setCart] = useState([]); 
    const [user, setUser] = useState({ name: "Brandon" });

    function addProductToCart(product){
        console.log('Global fn');
        let copy = [...cart]; 

        let found = false;
        for(let i=0; i < copy.length; i++) {
            let prod = copy[i];

            if(prod._id == product._id) {
                prod.quantity += product.quantity;
                found = true;  
            }
        }
        if(!found) {
            copy.push(product);
    }
    setCart(copy);
    }

    function resetCart(){
        setCart([]);
    }

    function removeProductFromCart(productToRemove) {
        setCart(cart.filter(product => product._id !== productToRemove._id));
    }
    
    return (
        <DataContext.Provider value={{
            cart: cart, 
            user: user, 
            addProductToCart: addProductToCart,
            resetCart: resetCart,
            removeProductFromCart: removeProductFromCart
        }}> 
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalProvider;