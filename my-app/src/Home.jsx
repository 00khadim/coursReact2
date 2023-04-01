import React from 'react'
import Articles from './Articles'
import Fond from './img/Fond.gif'
import Login from './Login'
import { Link, NavLink } from "react-router-dom"


function Home() {
  return (
    
    <div className=''>
      

      <img src={Fond} alt="Fond" />
      <div className='flex justify-center text-center p-3'>
        <div className='p-4'>
          <NavLink to={"Articles"} className="box-border h-14 w-32 border-4 p-4 m-4">
            Voir produit
          </NavLink>
        </div>
        

      </div>

    </div>
  )
}

export default Home