// import './App.css'
// import PixiComponent from './PixiComponent'
import Home from './Home'
import PixiComponent2 from './PixiComponent2'
import PixiGame2 from './PixiGame2'
 import PixiGame3 from './PixiGame3'
// import PixiComponent4 from './PixiGame4'
import { BrowserRouter as Path, Route, Routes } from 'react-router-dom'
import PixiGame4 from './PixiGame4'
import PixiGame5 from'./PixiGame5'
import PixiGame6 from './PixiGame6'
import PixiGame7 from './PixiGame7'
import PixiGame8 from './PixiGame8'
import PixiGame9 from './PixiGame9'
import PixiGame10 from './PixiGame10'
function App() {

  return (
    <Path>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/game1' element = {<PixiComponent2/>}/>
        <Route exact path='/game2' element = {<PixiGame2/>}/>
        <Route exact path='/game3' element = {<PixiGame3/>}/>
        <Route exact path='/game4' element = {<PixiGame4/>}/>
        <Route exact path='/game5' element = {<PixiGame5/>}/>
        <Route exact path='/game6' element = {<PixiGame6/>}/>
        <Route exact path='/game7' element = {<PixiGame7/>}/>
        <Route exact path='/game8' element = {<PixiGame8/>}/>
        <Route exact path='/game9' element = {<PixiGame9/>}/>
        <Route exact path='/game10' element = {<PixiGame10/>}/>
        {/* <Route exact path='/game4' element={<PixiComponent4/>}/> */}
      </Routes>
    </Path>
  )
}


export default App