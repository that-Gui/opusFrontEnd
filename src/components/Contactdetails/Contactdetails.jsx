//section for utilities
import React, {useState, useEffect} from 'react';
import '../Contactspage/Contactspage.css';

//section for components
import { FaEdit } from "react-icons/fa";

import { FaEraser } from "react-icons/fa";



function Contactdetails(props) {
  
    return (
    <div className='detailspane'>
       {/* { { props.ac &&}  */}
        <img src={props.ac.avatar} alt="profile pic" />
        <h2>{props.ac.firstName}</h2>
        <p>{props.ac.lastName}</p>
        <p>{props.ac.email}</p>
        <p>{props.ac.telephone}</p>
        <p>{props.ac.jobTitle}</p>
        <p>{props.ac.timezone}</p>
        <p>{props.ac.location}</p>
        <hr />
        <p>{props.ac.accounts}</p>
        <p>{props.ac.deals}</p>
        <p>{props.ac.user}</p>
        <FaEdit className='topitem'/>
       {/*  } */}
    </div>
  )
}

export default Contactdetails