import { createContext, useReducer } from 'react'

import { ADD_ITEM, REMOVE_ITEM} from '../utils/constants'

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
})

function cartReducer(state, action) {
    switch (action.type) {
        case ADD_ITEM:
            console.log(action)
            const existingAddIndex = state.items.findIndex((item) => item.id === action.item.id)
            console.log(existingAddIndex)
            const updatedAddItems = [...state.items]
            if (existingAddIndex > -1) {
                const existingAddItem = state.items[existingAddIndex]
                const updatedAddItem = {
                    ...existingAddItem,
                    quantity: existingAddItem.quantity + 1
                }
                updatedAddItems[existingAddIndex] = updatedAddItem
            } else {
                updatedAddItems.push({
                    ...action.item,
                    quantity: 1
                })
            }
            return {
                ...state,
                items : updatedAddItems
            };
        
        case REMOVE_ITEM:
            const existingRemoveIndex = state.items.findIndex((item) => item.id === action.id)
            
            const existingRemoveCartItem = state.items[existingRemoveIndex]
            
            const updatedRemoveItems = [...state.items]
            
            if (existingRemoveCartItem.quantity === 1) {
                updatedRemoveItems.splice(existingRemoveIndex, 1)
            } else {
                const updatedRemoveItem = {
                    ...existingRemoveCartItem,
                    quantity: existingRemoveCartItem.quantity - 1
                }
                updatedRemoveItems[existingRemoveIndex] = updatedRemoveItem
            }
            
            return {
                ...state,
                items : updatedRemoveItems
            };
    
        default:
            return state;
    }
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })
    
    function addItem(item) {
        dispatchCartAction({ type: ADD_ITEM, item})
    }

    function removeItem(id) {
        dispatchCartAction({ type: REMOVE_ITEM, item: id})
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartContext;
