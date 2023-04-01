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

      <NavLink to={"/"}
        style={({ isActive }) => ({ color: isActive ? "#d1d1d1" : "" })}
        className="m-4 p-2 font-bold">Home</NavLink>
      <NavLink to={"./Articles"}
        style={({ isActive }) => ({ color: isActive ? "#d1d1d1" : "" })}
        className="m-4 p-2 font-bold">Articles</NavLink>
      <NavLink to={"./Login"}
        style={({ isActive }) => ({ color: isActive ? "#d1d1d1" : "" })}
        className="m-4 p-2 font-bold">Login</NavLink>
      <NavLink to={"Sign up"}
        style={({ isActive }) => ({ color: isActive ? "#d1d1d1" : "" })}
        className="m-4 p-2 font-bold">Sign up</NavLink>
      <NavLink to={"Panier"}
        style={({ isActive }) => ({ color: isActive ? "#d1d1d1" : "" })}
        className="m-4 p-2 font-bold">Panier</NavLink>
    </nav>

  )
}

export default Header