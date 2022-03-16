//section for utilities
import React, {useState, useEffect} from 'react';
import '../Dealspage/Dealspage.css';

//section for components
import { FaEdit } from "react-icons/fa";


function Dealsdetails(props) {
  
    return (
        
    <div className='detailspane'>

        <h2>{props.ac.name}</h2>
        <p>{props.ac.closeDate}</p>
        <p>{props.ac.sum}</p>
        <p>{props.ac.stages}</p>
        <p>{props.ac.notes}</p>
        <p>{props.ac.products}</p>
        <hr />
        <p>{props.ac.contacts}</p>
        <p>{props.ac.accounts}</p>
        <FaEdit onClick={ () => props.handleDisplayState('edit')} className='ceitem' ce={props.ac._id} />
     
    </div>
  )
}

export default Dealsdetails