import React, { useContext, useRef, useState } from "react";

function SignUp() {
    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef();
    const [validation, setValidation] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault()

        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("6 caractere minimum")
            return;
        }
        else if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Mot de passe ne corresponde pas")
            return;
        }
        return (
            <div>

                <h1 className="text-4xl">SignUp</h1>

                <div className='flex justify-center '>
                    <div className="w-full max-w-xs m-0 ">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={formRef} onSubmit={handleSubmit}>

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
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>
        )
    }
}

export default SignUp;