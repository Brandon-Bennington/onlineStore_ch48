import React, { useState, useContext } from 'react'; 
import "./product.css";
import QuantityPicker from "../quantityPicker/quantityPicker";
import DataContext from "../../state/dataContext"; // Import your DataContext

function Product(props) { 
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart;

    function add() {
        // obj that contains all info + quantity
        let piq = {
            ...props.info, 
            quantity: quantity
        }
        addProductToCart(piq); 
    }

    function handleQuantityChange(newQuantity) {
        console.log("Quantity changed to:", newQuantity);
        setQuantity(newQuantity);
    }

    function getTotal() {
        let total = props.info.price * quantity;
        return total.toFixed(2);
    }
    
    return (
        <div className="product">
            <img src={"/images/" + props.info.image} alt={props.info.title} />
            <h5>{props.info.title}</h5>
            <label>Price: ${props.info.price.toFixed(2)}</label>
            <div className="controls">
                <QuantityPicker onChange={handleQuantityChange} />
                <div className="product-footer">
                    <button onClick={add} className="btn">Add</button>
                    <label className="total">Total: ${getTotal()}</label>
                </div>
            </div>
        </div>
    );
}

export default Product;


