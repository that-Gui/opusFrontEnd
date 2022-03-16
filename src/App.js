//section for app imports
import './App.css';
import { Routes, Route } from 'react-router-dom';
//section for component imports
import Navbar from './components/Navbar/Navbar.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
/* import Profile from './components/Profile/Profile'; */
import Products from './components/Products/Products';
import Contactspage from './components/Contactspage/Contactspage';
import Accountspage from './components/Accountspage/Accountspage';
import Dealspage from './components/Dealspage/Dealspage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Topbar />
      <Routes>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='/' element={<h1 className='container'>insert image here</h1>} />
        <Route path='/products' element={<Products />} />
        <Route path='/contacts' element={<Contactspage />} />
        <Route path='/accounts' element={<Accountspage />} />
        <Route path='/deals' element={<Dealspage />} />

      </Routes>
    </div>
  );
}

export default App;
