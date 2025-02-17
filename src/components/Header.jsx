import { useContext } from 'react'

import LogoImg from '../assets/logo.jpg'
import Button from './UI/Button'

import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

function Header() {
    const { items } = useContext(CartContext)
    const userCtx =  useContext(UserProgressContext)    
    
    const totalCartItems = items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0)

    function handleShowCart() {
        userCtx.showCart()
    }

    return (
    <header id='main-header'>
        <div id='title'>
            <img src={LogoImg} alt="logo" />
            <h1>Ske Foods</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>
                Cart ({totalCartItems})
            </Button>
        </nav>
    </header>
  )
}

export default Header