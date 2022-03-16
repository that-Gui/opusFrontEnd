//section for utilities
import React, {useState, useEffect} from 'react';
import '../Accountspage/Accountspage.css';

//section for components
import { FaEdit } from "react-icons/fa";


function Accountdetails(props) {
  
    return (
    <div className='detailspane'>

        <img src={props.ac.avatar} alt="profile pic" />
        <h2>{props.ac.name}</h2>
        <p>{props.ac.industryType}</p>
        <p>{props.ac.timezone}</p>
        <p>{props.ac.location}</p>
        <p>{props.ac.email}</p>
        <p>{props.ac.telephone}</p>
        <p>{props.ac.employees}</p>
        <hr />
        <p>{props.ac.revenue}</p>
        <p>{props.ac.contacts}</p>
        <p>{props.ac.deals}</p>
        <FaEdit onClick={ () => props.handleDisplayState('edit')} className='ceitem' ce={props.ac._id} />
     
    </div>
  )
}

export default Accountdetails
