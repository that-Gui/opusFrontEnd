//import section for utilities
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Accountspage/Accountspage.css';

//import section for components
import { FaEraser } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";


function Accountedit(props) {
  
  const { ce } = props

  const [name, setName] = useState('');
  const [industryType, setIndustryType] = useState('');
  const [timezone, setTimezone] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [employees, setEmployees] = useState('');
  const [revenue, setRevenue] = useState('');
  const [contacts, setContacts] = useState('');
  const [deals, setDeals] = useState('');




    const storedToken = localStorage.getItem('authToken');


    const deleteContact = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/api/account/${ce._id}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          }).then((response) => props.rac());
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    const body = {name, industryType, timezone, location, email, telephone, employees, revenue, contacts, deals }
    axios.put(`${process.env.REACT_APP_API_URL}/api/account/${ce._id}`, body, {headers: { Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
          props.rac();
          props.handleDisplayState('details');
        })
        .catch((err) => console.log(err));
    };


    useEffect(() => {
        setName(ce.name);
        setIndustryType(ce.industryType);
        setTimezone(ce.timezone);
        setLocation(ce.location);
        setEmail(ce.email);
        setTelephone(ce.telephone);
        setEmployees(ce.employees);
        setRevenue(ce.revenue);
        setContacts(ce.contacts);
        setDeals(ce.deals);
    }, [ce])
      
    return (

    <div>

        <FaEraser className='ceitem' onClick={deleteContact}/>
        <hr />
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="industryType">industryType</label>
        <input type="text" value={industryType} onChange={(e) => setIndustryType(e.target.value)} />

        <label htmlFor="timezone">timezone</label>
        <input type="text" value={timezone} onChange={(e) => setTimezone(e.target.value)} />

        <label htmlFor="location">location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

        <label htmlFor="email">email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="telephone">telephone</label>
        <input type="number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />

        <label htmlFor="employees">employees</label>
        <input type="text" value={employees} onChange={(e) => setEmployees(e.target.value)} />
        
        <label htmlFor="revenue">revenue</label>
        <input type="text" value={revenue} onChange={(e) => setRevenue(e.target.value)} />

        <label htmlFor="contacts">contacts</label>
        <input type="text" value={contacts} onChange={(e) => setContacts(e.target.value)} />

        <label htmlFor="deals">deals</label>
        <input type="text" value={deals} onChange={(e) => setDeals(e.target.value)} />

        <button type="submit"><FaCheckSquare /></button>
        </form>
       
    </div>
  )
}

export default Accountedit