//section for utilities
import React, {useState, useEffect} from 'react';
import '../Contactspage/Contactspage.css';

//section for components
import { FaEdit } from "react-icons/fa";


function Contactdetails(props) {
  
    return (

    <div className='detailspane'>

      <div className="namepic">
          <img src={props.ac.avatar} alt="profile pic" />
          <div className='namepicds'>
          <h4>Name</h4>
          <p>{props.ac.firstName}</p>
          </div>
          <div  className='namepicds'>
          <h4>Surname</h4>
          <p>{props.ac.lastName}</p>
          </div>
      </div>

      <div className="contdeets">
          <div  className='namepicds'>
          <h4>Email</h4>
          <p>{props.ac.email}</p>
          </div>
          <div  className='namepicds'>
          <h4>Phone Number</h4>
          <p>{props.ac.telephone}</p>
          </div>
          <div  className='namepicds'>
          <h4>Location</h4>
          <p>{props.ac.location}</p>
          </div>
      </div>

        
        <div className="contdeets">
          <div  className='namepicds'>
          <h4>Job Title</h4>
          <p>{props.ac.jobTitle}</p>
          </div>
          <div  className='namepicds'>
          <h4>Timezone</h4>
          <p>{props.ac.timezone}</p>
          </div>
          <div  className='namepicds'>
          <h4>Accounts</h4>
          <p>{props.ac.accounts}</p>
          </div>
          <div  className='namepicds'>
          <h4>Deals</h4>
          <p>{props.ac.deals}</p>
          </div>
         {/*  <h4>User</h4>
          <p>{props.ac.user}</p> */}
          
        </div>
        
        <FaEdit onClick={ () => props.handleDisplayState('edit')} className='ceitem' ce={props.ac._id} />
        

    </div>
  )
}

export default Contactdetails