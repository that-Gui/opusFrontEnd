//import section for utilities
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import './Topbar.css';

//import section for components
/* import { FaUser } from "react-icons/fa"; */
import { FaSignature } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";


function Topbar() {
  
  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    
    <div className='topbar'>
        { loggedIn && <>
        {/* <Link className='topitem' to='/profile'><FaUser /></Link> */}
        <Link className='topitem' to='/logout' onClick={logoutUser}><FaSignOutAlt /></Link>
        </>}
        { !loggedIn && <>
        <Link className='topitem' to='/signup'><FaSignature /></Link>
        <Link className='topitem' to='/login'><FaSignInAlt /></Link>
        </>}
        {/* <NavLink className='navitem' activeClassName="active" to="/contacts"><FaAddressBook /></NavLink> */}
    </div>
    
  )
}

export default Topbar