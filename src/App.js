//section for app imports
import './App.css';
import { Routes, Route } from 'react-router-dom';
//section for component imports
import Navbar from './components/Navbar/Navbar.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Locked from './components/locked/locked';
/* import Profile from './components/Profile/Profile'; */
import Products from './components/Products/Products';
import Contactspage from './components/Contactspage/Contactspage';
import Accountspage from './components/Accountspage/Accountspage';
import Dealspage from './components/Dealspage/Dealspage';
import Dashboardpic from './components/Dashboardpage/Dashboardpic';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Topbar />
      <Routes>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='/' element={<Locked><Dashboardpic /></Locked>} />
        <Route path='/products' element={<Locked><Products /></Locked>} />
        <Route path='/contacts' element={<Locked><Contactspage /></Locked>} />
        <Route path='/accounts' element={<Locked><Accountspage /></Locked>} />
        <Route path='/deals' element={<Locked><Dealspage /></Locked>} />

      </Routes>
    </div>
  );
}

export default App;
