import React from 'react';
import './index.css';
import Bay from './img/bay.png';
import Black from './img/black.png';
import Blue from './img/blue.png';
import Greenv2 from './img/greenv2.jpg';
import Green from './img/green.png';
import Bluev2 from './img/bluev2.jpg';
import Gris from './img/gris.png';


function Articles() {

    return (
        <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 underline decoration-sky-50'>Articles</h1>
            <div className='container mx-auto'>
                <div className='grid grid-rows-2 grid-flow-col gap-3'>
                    <img className='' src={Bay} alt="pulls color baige" />
                    <img src={Black} alt="pulls color noir" />
                    <img src={Blue} alt="pulls color blue" />
                    <img src={Bluev2} alt="pulls color blue" />
                    <img src={Greenv2} alt="pulls color vert" />
                    <img src={Green} alt="pulls color vert" />
                    <img src={Gris} alt="pulls color gris" />
                </div>


            </div>
        </div>
    )
}

export default Articles