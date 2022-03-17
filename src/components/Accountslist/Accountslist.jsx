//section for utilities
import React, {useState, useEffect} from 'react';
import '../Accountspage/Accountspage.css';
//section for components



function Accountslist(props) {
  
    return (
    <div>
        {props.ct.map( (element) =>
            <div className="listcard" key={element._id} onClick={ () => {
              props.act(element)
              props.handleDisplayState('details');
              }}>
                <div className="form-col">

              <h4>{element.name}</h4>
              </div>
              <div className="form-col">

              <p>{element.industryType}</p>
              {/* <p>{element.telephone}</p> */}  
              </div>

            </div>
        )}
    </div>
  )
}

export default Accountslist