//section for utilities
import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import '../Contactslist/Contactslist.css'
//section for components
import Contactdetails from '../Contactdetails/Contactdetails';


function Contactslist() {
  const [contact, setcontact] = useState([])

  const fetchContacts = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setcontact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

    return (
    <div>
        {contact.map( (element) =>
            <div className="listcard" key={contact._id}>
              <Link to={`api/contact/${element._id}`}>
              <h5>{element.firstName} {element.lastName}</h5>
              <p>{element.accounts}</p>
              <p>{element.jobTitle}</p>    
              
              </Link>
            </div>
        )}
    </div>
  )
}

export default Contactslist