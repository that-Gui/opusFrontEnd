//import section for utilities
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Dealspage/Dealspage.css';

//import section for components
import { FaEraser } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";


function Dealsedit(props) {
  
  const { ce } = props

  const [name, setName] = useState('');
  const [closeDate, setCloseDate] = useState('');
  const [sum, setSum] = useState('');
  const [stages, setStages] = useState('');
  const [notes, setNotes] = useState('');
  const [products, setProducts] = useState('');
  const [contacts, setContacts] = useState('');
  const [accounts, setAccounts] = useState('');


    const storedToken = localStorage.getItem('authToken');

    const deleteDeal = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/api/deal/${ce._id}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          }).then((response) => props.rac());
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    const body = { name, closeDate, sum, stages, notes, products, contacts, accounts }
    axios.put(`${process.env.REACT_APP_API_URL}/api/deal/${ce._id}`, body, {headers: { Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
          props.rac();
          props.handleDisplayState('details');
        })
        .catch((err) => console.log(err));
    };


    useEffect(() => {
        setName(ce.name);
        setCloseDate(ce.closeDate);
        setSum(ce.sum);
        setStages(ce.stages);
        setNotes(ce.notes);
        setProducts(ce.products);
        setContacts(ce.contacts);
        setAccounts(ce.accounts);
    }, [ce])
      
    return (

    <div className='detailspane'>

        <FaEraser className='ceitem' onClick={deleteDeal}/>
        
        <form onSubmit={handleSubmit}>
        
        <div className="triggered">
         
        <div className="form-col">
        <div className="form-box">
        <label htmlFor="name">Deal</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="closeDate">CloseDate</label>
        <input type="text" value={closeDate} onChange={(e) => setCloseDate(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="sum">Total Sum</label>
        <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} />
        </div>
        </div>

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="stages">Stage</label>
        <input type="text" value={stages} onChange={(e) => setStages(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="notes">Notes</label>
        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="products">Products</label>
        <input type="text" value={products} onChange={(e) => setProducts(e.target.value)} />
        </div>
        </div>

        <div className="form-col">
        <div className="form-box">
        <label htmlFor="contacts">Contacts</label>
        <input type="text" value={contacts} onChange={(e) => setContacts(e.target.value)} />
        </div>
        <div className="form-box">
        <label htmlFor="accounts">Account</label>
        <input type="text" value={accounts} onChange={(e) => setAccounts(e.target.value)} />
        </div>
        </div>

        </div>
        <button type="submit" className='ceitem'><FaCheckSquare className='ceitem' /></button>
        </form>

   
    </div>
  )
}

export default Dealsedit

