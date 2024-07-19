import React, { useContext } from 'react';
import './cart.css';
import DataContext from '../../state/dataContext.jsx';

function Cart() {
    const { cart, removeProductFromCart } = useContext(DataContext);

    const calculateTotal = () => {
        return cart.reduce((total, prod) => total + prod.price * prod.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Your Cart Is Ready!</h1>

            <div className="parent">
                <section className="list">
                    {cart.map((prod, index) => (
                        <div key={index} className="cart-prod">
                            <h5>{prod.title}</h5>
                            <label>${prod.price.toFixed(2)}</label>
                            <label>Quantity: {prod.quantity}</label>
                            <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
                            <button className="btn btn-sm btn-danger" onClick={() => removeProductFromCart(prod)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </section>

                <section className="menu">
                    <h3>Total</h3>
                    <h3>${calculateTotal()}</h3>
                    <hr />
                    <button className="btn btn-primary">Proceed to Payment</button>
                </section>
            </div>
        </div>
    );
}

export default Cart;
