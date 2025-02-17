import { useContext } from 'react'

import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/constants'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'

function Cart() {
    const {items} = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)
    
    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    function handleCloseCart() {
        userCtx.hideCart()
    }
    return (
        <Modal className='cart' open={userCtx.progress === 'cart'}>
            <h2>Your cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
            <p className='cart-total'>
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className='modal-actions'>
                <Button onClick={handleCloseCart} textOnly>Close</Button>
                <Button onClick={handleCloseCart}>Checkout</Button>
            </p>
        </Modal>
    )
}

export default Cart