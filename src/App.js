//section for app imports
import './App.css';
import { Routes, Route } from 'react-router-dom';
//section for component imports
import Navbar from './components/Navbar/Navbar.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
/* import Profile from './components/Profile/Profile'; */
import Contactspage from './components/Contactspage/Contactspage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Topbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='/' element={<h1 className='container'>hello gui, this is the dashboard</h1>} />
        <Route path='/products' element={<h1 className='container'>hello gui, this is the products page</h1>} />
        <Route path='/contacts' element={<Contactspage />} />
        <Route path='/accounts' element={<h1 className='container'>hello gui, this is the accounts page</h1>} />
        <Route path='/deals' element={<h1 className='container'>hello gui, this is the deals page</h1>} />


        {/* <Route path='/' element={<h1 className='container'>Hello Gui</h1>} /> */}

      </Routes>
    </div>
  );
}

export default App;
