


import { Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'
import MainFunction from './Drawingapp.jsx'
import Headbar from './Headbar.jsx'

//current issue let cjhild rerender

function App() {
  
  return(
    <>
      <Headbar></Headbar>
      <Routes>

        <Route path ="/" element= {<Home></Home>}/>
        <Route path ="/draw" element= {<MainFunction></MainFunction>}/>

        
      </Routes>
    </>
  )
}

export default App
