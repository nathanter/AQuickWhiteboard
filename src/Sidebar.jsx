import { useContext} from 'react'


import  {drawnobjects, itemContext}  from './Drawingapp'
import Undos from './Undo'

function Sidebar({items,current}){

    //itemcontext should be context to update current tool state function
    const updatecurrent = useContext(itemContext)

    
    function buttonfunc(item){
      
        
        updatecurrent(item.linkobject.nextitem())
   
    }
    
    return(<>


        <div className="flex flex-col">
            <div className='flex flex-row'>
                {items.map((item)=>{return(
                    <button className='py-3 px-3 bg-slate-600 border-4 border-slate-500 m-1' onClick={()=>buttonfunc(item)}><p className='text-white'>{item.name}</p></button>
                )}


                )}
                <Undos></Undos>
            </div>
                
            <div className='flex flex-row'
        
            >
            {current.propchangersrender()}
            </div>
        </div>
    
    
    
    
    
    
    
    
    
    </>)


}


export default Sidebar