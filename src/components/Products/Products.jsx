//import section for utils
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

        {products && products.map((el) =>
        <div className='card-btn'>
            <Link to={`/beers/${el._id}`}>
            <img src={el.image_url} alt="beerpic" />
            <h3>{el.name}</h3>
            <h5>{el.tagline}</h5>
            <p>Created by: {el.contributed_by}</p>
            </Link>
        </div>
        )}

    </div>
  )
};

export default Products