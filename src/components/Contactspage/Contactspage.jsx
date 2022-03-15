//utilities section
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Contactspage.css';
// components import section
import Contactslist from '../Contactslist/Contactslist';
import Contactdetails from '../Contactdetails/Contactdetails';
import Contactedit from '../Contactedit/Contactedit';
import { FaPlusSquare } from "react-icons/fa";

function Contactspage() {

  const [contact, setcontact] = useState([])
  const [actcontact, setActcontact] = useState(null)
  /* const [edtcontact, setEdtcontact] = useState(null)

  const editc = (contact) => {
    setEdtcontact(contact);
  }; */

  const changeact = (contact) => {
    setActcontact(contact);
  };

  const fetchContacts = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log(response.data);
      setcontact(response.data);
      setActcontact(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className='container'>
       
        <div className="contactslist">
          < FaPlusSquare className='addc'/>
          { contact && <Contactslist ct={contact} act={changeact}/>}
        </div>

        <div className="contactdetails">
            { actcontact && <Contactdetails ac={actcontact} /> }
            {/* { edtcontact ? <Contactedit ce={edtcontact} /> : <Contactdetails ac={actcontact} ed={editc}/> } */}
        </div>
        
    </div>
  )
}

export default Contactspage