import Navbar from './components/Navbar';
import Main from './pages/Main';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';

import About from './pages/About';
import { Route,Routes } from 'react-router-dom';


function App() {
  const [mystyle,setmystyle]=useState({
    color:"black",
    backgroundColor:"white"

  })

 const [alert,setAlert]=useState(null);

 const showAlert=(message,type)=>
 {
  setAlert(
    {
      message:message,
      type:type
    }
  )
  
 }
 setTimeout(() => {
    setAlert(null)
 }, 3000);




  return (
    <div className="App min-h-screen" style={mystyle} >
      
      <Navbar setmystyle={setmystyle} alert={alert} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={ <Main mystyle={mystyle} setmystyle={setmystyle} alert={alert} showAlert={showAlert}/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
