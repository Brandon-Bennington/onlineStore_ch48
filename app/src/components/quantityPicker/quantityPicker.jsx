import React, { useState } from 'react';
import "./quantityPicker.css";

function QuantityPicker({ onChange }) {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange(newQuantity);
        }
    }

    function increase() {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onChange(newQuantity);
    }

    return (
        <div className="qt-picker">
            <button disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;
