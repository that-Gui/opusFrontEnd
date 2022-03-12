//section for app imports
import './App.css';
import { Routes, Route } from 'react-router-dom';
//section for component imports


//app section
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Hello Gui</h1>} />
      </Routes>
    </div>
  );
}

export default App;
