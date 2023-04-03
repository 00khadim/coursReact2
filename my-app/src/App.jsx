import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

import './index.css'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'

function App() {

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
            <Route path='/signUp' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />

          </Routes>

        </div>

      </div>
    </div>



  )
}

export default App
