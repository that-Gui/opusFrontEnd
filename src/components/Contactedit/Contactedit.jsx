//import section for utilities
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Contactspage/Contactspage.css';

//import section for components
import { FaEraser } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";


function Contactedit(props) {
    const [firstName, setfirstName] = useState(" ");
    const [lastName, setlastName] = useState(" ");



    const storedToken = localStorage.getItem('authToken');

    const navigate = useNavigate();

    const deleteContact = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/api/contact/${props.ce._id}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          }).then((response) => navigate('/contacts'));
    };

  

  const handleSubmit = (e) => {
      
    e.preventDefault();

    /* const body = { firstName, lastName }; */

    axios.put(`${process.env.REACT_APP_API_URL}/projects/${props.ce._id}`, { firstName, lastName })
      .then((response) => {
        navigate(`/contacts`);
      })
      .catch((err) => console.log(err));
  };
  
      
    return (

    <div>

        <FaEraser className='ceitem' onClick={deleteContact}/>
        <hr />
        
        <form onSubmit={handleSubmit}>

        <input type="text" name="firstName" value={props.ce.firstName} onChange={(e) => setfirstName(e.target.value)} />
        <input type="text" name="lastName" value={props.ce.lastName} onChange={(e) => setlastName(e.target.value)} />

       {/*  firstName: {type: String, default: ' '},
    lastName: {type: String, default: ' '},
    email: {type: String, default: ' '},
    telephone: {type: Number, default: ' '},
    jobTitle: {type: String, default: ' '},
    timezone: {type: String, default: ' '},
    location: {type: String, default: ' '}, */}

        {/* <p>{contact.accounts}</p>
        <p>{contact.deals}</p>
        <p>{contact.user}</p> */}
        
        <button type="submit"><FaCheckSquare className='ceitem' /></button>
      </form>
        
    </div>
  )
}

export default Contactedit