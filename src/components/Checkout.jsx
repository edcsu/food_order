import { useContext } from 'react'
import Modal from './UI/Modal'

import { BASE_URL, currencyFormatter } from '../utils/constants'

import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

import Input from './UI/Input'
import Button from './UI/Button'
import useHttp from '../hooks/useHttp'
import ErrorPage from './Error'


const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

function Checkout() {
    const {items, addItem, removeItem} = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)
    
    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    const {data, isLoading, error, sendRequest} = useHttp(`${BASE_URL}/orders`, requestConfig, null)

    function handleClose() {
        userCtx.hideCheckout()
    }

    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const customerData = Object.fromEntries(formData.entries())

        sendRequest(JSON.stringify({
            order: {
                items,
                customer: customerData
            }
        }))
    }

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleClose}>
                Close
            </Button>
            <Button> Submit Order</Button>
        </>
    )

    if (isLoading) {
        actions = (
            <span>Sending your order...</span>
        )
    }

    if (data && !error) {
        return (
            <Modal open={userCtx.progress === 'checkout'} onClose={handleClose}>
                <h2>Success!</h2>
                <p>
                    Your order was submitted successfully
                </p>
                <p>We will get back to you with more details via email shortly</p>
                <p className='modal-actions'>
                    <Button onClick={handleClose}>
                        Ok
                    </Button>
                </p>
            </Modal>
        )
    }

    return (
        <Modal open={userCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                
                <Input
                    id="name"
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

                {error && (
                    <ErrorPage title="Failed to submit order" message={error} /> 
                )}

                <p className='modal-actions'>
                    {actions}
                </p>
            </form>
        </Modal>
    )
}
export default Checkout