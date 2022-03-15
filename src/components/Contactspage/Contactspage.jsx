//utilities section
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Contactspage.css';
// components import section
import Contactslist from '../Contactslist/Contactslist';
import Contactdetails from '../Contactdetails/Contactdetails';


function Contactspage() {
  return (
    <div className='container'>
        <div className="contactslist">
            <Contactslist />
        </div>
        <div className="contactdetails">
            <h5>this is the contacts details section</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod odit vero a deleniti neque expedita ipsum voluptate, praesentium voluptatibus, culpa, laboriosam beatae perspiciatis? Nobis labore est recusandae alias quibusdam iure.</p>
        </div>
    </div>
  )
}

export default Contactspage