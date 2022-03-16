//utilities section
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Accountspage.css';
// components import section
import Accountslist from '../Accountslist/Accountslist';
import { FaPlusSquare } from "react-icons/fa";
import Accountdetails from '../Accountdetails/Accountdetails';
import Accountedit from '../Accountedit/Accountedit';
import Accountcreate from '../Accountcreate/Accountcreate';

function Accountspage() {

  const [account, setAccount] = useState([])
  const [actaccount, setActaccount] = useState(null)
  const [display, setDisplay] = useState('details')

  const changeact = (account) => {
    setActaccount(account);
  };

  const fetchAccounts = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/account`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log(response.data);
      setAccount(response.data);
      setActaccount(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisplayState = (display) => setDisplay(display);

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className='container'>
       
        <div className="contactslist">
          < FaPlusSquare className='addc' onClick={() => handleDisplayState('create')}/>
          { account && <Accountslist ct={account} act={changeact} handleDisplayState={handleDisplayState}/>}
        </div>

        <div className="contactdetails">
            { (actaccount && (display === 'details')) && <Accountdetails ac={actaccount} handleDisplayState={handleDisplayState} /> }
            { (actaccount && (display === 'edit')) && <Accountedit ce={actaccount} rac={fetchAccounts} handleDisplayState={handleDisplayState} /> }
            { /* (actcontact && ( */display === 'create'/* )) */  && <Accountcreate rac={fetchAccounts} handleDisplayState={handleDisplayState} />}
        </div>
        
    </div>
  )
}

export default Accountspage
