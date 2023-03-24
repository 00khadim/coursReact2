import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Articles from './Articles'
import Login from './login'
import './index.css'

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
      <div className='flex justify-center m-12'>
        <div className='m-20'>

          <Header
          />
          <Articles
          />
          <br />
          <Login/>
        </div>

      </div>
    </div>



  )
}

export default App
