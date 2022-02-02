
//Los Hooks son funciones que nos pueden servir para ayudar 
//los hooks pueden tener un estado

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    })

                }, 1000);

            })

    }, [category])


    return state; //{data: [], loading: true};

}