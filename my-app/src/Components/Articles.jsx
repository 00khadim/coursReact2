import React from 'react';
import '../index.css';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom';
import Produits from './Produits';
import { data } from 'autoprefixer';


function Articles() {
    // const params = useParams()
    // console.log(params);
    const [dataArr, setDataArr] = useState([                        //Crée un variable en tableau qui prend tout le tache
        { img:'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/varsity-premium-hoodie-beige-1_800x.png?v=1678365959', name: "Pulls Baige ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 50, id: uuidv4() },          // uuidv4 c'est un id unique!
        { img:'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/cloudsblack2_800x.png?v=1677173705', name: "Pulls Noire ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 75, id: uuidv4() },          // uuidv4 c'est un id unique!
        { img:'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/varsity-premium-hoodie-blue-1_86230bdf-ff15-490a-ad33-08c76dc129e2_800x.png?v=1678365786', name: "Pulls Blue ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 30, id: uuidv4() },          // uuidv4 c'est un id unique!
        { img:'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/varsity-premium-hoodie-green-1_800x.png?v=1678365447', name: "Pulls Vert ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 40, id: uuidv4() },          // uuidv4 c'est un id unique!
        { img:'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/hoodiegreen2_800x.jpg?v=1677058403', name: "Pulls Baige ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 45, id: uuidv4() },          // uuidv4 c'est un id unique!
        { img:'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/hoodieblue2_800x.jpg?v=1677181181', name: "Pulls Noire ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 30, id: uuidv4() },          // uuidv4 c'est un id unique!
        { img:'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/varsityblack1_643f5229-cd44-42e5-80e3-db3f5bd4486a_800x.png?v=1677172566', name: "Pulls Blue ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 74, id: uuidv4() },          // uuidv4 c'est un id unique!
        { img: 'https://cdn.shopify.com/s/files/1/0025/3725/9054/products/green1_c80b096d-f23e-467e-891f-8cd5fd3e019f_800x.jpg?v=1677180095', name: "Pulls Vert ", description: "Ce look avec jeans et baskets confortables est parfait pour rencontrer les parents de votre petite amie tout en recherchant des champignons dans les bois.", prix: 35, id: uuidv4() },          // uuidv4 c'est un id unique!

    ])

    
    
    return (
        <div>
            {/* <p>{params.id}</p> */}

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 underline decoration-sky-50 mt-6'>Articles</h1>
            <div className='container mx-auto'>
                <div className='grid grid-cols-4 gap-4 m-10'>
                    {dataArr.map((item, index) => {
                        return (
                            <a href={Produits}>
                                <img className='' src={item.img} alt={item.name} />
                                {/* <p className="font-bold">{item.name}{item.prix}€</p> */}

                                <p className="font-bold">{item.prix } €</p>
                            </a>
                        )
                    })}
                    {/* <div>
                        <img className='' src={Bay} alt="pulls color baige" />
                        <p className="font-bold">10</p>
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

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Articles