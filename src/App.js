

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Eventdetails from './components/pages/eventinfo';

import Clubdb from './components/pages/clubdb';
import Contact from './components/pages/contact';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/"  index element={<Home/>} />
        <Route path='/event' element={<Eventdetails/>}/>
        <Route path='/clubdb' element={<Clubdb/>}/>
        <Route path='/support' element={<Contact/>}/>
        
     
    </Routes>
    </Router>
     
    </>
  );
}

export default App;
