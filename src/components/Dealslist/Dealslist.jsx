//section for utilities
import React, {useState, useEffect} from 'react';
import '../Dealspage/Dealspage.css';
//section for components



function Dealslist(props) {
  
    return (

    <div className=''>

        {props.ct.map( (element) =>
            <div className="listcard" key={element._id} onClick={ () => {
              props.act(element)
              props.handleDisplayState('details');
              }}>
              <h5>{element.name}</h5>
              <p>{element.closeDate}</p>
              <p>{element.sum}</p>
            </div>
        )}

    </div>
  )
}

export default Dealslist
