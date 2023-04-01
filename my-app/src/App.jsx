import { useState } from 'react'
import './App.css'
import Header from './Header'
import Articles from './Articles'
import Home from './Home'

import Login from './Login'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound'

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
    <div className="App bg-[#71919b] text-white">  
    {/* [#06020a] */}
      <div className='flex justify-center '>
        <div className=''>
          
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/articles/:id' element={<Articles />} />
            <Route path='/login' element={<Login />} />

            <Route path='*' element={<NotFound/>} />
            
          </Routes>

        </div>

      </div>
    </div>



  )
}

export default App
