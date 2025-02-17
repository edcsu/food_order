import { useContext } from 'react'

import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/constants'
import Button from './UI/Button'

function Cart() {
    const {items} = useContext(CartContext)
    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0)
    return (
        <Modal className='cart'>
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
                <Button textOnly>Close</Button>
                <Button>Checkout</Button>
            </p>
        </Modal>
    )
}

export default Cart