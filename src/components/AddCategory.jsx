import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    /* funcion onInputChange */
    const onInputChange = ({ target }) => { //desestructura el event
        setInputValue( target.value );
    }

    /* funcion onSubmit */
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return; //trim elimina los espacios de la izquiera y la drecha

        setInputValue('');
        onNewCategory( inputValue.trim() );
        
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}