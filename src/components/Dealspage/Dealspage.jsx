//utilities section
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Dealspage.css';
// components import section
import Dealslist from '../Dealslist/Dealslist';
import { FaPlusSquare } from "react-icons/fa";
import Dealsdetails from '../Dealsdetails/Dealsdetails';
import Dealsedit from '../Dealsedit/Dealsedit';
import Dealscreate from '../Dealscreate/Dealscreate';


function Dealspage() {

  const [deal, setDeal] = useState([])
  const [actdeal, setActdeal] = useState(null)
  const [display, setDisplay] = useState('details')

  const changeact = (deal) => {
    setActdeal(deal);
  };

  const fetchDeals = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/deal`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log(response.data);
      setDeal(response.data);
      setActdeal(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisplayState = (display) => setDisplay(display);

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <div className='container'>
       
        <div className="contactslist">
          < FaPlusSquare className='addc' onClick={() => handleDisplayState('create')}/>
          { deal && <Dealslist ct={deal} act={changeact} handleDisplayState={handleDisplayState}/>}
        </div>

        <div className="contactdetails">
            { (actdeal && (display === 'details')) && <Dealsdetails ac={actdeal} handleDisplayState={handleDisplayState} /> }
            { (actdeal && (display === 'edit')) && <Dealsedit ce={actdeal} rac={fetchDeals} handleDisplayState={handleDisplayState} /> }
            { display === 'create' && <Dealscreate rac={fetchDeals} handleDisplayState={handleDisplayState} />}
        </div>
        
    </div>
  )
}

export default Dealspage
