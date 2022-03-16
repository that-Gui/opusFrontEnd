import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Contactspage/Contactspage.css';

//import section for components
import { FaCheckSquare } from "react-icons/fa";

function Contactcreate() {
      
    const [firstName, setFirstName] = useState('');
    /* const [lastName, setLastName] = useState(''); */
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState(0);
    /* const [jobTitle, setJobTitle] = useState(''); */
    /* const [timezone, setTimezone] = useState(''); */
    const [location, setLocation] = useState('');

// this is what the back end is expecting to receive firstName, email, telephone, location, user: _id

    const storedToken = localStorage.getItem('authToken');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
    const body = {firstName, /* lastName, */ email, telephone, /* jobTitle, timezone, */ location }
    axios.post(`${process.env.REACT_APP_API_URL}/api/contact/`, body, {headers: { Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
          setFirstName('');
          /* setLastName(''); */
          setEmail('');
          setTelephone(0);
          /* setJobTitle('');
          setTimezone(''); */
          setLocation('');
          navigate('/contacts');
        })
        .catch((err) => console.log(err));
    };

        
  return (
    <div>

        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />

        {/* <label htmlFor="lastName">lastName</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} /> */}

        <label htmlFor="email">email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="telephone">telephone</label>
        <input type="number" onChange={(e) => setTelephone(e.target.value)} />

        {/* <label htmlFor="jobTitle">jobTitle</label>
        <input type="text" onChange={(e) => setJobTitle(e.target.value)} />

        <label htmlFor="timezone">timezone</label>
        <input type="text" onChange={(e) => setTimezone(e.target.value)} /> */}

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

export default Contactcreate