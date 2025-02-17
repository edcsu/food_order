import React from 'react'

import { currencyFormatter } from '../utils/constants'

function CartItem({ name, quantity, price, onAdd, OnRemove}) {
  return (
    <li className='cart-item'>
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className='cart-item-actions'>
            <button onClick={OnRemove}>-</button>
            <span>{quantity}</span>
            <button onClick={onAdd}>+</button>
        </p>
    </li>
  )
}

export default CartItem