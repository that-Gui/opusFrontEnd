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
    <div>

        <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <label htmlFor="industryType">industryType</label>
        <input type="text" onChange={(e) => setIndustryType(e.target.value)} />

        <label htmlFor="email">email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="telephone">telephone</label>
        <input type="number" onChange={(e) => setTelephone(e.target.value)} />

        <button type="submit"><FaCheckSquare /></button>
        </form>

       
    </div>
  )
}

export default Accountcreate