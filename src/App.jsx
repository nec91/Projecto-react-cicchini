import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { CartContextComponent } from './context/CartContext'

import { NavBar } from './components/NavBar/NavBar'



import "./css/style.css"
import { ItemListContainer } from './components/ItemList/ItemListContainer'
import { CartContainer } from './components/Cart/CartContainer'
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer'
import { ChekOutContainer } from './components/CheckOut/ChekOutContainer'

export const App = () => {
  return (
    <CartContextComponent>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<ChekOutContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </CartContextComponent>
  )
}