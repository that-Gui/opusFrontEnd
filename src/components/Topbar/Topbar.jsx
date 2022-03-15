//import section for utilities
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Topbar.css';

//import section for components
import { FaUser } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";


function Topbar() {
  return (
    
    <div className='topbar'>
        
        <Link className='topitem' to='/profile'><FaUser /></Link>
        <Link className='topitem' to='/signup'><FaSignature /></Link>
        <Link className='topitem' to='/login'><FaSignInAlt /></Link>
        <Link className='topitem' to='/logout'><FaSignOutAlt /></Link>
        {/* <NavLink className='navitem' activeClassName="active" to="/contacts"><FaAddressBook /></NavLink> */}
    </div>
    
  )
}

export default Topbar