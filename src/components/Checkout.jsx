import React from 'react'
import Modal from './UI/Modal'

import { currencyFormatter } from '../utils/constants'

import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

import Input from './UI/Input'
import Button from './UI/Button'

function Checkout() {
    const {items, addItem, removeItem} = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)
    
    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    function handleClose() {
        userCtx.hideCheckout()
    }

    return (
        <Modal open={userCtx.progress === 'checkout'}>
            <form action="">
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                
                <Input
                    id="full-name"
                    label="Full Name"
                    type="text" 
                />
                <Input
                    id="email"
                    label="Email"
                    type="email" 
                />
                <Input
                    id="street"
                    label="Street"
                    type="text" 
                />
                <div className='control-row'>
                    <Input
                        id="postal-code"
                        label="Postal Code"
                        type="text" 
                    />

                    <Input
                        id="city"
                        label="City"
                        type="text" 
                    />
                </div>
                <p className='modal-actions'>
                    <Button type="button" textOnly onClick={handleClose}>
                        Close
                    </Button>
                    <Button> Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}
export default Checkout