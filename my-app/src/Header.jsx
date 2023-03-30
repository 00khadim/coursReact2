import React from 'react'
import Panier from './img/panier.png'
import { Link, NavLink } from "react-router-dom"


function Header() {
  return (
    <nav className='p-5'>
      {/* <button className='p-4 font-bold'>Home</button>
      <button className='p-4 font-bold'>Vetement</button>
      <button className='p-4 font-bold'>Login</button>
      <button className='p-4 font-bold'>Sign up</button>
      <button className='p-4 font-bold'>Panier
        <img  className='w-5' src={Panier} alt="Panier" />
      </button> */}
      
      <NavLink to={"/"} className="p-4 font-bold">Home</NavLink>
      <NavLink to={"./Articles"} className="p-4 font-bold">Articles</NavLink>
      <NavLink to={"./Login"} className="p-4 font-bold">Login</NavLink>
      <NavLink to={"Sign up"} className="p-4 font-bold">Sign up</NavLink>
      <NavLink to={"Panier"} className="p-4 font-bold">Panier</NavLink>
    </nav>

  )
}

export default Header