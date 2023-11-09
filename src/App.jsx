import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import "./css/style.css"

export const App = () => {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:cid' element={<ItemListContainer/>}/>
          <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        </Routes>
      </Router>
  )
}