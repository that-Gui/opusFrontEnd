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

    <div className='detailspane'>

        <form onSubmit={handleSubmit}>
        <div className="triggered">
         
         <div className="form-col">
         <div className="form-box">
        <label htmlFor="name">Deal</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="closeDate">CloseDate</label>
        <input type="text" onChange={(e) => setCloseDate(e.target.value)} />
        </div>
        </div>

        <div className="form-col">
         <div className="form-box">
        <label htmlFor="sum">Total Sum</label>
        <input type="number" onChange={(e) => setSum(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="stages">Stage</label>
        <input type="text" onChange={(e) => setStages(e.target.value)} />
        </div>
        </div>

        </div>

        <button type="submit" className='ceitem'><FaCheckSquare className='ceitem' /></button>
        </form>

    </div>
  )
}

export default Dealscreate