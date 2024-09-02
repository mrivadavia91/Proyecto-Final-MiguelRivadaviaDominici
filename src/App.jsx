import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"
import { NavBar } from "./components/NavBar"
import { Provider } from './contexts/ItemsContext'
import { Cart } from './components/Cart'


function App() {
  
  return (
    <Provider>
    <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<ItemListContainer/>}/>   
        <Route path="/category/:id" element={<ItemListContainer/>}/>   
        <Route path="/item/:id" element={<ItemDetailsContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>   
        <Route path="*" element={404}/>   
        </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
