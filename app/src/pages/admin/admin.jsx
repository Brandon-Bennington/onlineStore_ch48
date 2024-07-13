import { useState } from 'react';
import './admin.css';

function Admin() {
    const [coupon, setCoupon] = useState({ //{}for objects 
        code: '', 
        discount: '',     
    }); 

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
    
    return (
        <div className="adminPage">
            <h1>Admin Page</h1>


            <div className="parent">
                <section className="sec-prods">
                    <h3>Products</h3>
                </section>

                <section className="sec-coupons">
                    <h3>Coupons</h3> 

                        <div className="form">
                            <label className="form-label">Code</label>
                            <input onBlur={handleCoupon} name="code" type="text" className="form-control" />
                        </div>

                        <div>
                            <label className="form-label">Discount</label>
                            <input onBlur={handleCoupon} typer="text" className="form-control" />
                        </div>

                        <button className="btn btn-primary">Save Coupon</button>
                </section>
            </div>    

        </div>
    )
}

export default Admin; 