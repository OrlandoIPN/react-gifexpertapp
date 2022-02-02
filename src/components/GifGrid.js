import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);



    const getCitas = async () => {
        const url = 'https://jservice.io/api/clues?value=100&category=1420&offset=4';
        const respues = await fetch(url);
        const data = await respues.json();
        console.log(data);

        const citas = data.map(cita => {
            return {
                answer: cita.answer,
                question: cita.question
            }
        })

        console.log(citas);

    }

    // getCitas();


    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>loading</p>}
            <div className='card-grid'>

                {
                    images.map(img => (

                        <GifGridItem
                            key={img.id}
                            //Envio las propiedades de la imagen como propiedades independientes con eso 
                            {...img}
                        />


                    ))

                }

                {/* <lo>
           {
               images.map(({id, title})=>(

                <li key={id}>{title}</li>
                
                  
                   
               ))
               
            }
           
        </lo> */}
            </div>
        </>)
};



