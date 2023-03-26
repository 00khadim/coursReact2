import { useState } from 'react'
import './App.css'
import Header from './Header'
import Articles from './Articles'
import Login from './login'
import './index.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)
  /* const [prenom, setPrenom] = useState('');
   const [nom, setNom] = useState('');
   const [password, setPassword] = useState("");
   const handleSubmit = (e) => {
     e.preventDefault();
   }
 
   const changePassword = (e) => {
     setPassword(e.target.value);
   };
   */

  return (
    <div className="App bg-[#8080df]">
      <div className='flex justify-center m-2'>
        <div className='m-2'>
        <Routes>
          <Route path='/' element={<Articles />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
        
          
        </div>

      </div>
    </div>



  )
}

export default App
