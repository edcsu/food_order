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
            const existingIndex = state.items.findIndex((item) => item.Id)
            
            const updatedItems = [...state.items]
            if (existingIndex > -1) {
                const existingItem = state.items[existingIndex]
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }
                updatedItems[existingIndex] = updatedItem
            } else {
                updatedItems.push({
                    ...action.item,
                    quantity: 1
                })
            }
            return {
                ...state,
                items : updatedItems
            };
    
        default:
            return state;
    }
}

export function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] })
    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}

export default CartContext;
