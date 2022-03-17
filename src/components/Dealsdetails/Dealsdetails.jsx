//section for utilities
import React, {useState, useEffect} from 'react';
import '../Dealspage/Dealspage.css';

//section for components
import { FaEdit } from "react-icons/fa";


function Dealsdetails(props) {
  
    return (
        
    <div className='detailspane'>

        <div className="contdeets">
        <div  className='namepicds'>
          <h4>Name</h4>
          <h2>{props.ac.name}</h2>
          </div>
        <div  className='namepicds'>
          <h4>CloseDate</h4>
          <p>{props.ac.closeDate}</p>
          </div>
        <div  className='namepicds'>
          <h4>Total Sum</h4>
          <p>{props.ac.sum}</p>
          </div>
        </div>

        <div className="contdeets">
          <div  className='namepicds'>
          <h4>Stage</h4>
          <p>{props.ac.stages}</p>
          </div>
        <div  className='namepicds'>
          <h4>Contacts</h4>
          <p>{props.ac.contacts}</p>
          </div>
        <div  className='namepicds'>
          <h4>Account</h4>
          <p>{props.ac.accounts}</p>
          </div>
        </div>

        <div className="contdeets">
          <div  className='namepicds'>
          <h4>Notes</h4>
          <p>{props.ac.notes}</p>
          </div>
        </div>

        <div className="contdeets">
          <div  className='namepicds'>
          <h4>Products</h4>
          <p>{props.ac.products}</p>
          </div>
        </div>

        <FaEdit onClick={ () => props.handleDisplayState('edit')} className='ceitem' ce={props.ac._id} />
     
    </div>
  )
}

export default Dealsdetails