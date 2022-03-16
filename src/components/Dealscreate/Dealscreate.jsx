import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Dealspage/Dealspage.css';

//import section for components
import { FaCheckSquare } from "react-icons/fa";

function Dealscreate(props) {
      
    const [name, setName] = useState('');
    const [closeDate, setCloseDate] = useState('');
    const [sum, setSum] = useState(0);
    const [stages, setStages] = useState('');


    const storedToken = localStorage.getItem('authToken');

    const handleSubmit = (e) => {
      e.preventDefault();
    const body = { name, closeDate, sum, stages }
    axios.post(`${process.env.REACT_APP_API_URL}/api/deal/`, body, {headers: { Authorization: `Bearer ${storedToken}`}})
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

        <label htmlFor="closeDate">closeDate</label>
        <input type="text" onChange={(e) => setCloseDate(e.target.value)} />

        <label htmlFor="sum">sum</label>
        <input type="number" onChange={(e) => setSum(e.target.value)} />

        <label htmlFor="stages">stages</label>
        <input type="text" onChange={(e) => setStages(e.target.value)} />

        <button type="submit"><FaCheckSquare /></button>
        </form>

    </div>
  )
}

export default Dealscreate