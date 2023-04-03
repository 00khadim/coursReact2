import React, {useState } from 'react'
import '../App.css'
import '../index.css'
import { Routes, Route } from 'react-router-dom'



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const [validation, setValidation] = useState("");

  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div>
            
            <h1 className="text-4xl">Login</h1><br />

            <div className='flex justify-center '>
                <div className="w-full max-w-xs m-0 ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

                        <div className='block text-gray-700 text-sm font-bold mb-4'>
                            <label
                                className="mt-4"
                                htmlFor="email"
                            >
                                E-mail
                            </label>


                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mb-"
                                ref={addInputs}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={changeEmail}
                            />
                        </div>
                        <div className='block text-gray-700 text-sm font-bold mb-4'>
                            <label className="m-4 p-4" htmlFor="password">
                                Mot de passe
                            </label>

                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                name="password"
                                id="password"

                                type="Password"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={changePassword}
                            />
                            <p className='text-red'>{validation}</p>

                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Se connecter
                            </button>
                        </div>
                    </form>
                </div>


            </div>
          
        </div>
    )
}

export default Login;