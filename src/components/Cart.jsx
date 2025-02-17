import { useContext } from 'react'

import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/constants'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'
import CartItem from './CartItem'

function Cart() {
    const {items, addItem, removeItem} = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)
    
    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    function handleCloseCart() {
        userCtx.hideCart()
    }

    function handleGoToCheckout() {
        userCtx.showCheckout()
    }

    return (
        <Modal className='cart' open={userCtx.progress === 'cart'}>
            <h2>Your cart</h2>
            <ul>
                {items.map((item) => (
                    <CartItem 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        price={item.price}
                        onAdd={() => addItem(item)}
                        OnRemove={() => removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className='cart-total'>
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className='modal-actions'>
                <Button onClick={handleCloseCart} textOnly>Close</Button>
                {items.length > 0 && <Button onClick={handleGoToCheckout}>Checkout</Button>}
            </p>
        </Modal>
    )
}

export default Cart