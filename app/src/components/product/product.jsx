import React, { useState } from 'react'; 
import "./product.css";
import QuantityPicker from "../quantityPicker/quantityPicker";

function Product(props) { 
    const [quantity, setQuantity] = useState(1);

    function add() {
        console.log("adding " + quantity + " " + props.info.title);
    }

    function handleQuantityChange(newQuantity) {
        console.log("Quantity changed to:", newQuantity);
        setQuantity(newQuantity);
    }

    const totalPrice = (props.info.price * quantity).toFixed(2);

    return (
        <div className="product">
            <img src={"/images/" + props.info.image} alt={props.info.title} />
            <h5>{props.info.title}</h5>
            <label>Price: ${props.info.price.toFixed(2)}</label>
            <div className="controls">
                <QuantityPicker onChange={handleQuantityChange} />
                <div className="product-footer">
                    <button onClick={add} className="btn">Add</button>
                    <label className="total">Total: ${totalPrice}</label>
                </div>
            </div>
        </div>
    );
}

export default Product;