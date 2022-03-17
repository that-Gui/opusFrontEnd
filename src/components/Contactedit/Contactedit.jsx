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

    <div className='detailspane'>

        <FaEraser className='ceitem' onClick={deleteContact}/>
       
        <form onSubmit={handleSubmit}>
      <div className="triggered"> 
        <div className="form-col">
          <div className="form-box">
          <label htmlFor="firstName">First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-box">
          <label htmlFor="lastName">Surname</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        
        <div className="form-col">
          <div className="form-box">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-box">
          <label htmlFor="telephone">Telephone</label>
          <input type="number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
          </div>
          <div className="form-box">
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </div>
        </div>

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="timezone">Timezone</label>
        <input type="text" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="location">Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        </div>
        </div>
        <button type="submit" className='ceitem'><FaCheckSquare className='ceitem'/></button>
        </form>

        {/* <p>{contact.accounts}</p>
        <p>{contact.deals}</p>
        <p>{contact.user}</p> */}
        
       
    </div>
  )
}

export default Contactedit