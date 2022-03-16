//import section for utilities
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Contactspage/Contactspage.css';

//import section for components
import { FaEraser } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";


function Contactedit(props) {
  
  const { ce } = props

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [timezone, setTimezone] = useState('');
  const [location, setLocation] = useState('');


    const storedToken = localStorage.getItem('authToken');

    const navigate = useNavigate();

    const deleteContact = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/api/contact/${ce._id}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          }).then((response) => props.rac());
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    const body = {firstName, lastName, email, telephone, jobTitle, timezone, location }
    axios.put(`${process.env.REACT_APP_API_URL}/api/contact/${ce._id}`, body, {headers: { Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
          /* setFirstName('');
          setLastName('');
          setEmail('');
          setTelephone(0);
          setJobTitle('');
          setTimezone('');
          setLocation(''); */
          props.rac();
          props.handleDisplayState('details');
        })
        .catch((err) => console.log(err));
    };


    useEffect(() => {
      setFirstName(ce.firstName);
      setLastName(ce.lastName);
      setEmail(ce.email);
      setTelephone(ce.telephone);
      setJobTitle(ce.jobTitle);
      setTimezone(ce.timezone);
      setLocation(ce.location);
    }, [ce])
      
    return (

    <div>

        <FaEraser className='ceitem' onClick={deleteContact}/>
        <hr />
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">lastName</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="email">email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="telephone">telephone</label>
        <input type="number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />

        <label htmlFor="jobTitle">jobTitle</label>
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />

        <label htmlFor="timezone">timezone</label>
        <input type="text" value={timezone} onChange={(e) => setTimezone(e.target.value)} />

        <label htmlFor="location">location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

        <button type="submit"><FaCheckSquare /></button>
        </form>

        {/* <p>{contact.accounts}</p>
        <p>{contact.deals}</p>
        <p>{contact.user}</p> */}
        
       
    </div>
  )
}

export default Contactedit