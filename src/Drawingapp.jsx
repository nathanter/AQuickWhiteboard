import { Children, createContext, useContext, useEffect, useState } from 'react'
import {Stage,Layer,Text,Circle, Line} from "react-konva"
import Konva from 'konva'


import WhiteBoard from './WhiteBoard'
import Sidebar from "./Sidebar.jsx"
import {CircleObject, LineObject,RectangleObject, selecttool} from "./CanvasObjects"

export const itemContext = createContext()  
export const drawnobjectsset = createContext()
export const drawnobjects = createContext()



function MainFunction() {
  const [possibletools,setpossible] = useState([
      {name:"select",linkobject:new selecttool()},
      {name:"line",linkobject:new LineObject()},
      {name:"rect",linkobject:new RectangleObject()},
      {name:"circle",linkobject:new CircleObject()},
      ]
      
  


  )
  
  const [actionarray,set_actions] = useState([])
  //format = {type,objectref, previous, next}

 //console.log(actionarray)
 
  //actions array/reference to item
  
  const [currentitem,setcurrent] = useState(new LineObject())
  const [items,set_items] = useState([])
  const [om,setom] = useState(0)
  //console.log(`cu`rrentitem,"app")
  //(p)=>{set_items(p);if(om == 0){setom(1)} else{setom(0)}}

  //console.log(items)

  /*
   <drawnobjectsset.Provider></drawnobjectsset.Provider>
        <itemContext.Provider value={sidebarchange}>
          <drawnobjects.Provider value = {[items,undologic]}>
            <Sidebar items = {possibletools} />
          </drawnobjects.Provider>
        </itemContext.Provider>
 
  */
  //use context
  
  function undologic(){
    var cur = actionarray[actionarray.length-1];
    
    if (cur[0] == "create"){
      var varnewlist = items
      varnewlist.splice(-1,1)
      
      set_items(varnewlist)
      actionarray.splice(-1,1)
    }
    else if (cur[0] == "change"){
      var varnewlist = items
      set_actions(actionarray.splice(-1,1))
     
    }
    //set_items(prop)
    if(om == 0){setom(1)} else{setom(0)}



  }
  function sidebarchange(prop){
    
    setcurrent(prop)
    
  }
  
  return (
    

    <>
      
      <div className='bg-slate-900' >
        <button onClick={() => set_items([])}>
            <p className='text-white'>test</p>
        </button>
        <div>

          <p className='text-white'>
              
              {currentitem.name}
          </p>
        
      </div>

      <hr></hr>
      <WhiteBoard currenttool = {currentitem} setcurrent = {setcurrent} items ={items} setitems = {set_items} setactionarray={set_actions} actionarray={actionarray}/>
      <hr></hr>
        <drawnobjectsset.Provider value = {undologic}>
        <itemContext.Provider value={sidebarchange}>
          <drawnobjects.Provider value = {items}>
            <Sidebar items = {possibletools} current = {currentitem} />
          </drawnobjects.Provider>
        </itemContext.Provider>
        </drawnobjectsset.Provider>
      
      
      </div>
      
    </>
  )
}

export default MainFunction
