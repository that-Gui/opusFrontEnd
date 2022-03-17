//section for utilities
import React, {useState, useEffect} from 'react';
import '../Contactspage/Contactspage.css';
//section for components



function Contactslist(props) {
  
    return (
    <div>
        {props.ct.map( (element) =>
            <div className="listcard" key={element._id} onClick={ () => {
              props.act(element)
              props.handleDisplayState('details');
              }}>
                <div className="form-col">
           
              <h4>{element.firstName} {element.lastName}</h4>
              </div>
            
              <div className="form-col">
              
              <p>{element.accounts}</p>
              <p>{element.jobTitle}</p>
              </div>
             
              {/* <button onClick={ () => props.act(element)}>lkdjfklsjdfhjfgkjdhfgkj</button>  */} 
            </div>
        )}
    </div>
  )
}

export default Contactslist