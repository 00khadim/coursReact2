import React from 'react';
import './index.css';
import { useState } from 'react'
import Bay from './img/bay.png';
import Black from './img/black.png';
import Blue from './img/blue.png';
import Greenv2 from './img/greenv2.jpg';
import Green from './img/green.png';
import Bluev2 from './img/bluev2.jpg';
import Gris from './img/gris.png';
import Brown from './img/Brown.png';


function Articles() {

    return (
        <div>
            
            
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 underline decoration-sky-50 mt-6'>Articles</h1>
            <div className='container mx-auto'>
                <div className='grid grid-rows-2 grid-flow-col gap-3 m-10'>
                   
                    <div>
                        <img className='' src={Bay} alt="pulls color baige" />
                        <p className="font-bold">Price: 50$</p>
                    </div>
                    <div>
                        <img src={Black} alt="pulls color noir" />
                        <p className="font-bold">Price: 50$</p>

                    </div>
                    <div>
                        <img src={Blue} alt="pulls color blue" />
                        <p className="font-bold">Price: 50$</p>

                    </div>
                    <div>
                        <img src={Bluev2} alt="pulls color blue" />
                        <p className="font-bold">Price: 50$</p>

                    </div>
                    <div>
                        <img src={Greenv2} alt="pulls color vert" />
                        <p className="font-bold">Price: 50$</p>

                    </div>
                    <div>
                        <img src={Green} alt="pulls color vert" />
                        <p className="font-bold">Price: 50$</p>

                    </div>
                    <div>
                        <img src={Gris} alt="pulls color gris" />
                        <p className="font-bold">Price: 50$</p>

                    </div>
                    <div>
                        <img src={Brown} alt="pulls color marron" />
                        <p className="font-bold">Price: 50$</p>

                    </div>







                </div>


            </div>
        </div>
    )
}

export default Articles