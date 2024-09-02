import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ItemsContext } from '../contexts/ItemsContext'

export const CardWidget = () => {
    const {Items} = useContext(ItemsContext)

    const quantity = Items.reduce((acc, act) => acc + act.quantity, 0)

    return (
    <Link to="/cart">
    
    <img src={cart} alt="carrito" height={30} />
    
        {quantity}
    
    </Link>)
}