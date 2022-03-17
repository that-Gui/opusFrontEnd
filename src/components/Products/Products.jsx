//import section for utils
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css'
/*  section for importing components */


function Products() {

const [products, setProducts] = useState([]);

useEffect(() => {
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((response) =>{
      setProducts(response.data)}).catch((err) =>
        console.log(err));
}, []);


    return (
    <div className='container'>

        <div className="productgrid">
        {products && products.map((el) =>
        <div className='pcard'>
            <>
            <img src={el.image_url} alt="beerpic" />
            <h3>{el.name}</h3>
            <h5>{el.tagline}</h5>
            <p>Created by: {el.contributed_by}</p>
            </>
        </div>
        )}
        </div>

    </div>
  )
};

export default Products