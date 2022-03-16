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

    <div>

        <FaEraser className='ceitem' onClick={deleteDeal}/>
        <hr />
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="closeDate">closeDate</label>
        <input type="text" value={closeDate} onChange={(e) => setCloseDate(e.target.value)} />

        <label htmlFor="sum">sum</label>
        <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} />

        <label htmlFor="stages">stages</label>
        <input type="text" value={stages} onChange={(e) => setStages(e.target.value)} />

        <label htmlFor="notes">notes</label>
        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />

        <label htmlFor="products">products</label>
        <input type="text" value={products} onChange={(e) => setProducts(e.target.value)} />

        <label htmlFor="contacts">contacts</label>
        <input type="text" value={contacts} onChange={(e) => setContacts(e.target.value)} />

        <label htmlFor="accounts">accounts</label>
        <input type="text" value={accounts} onChange={(e) => setAccounts(e.target.value)} />

        <button type="submit"><FaCheckSquare /></button>
        </form>
       
    </div>
  )
}

export default Dealsedit

