//import section for utilities
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Contactspage/Contactspage.css';

//import section for components
import { FaEraser } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";


function Contactedit(props) {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState(0);
  const [jobTitle, setJobTitle] = useState('');
  const [timezone, setTimezone] = useState('');
  const [location, setLocation] = useState('');


    const storedToken = localStorage.getItem('authToken');

    const navigate = useNavigate();

    const deleteContact = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/api/contact/${props.ce._id}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          }).then((response) => navigate('/contacts'));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    const body = {firstName, lastName, email, telephone, jobTitle, timezone, location }
    axios.put(`${process.env.REACT_APP_API_URL}/api/contact/${props.ce._id}`, body, {headers: { Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
          setFirstName('');
          setLastName('');
          setEmail('');
          setTelephone(0);
          setJobTitle('');
          setTimezone('');
          setLocation('');
          navigate('/contacts');
        })
        .catch((err) => console.log(err));
    };

      
    return (

    <div>

        <FaEraser className='ceitem' onClick={deleteContact}/>
        <hr />
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">lastName</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="email">email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="telephone">telephone</label>
        <input type="number" onChange={(e) => setTelephone(e.target.value)} />

        <label htmlFor="jobTitle">jobTitle</label>
        <input type="text" onChange={(e) => setJobTitle(e.target.value)} />

        <label htmlFor="timezone">timezone</label>
        <input type="text" onChange={(e) => setTimezone(e.target.value)} />

        <label htmlFor="location">location</label>
        <input type="text" onChange={(e) => setLocation(e.target.value)} />

        <button type="submit"><FaCheckSquare /></button>
        </form>

        {/* <p>{contact.accounts}</p>
        <p>{contact.deals}</p>
        <p>{contact.user}</p> */}
        
       
    </div>
  )
}

export default Contactedit