//section for utilities
import React, {useState, useEffect} from 'react';
import '../Contactspage/Contactspage.css';

//section for components
import { FaEdit } from "react-icons/fa";


function Contactdetails(props) {
  
    return (
    <div className='detailspane'>
      <div className="contact">
        <img src={props.ac.avatar} alt="profile pic" />
        <div className="contdeets">
          <h4>Job Title</h4>
          <p>{props.ac.jobTitle}</p>
          <h4>Email</h4>
          <p>{props.ac.email}</p>
          <h4>Tel</h4>
          <p>{props.ac.telephone}</p>
        </div>

          <div className="namesec">
          <h2>{props.ac.firstName}</h2>
          <p>{props.ac.lastName}</p>
          </div>
        </div>
        <div className="detailsbox">
          
          <div className="contact-info">
          <h4>Timezone</h4>
          <p>{props.ac.timezone}</p>
          <h4>Location</h4>
          <p>{props.ac.location}</p>
          <h4>Accounts</h4>
          <p>{props.ac.accounts}</p>
          <h4>Deals</h4>
          <p>{props.ac.deals}</p>
          <h4>User</h4>
          <p>{props.ac.user}</p>
          </div>
        </div>
        <div className="edit-btn">
        <FaEdit onClick={ () => props.handleDisplayState('edit')} className='ceitem' ce={props.ac._id} />
        </div>
    </div>
  )
}

export default Contactdetails