//import section for utilities
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Topbar.css';

//import section for components
import { FaUser } from "react-icons/fa";


function Topbar() {
  return (
    
    <div className='topbar'>
        
        <Link className='topitem' to='/'><FaUser /></Link>
        {/* <NavLink className='navitem' activeClassName="active" to="/contacts"><FaAddressBook /></NavLink> */}
    </div>
    
  )
}

export default Topbar