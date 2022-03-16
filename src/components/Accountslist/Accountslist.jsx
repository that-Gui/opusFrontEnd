//section for utilities
import React, {useState, useEffect} from 'react';
import '../Accountspage/Accountspage.css';
//section for components



function Accountslist(props) {
  
    return (
    <div className=''>
        {props.ct.map( (element) =>
            <div className="listcard" key={element._id} onClick={ () => {
              props.act(element)
              props.handleDisplayState('details');
              }}>
              <h5>{element.name}</h5>
              <p>{element.industryType}</p>
              <p>{element.telephone}</p>  

            </div>
        )}
    </div>
  )
}

export default Accountslist