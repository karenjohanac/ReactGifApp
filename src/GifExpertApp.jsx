import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    /* funcion onAddCategory */
    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory))return;/* si ya lo contiene haga un return  */
        setCategories([ newCategory, ...categories ]);
    }
    
    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1> 

            {/*input*/}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
                        
            {/*listado de gifs*/}

            {
                categories.map( (category ) =>(
                    <GifGrid 
                        key = { category }
                        category= {category}
                    />
                ))
            }
        </>
    )
}