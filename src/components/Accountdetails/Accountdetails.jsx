//section for utilities
import React, {useState, useEffect} from 'react';
import '../Accountspage/Accountspage.css';

//section for components
import { FaEdit } from "react-icons/fa";


function Accountdetails(props) {
  
    return (
    <div className='detailspane'>

        <div className="contdeets">
          <img src={props.ac.avatar} alt="profile pic" />
          <div  className='namepicds'>
          <h4>Business Name</h4>
          <p>{props.ac.name}</p>
          </div>
          <div  className='namepicds'>
          <h4>Industry type</h4>
          <p>{props.ac.industryType}</p>
          </div>
        </div>

        <div className="contdeets">
          <div  className='namepicds'>
          <h4>Location</h4>
          <p>{props.ac.location}</p>
          </div>
          <div  className='namepicds'>
          <h4>Email</h4>
          <p>{props.ac.email}</p>
          </div>
          <div  className='namepicds'>
          <h4>Telephone</h4>
          <p>{props.ac.telephone}</p>
          </div>
        </div>

        <div className="contdeets">
          <div  className='namepicds'>
          <h4>Number of Employees</h4>
          <p>{props.ac.employees}</p>
          </div>
          <div  className='namepicds'>
          <h4>TimeZone</h4>
          <p>{props.ac.timezone}</p>
          </div>
          <div  className='namepicds'>
          <h4>Yearly Revenue</h4>
          <p>{props.ac.revenue}</p>
          </div>
          <div  className='namepicds'>
          <h4>Contacts</h4>
          <p>{props.ac.contacts}</p>
          </div>
          <div  className='namepicds'>
          <h4>Deals</h4>
          <p>{props.ac.deals}</p>
          </div>
        </div>

        <FaEdit onClick={ () => props.handleDisplayState('edit')} className='ceitem' ce={props.ac._id} />
     
    </div>
  )
}

export default Accountdetails
