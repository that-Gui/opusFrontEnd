//section for app imports
import './App.css';
import { Routes, Route } from 'react-router-dom';
//section for component imports
import Navbar from './components/Navbar/Navbar.jsx';
import Topbar from './components/Topbar/Topbar.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Topbar />
      <Routes>
        <Route path='/' element={<h1 className='container'>Hello Gui</h1>} />
      </Routes>
    </div>
  );
}

export default App;
