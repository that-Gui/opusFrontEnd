/* //import section for utilities
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Profile/Profile.css'

//import section for components
import { FaEraser } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";


function Profile() {

    const [prof, setprof] = useState([])
    const [editprof, setEditprof] = useState(null)

    const flip2edit = (prof) => {
        setEditprof(prof);
      };
    
      const fetchContacts = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
    
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          console.log(response.data);
          setprof(response.data);
          setEditprof(response.data[0]);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchContacts();
      }, []);
  
  
    return (
    <div className='container'>

        <div className='prof'>
        <h1>this is the profile page main component</h1>
        </div>

    </div>
  )
}

export default Profile */