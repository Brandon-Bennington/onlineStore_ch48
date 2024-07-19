import './catalog.css';
import Product from "../../components/product/product.jsx";
import { useEffect, useState } from 'react'; 
import dataService from '../../services/dataService.js';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    console.log("Catalog loaded!");

    const prods = dataService.getProducts(); 
    setProducts(prods);

    const cats = dataService.getCategories(); 
    setCategories(cats);

  }, []);

  return (
    <div className="catalog">
      <h1>Check out our amazing catalog!</h1>

      <div className="filters">
        {categories.map(cat => (
          <button key={cat} className="btn btn-sm btn-success">{cat}</button>
        ))}
      </div>

      {products.map(prod => (
        <Product key={prod._id} info={prod} />
      ))}

    </div>
  );
}

export default Catalog;





/*function Catalog() {
  return (
    <div className="catalog">
      <h1>Check out our amazing catalog!</h1>

      <div className="filters">
        {categories.map(cat => <button className="btn btn-sm btn-success">{cat}</button>)}
      </div>

      {data.map(prod => <Product info={prod} />)}



    </div>
  );
}

export default Catalog;
*/
