import React from 'react'
import {useNavigate} from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='font-bold text-2xl p-4'>Ops, Cette page n'existe pas</h1>
      
        <img src="https://o.remove.bg/downloads/dfb732d8-5d5c-434b-9168-bbeb2f98e99d/7866-removebg-preview.png" alt="ERROR404, page introuvable" />
      
      <button onClick={() => navigate("/")} className='rounded-full border-2 font-bold text-lg p-4'>Retourner à la page principale</button>
   
    </div>
  )
}

export default NotFound