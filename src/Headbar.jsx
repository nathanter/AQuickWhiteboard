import { Link } from "react-router-dom"


function Headbar(){
    return(

        <>
        <div className=" bg-slate-500 ">

            <button>
                <Link to =  "./">Home</Link>
            </button>
            <button>

                <Link to = "./draw">Whiteboard</Link>
            </button>
        </div>
        
    
    </>
    )
    
    
}


export default Headbar