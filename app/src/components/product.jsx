import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) { 
    return (
        <div className="product">

            <img src={"/images/" +props.info.image} alt="" />

            <h5>{props.info.title}</h5>

            <label>${props.info.price.toFixed(2)}</label>

            <QuantityPicker />
        </div>
    );
}

export default Product;