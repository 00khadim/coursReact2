import React from 'react'
import {useNavigate} from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='font-bold text-2xl p-4'>Ops, Cette page n'existe pas</h1>
      
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mytownmyfuture.co.uk%2Fwp-content%2Fuploads%2F2017%2F08%2F404.png&f=1&nofb=1&ipt=206ebc6ae2f29260af18cb8b31e9f4e581c7ed2ffc181a1de2e7a162347d4012&ipo=images" alt="ERROR404, page introuvable" />
      
      <button onClick={() => navigate("/")} className='rounded-full border-2 font-bold text-lg p-4'>Retourner à la page principale</button>
   
    </div>
  )
}

export default NotFound