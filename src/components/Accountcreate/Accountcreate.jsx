import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Accountspage/Accountspage.css';

//import section for components
import { FaCheckSquare } from "react-icons/fa";

function Accountcreate(props) {
      
    const [name, setName] = useState('');
    const [industryType, setIndustryType] = useState('');
    const [email, setEmail] = useState(0);
    const [telephone, setTelephone] = useState('');

    const storedToken = localStorage.getItem('authToken');

    const handleSubmit = (e) => {
      e.preventDefault();
    const body = {name, industryType, email, telephone}
    axios.post(`${process.env.REACT_APP_API_URL}/api/account/`, body, {headers: { Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
          props.rac();
          props.handleDisplayState('details');
        })
        .catch((err) => console.log(err));
    };

        
  return (
    <div className='detailspane'>

        <form onSubmit={handleSubmit}>
        <div className="triggered">
         
        <div className="form-col">
        <div className="form-box">
        <label htmlFor="name">Company Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="industryType">Industry Sector</label>
        <input type="text" onChange={(e) => setIndustryType(e.target.value)} />
        </div>
        </div>

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-box">

        <label htmlFor="telephone">Telephone</label>
        <input type="number" onChange={(e) => setTelephone(e.target.value)} />
        </div>
        </div>
        </div>


        <button type="submit" className='ceitem'><FaCheckSquare className='ceitem' /></button>
        </form>

       
    </div>
  )
}

export default Accountcreate