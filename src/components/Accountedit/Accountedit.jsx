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

    <div className='detailspane'>

        <FaEraser className='ceitem' onClick={deleteContact}/>
      
        <form onSubmit={handleSubmit}>

        <div className="triggered">

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="name">Business Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="industryType">Industry Sector</label>
        <input type="text" value={industryType} onChange={(e) => setIndustryType(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="timezone">Timezone</label>
        <input type="text" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
        </div>
        </div>

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="location">Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="telephone">Telephone</label>
        <input type="number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </div>
        </div>

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="employees">Number of Employees</label>
        <input type="text" value={employees} onChange={(e) => setEmployees(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="revenue">Yearly Revenue</label>
        <input type="text" value={revenue} onChange={(e) => setRevenue(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="contacts">Contacts</label>
        <input type="text" value={contacts} onChange={(e) => setContacts(e.target.value)} />
        </div>
        </div>

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="deals">Deals</label>
        <input type="text" value={deals} onChange={(e) => setDeals(e.target.value)} />
        </div>
        </div>

        </div>
        <button type="submit" className='ceitem'><FaCheckSquare className='ceitem'/></button>
        </form>
       
    </div>
  )
}

export default Accountedit