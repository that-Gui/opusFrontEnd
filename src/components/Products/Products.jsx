//section for utilities import
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import section for components



function Products() {

    const [products, setProducts] = useState([]);

useEffect(() => {
    
    axios.get(``).then((response) =>{
        setProducts(response.data)}).catch((err) =>
        console.log(err));
}, []);
  
  return (
    <div className='container'>

        <div className="prodgrid">
            <h1>this will be the products grid components</h1>
            {products && products.map((el) =>
            <div className='prodcard'>
            <Link to={`/beers/${el._id}`}>
            <img src={el.image_url} alt="beerpic" />
            <h3>{el.name}</h3>
            <h5>{el.tagline}</h5>
            <p>Created by: {el.contributed_by}</p>
            </Link>
            </div>
            )} 
        </div>

    </div>
  )
}

export default Products