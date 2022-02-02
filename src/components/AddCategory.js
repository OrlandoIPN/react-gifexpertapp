import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //UNDEFINED!! debes de ponerlo por lo menos como un string vacio
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Hecho');
        
        if (inputValue.trim().length>2) {
            setCategories(cats=>[ inputValue, ...cats]);
            setInputValue('');
        }

            
        
    }

    return (


        <form onSubmit={handleSubmit}>

            {/* <h1>{inputValue}</h1> */}

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} >
            </input>

        </form>


    )
}

AddCategory.propTypes  = {
    setCategories: PropTypes.func.isRequired
}

//Snipped rafc
