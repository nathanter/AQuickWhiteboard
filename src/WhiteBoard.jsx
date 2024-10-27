import { useContext, useRef, useState ,useEffect} from 'react'
import {Stage,Layer,Text, Transformer} from "react-konva"

import {LineObject,RectangleObject} from "./CanvasObjects"

function WhiteBoard({currenttool,setcurrent,items,setitems,setactionarray,actionarray}){
    
    const [currenttoolactive, setactive] = useState(false)
    const [mousepos,setmousepos] = useState([0,0])

    const [updatevar,setu] = useState(0)
    

    const currentitem = currenttool
    
    
    
    //console.log(items,"Whiteboard")

    // Headbar --- homepage

    //Canvas          || tool selector   || editor

    //Layer bar      || preset/insert stuff like iamges || edit individual like brush size
    
    function movement(e){
        const pos = e.target.getStage().getPointerPosition()
       
        setmousepos([pos.x,pos.y])
        if(currenttoolactive == true){
            
            
            currentitem.update(mousepos)
            
            //thought: when set mouse pos in here the double print of pos and mousepos would return dif values in the mousedown
        }
            
    }

    function mousedown(e){
            
            const pos = e.target.getStage().getPointerPosition()
            setmousepos([pos.x,pos.y])
            currentitem.mousedown(mousepos)
            
          
            setactive(true)
      

    }
    function mouseup(){
        
            
            setactive(false)
            
            var temp = currentitem
            /*
            setitems([...items,currentitem])
            setcurrent(temp.nextitem())
            */
            setactionarray([...actionarray,["create",temp,0,0]] )
            console.log(actionarray)
            currentitem.mouseup(setcurrent,setitems,items)
            //setcurrent(currentitem)
            // .log(items)
        
        
    }

    var trref = useRef()
    var oref = useRef()
    addEventListener
    useEffect(()=>{

        if (currentitem.name == "select" && oref.current != undefined && trref.current != undefined){
        
            function delfunc(e){
                if(e.key == "Backspace"){
                    console.log('check')
                    items.splice(currentitem.ref,1);
                    currentitem.ref = null;
                    if(updatevar == 0){
                        setu(1)
                
                    }
                    else{
                        setu(0)
                    }
                
                    
         
                   
                }
            }
            trref.current.nodes([oref.current]);

            window.addEventListener("keydown",delfunc)
            
            
            trref.current.getLayer().batchDraw()
            return () => {window.removeEventListener("keydown",delfunc)}
        }
        

    }  
    
  

    )
  
                
    
                
          
          

            


      
    //console.log(currentitem.name,currentitem.ref)
    return( 
        <>
            <p className='text-red-300'>
                {mousepos[0]},{mousepos[1]}

            </p>
           
            

            <Stage key = 's' onMouseDown={mousedown} onMouseUp={mouseup} onMouseMove={movement} 
            width={window.innerWidth} height={window.innerHeight} 
            className="bg-slate-700 m-6">
               
                
                <Layer>
                    <Text x={mousepos[0]} y = {mousepos[1]}></Text>
                  

         
                    

                    {items.map((item,i) => {
            
                            return(
                            
                                <>
                                    {item.render("#f2f0e9",i,currentitem,oref,trref)}
                          
                                    
                                    
                                </>
                             )
                
                        //can this be optimized?
                      
                        })
                    }
                    {currentitem.render("#cc2549",-1,currentitem)}
                </Layer> 
                
            </Stage>
           
        </>
    )
}


export default WhiteBoard