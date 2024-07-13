import { useState } from 'react';
import './admin.css';

function Admin() {
    const [product, setProduct] = useState({
        title: "",
        image: "", 
        price: "",
        category: "", 
    });


    const [coupon, setCoupon] = useState({ //{}for objects 
        code: '', 
        discount: '',     
    }); 

    function handleProduct(e) { 
        const { name, value } = e.target;

        // Create a copy and update the state
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }

    function handleCoupon(e) { //most common name for event is e 
        const text = e.target.value; // value of the field
        const name = e.target.name; // what input field changed? 

        //create a copy
        let copy = { ...coupon};
        //modify the copy
        copy[name] = text;
        //set the copy back 
        setCoupon(copy);
    }


    function saveCoupon() {
        console.log(coupon);
    }

    function saveProduct() {
        console.log(product);
    }
    
    return (
        <div className="adminPage">
            <h1>Admin Page</h1>


            <div className="parent">
                <section className="sec-prods">
                    <h3>Products</h3>
                    <div className="form">
                        <label className="form-label">Product</label>
                        <input onBlur={handleProduct} name="title" type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Image</label>
                        <input onBlur={handleProduct} name="image" type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Price</label>
                        <input onBlur={handleProduct} name="price" type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Category</label>
                        <input onBlur={handleProduct} name="category" type="text" className="form-control" />
                    </div>

                    <button onClick={saveProduct} className="btn btn-primary">Save Product</button>

                </section>

                <section className="sec-coupons">
                    <h3>Coupons</h3> 

                        <div className="form">
                            <label className="form-label">Code</label>
                            <input onBlur={handleCoupon} name="code" type="text" className="form-control" />
                        </div>

                        <div>
                            <label className="form-label">Discount</label>
                            <input onBlur={handleCoupon} name="discount" type="text" className="form-control" />
                        </div>

                        <button onClick={saveCoupon} className="btn btn-primary">Save Coupon</button>
                </section>
            </div>    

        </div>
    )
}

export default Admin; 