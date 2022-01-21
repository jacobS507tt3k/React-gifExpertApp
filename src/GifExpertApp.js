import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(["Halo"]);
/*     const handleAdd=()=>{
        //setCategories(["niño ardilla", ...categories]);
        setCategories(cats => [...cats, "niño ardilla"] );
        
    } */
    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map( category => 
                         <GifGrid 
                            key={category}
                            category={category}
                         />
                    )
                }
            </ol>

        </>

    );

}


