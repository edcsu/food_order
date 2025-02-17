 export const BASE_URL = 'http://localhost:3001'
 export const ADD_ITEM = "ADD_ITEM"
 export const REMOVE_ITEM = "REMOVE_ITEM"
 export const CLEAR_CART = "CLEAR_CART"

 export const currencyFormatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
 })
 