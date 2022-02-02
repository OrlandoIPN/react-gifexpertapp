import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = ()=>{
    //     // setCategories([...categories, 'Dame un doble triple en balsa decorado de lujo de 4x4 estilo animal guijarros extras con vibración exprimida eje con grasa ligera házlo llorar quémalo y déjalo nadar.']);
    //     //DEBE DE LLEVAR ESTE OPERADOR YA QUE DE OTRA FORMA INTERVIENES DIRECTAMENTE EN EL USE STATE Y LO CAMBIAS
    //     setCategories(cats => [...categories, 'tu mama en tanga triple']);  
    //     console.log(categories)
    // }

    // console.log(categories)

  return <div>
      <h2>GifExpertApp</h2>
      <AddCategory   setCategories={setCategories}/>
        <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                // insted of use "for" we should use funcionalities of javascript for explample: map. insted: en vez
                //.map: recorre todos elementos de un array
                //en el key pondremos el valor unico del elemento
                categories.map(category  =>   (
                    <GifGrid 
                    key = {category}
                    category={category}
                    />
                ))
            }
        </ol>
  </div>
}

export default GifExpertApp;
