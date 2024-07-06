import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) { 

    function add() {
        console.log("adding + props.info.title");
    }

    return (
        <div className="product">

            <img src={"/images/" +props.info.image} alt="" />

            <h5>{props.info.title}</h5>

            <label>${props.info.price.toFixed(2)}</label>

            <div className="controls">
                <QuantityPicker />
                <button onClick={(add)} className="btn">Add</button>
            </div>

        </div>
    );
}

export default Product;