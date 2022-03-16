//section for utilities
import React, {useState, useEffect} from 'react';
import '../Contactspage/Contactspage.css';
//section for components



function Contactslist(props) {
  
    return (
    <div className=''>
        {props.ct.map( (element) =>
            <div className="listcard" key={element._id} onClick={ () => {
              props.act(element)
              props.handleDisplayState('details');
              }}>
              <h5>{element.firstName} {element.lastName}</h5>
              <p>{element.accounts}</p>
              <p>{element.jobTitle}</p>  
              {/* <button onClick={ () => props.act(element)}>lkdjfklsjdfhjfgkjdhfgkj</button>  */} 
            </div>
        )}
    </div>
  )
}

export default Contactslist