import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Bus from './pages/Bus';
import Train from './pages/Train';
import Aeroplane from './pages/Aeroplane';
import Ship from './pages/Ship';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        
        <Route path="/login" element={<Login/>}></Route>
        
        <Route path="/register" element={<Register/>}></Route>

        <Route path="/bus" element={<Bus/>}></Route>
        
        <Route path="/train" element={<Train/>}></Route>
        
        <Route path="/aeroplane" element={<Aeroplane/>}></Route>

        <Route path="/ship" element={<Ship/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
