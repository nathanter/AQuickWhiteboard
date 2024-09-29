import React, { useContext, useState } from "react"


import { drawnobjects,drawnobjectsset } from "./Drawingapp"



//when click undo
//rerender undo with no change
//then change in base
//delete this file


//how to flip this order

export function Undos({func}){
    const items  = useContext(drawnobjects)
    const ifunc = useContext(drawnobjectsset)

    
    function clickfunc(){
    
        
        ifunc()

    }
    return(

        <>
        <button onClick={()=>clickfunc()}>
            <p className="text-white">undo</p>

        </button>

        </>  
    )

}

export default Undos