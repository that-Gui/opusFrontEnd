//import section for utilities
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

//import section for components
import { FaAddressBook } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { FaDev } from "react-icons/fa";



function Navbar() {
  return (
    <div className='nav'>
       
           <FaDev className='navlogo'/>
           <NavLink className='navitem' activeClassName="active" to="/"><FaCube /></NavLink>
           <NavLink className='navitem' activeClassName="active" to="/contacts"><FaAddressBook /></NavLink>
           <NavLink className='navitem' activeClassName="active" to="/accounts"><FaBuilding /></NavLink>
           <NavLink className='navitem' activeClassName="active" to="/deals"><FaBriefcase /></NavLink>
    
    </div>
  )
}

export default Navbar