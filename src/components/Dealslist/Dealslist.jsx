//section for utilities
import React, {useState, useEffect} from 'react';
import '../Dealspage/Dealspage.css';
//section for components



function Dealslist(props) {
  
    return (

    <div>

        {props.ct.map( (element) =>
            <div className="listcard" key={element._id} onClick={ () => {
              props.act(element)
              props.handleDisplayState('details');
              }}>
                <div className="form-col">

              <h5>{element.name}</h5>
              </div>
              <div className="form-col">
               
              <p>{element.closeDate}</p>
             {/*  <p>{element.sum}</p> */}
              </div>

            </div>
        )}

    </div>
  )
}

export default Dealslist
