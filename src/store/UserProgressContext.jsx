import { createContext, useState } from 'react'

const UserProgressContext = createContext({
    progress: '', // cart, checkout
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
})

export function UserProgressContextProvder({ children }) {
    const [userProgress, setuserProgress] = useState('')

    function showCart() {
        setuserProgress('cart')
    }

    function hideCart() {
        setuserProgress('')
    }

    function showCheckout() {
        setuserProgress('checkout')
    }

    function hideCheckout() {
        setuserProgress('')
    }

    const userProgressCentext = {
        prgress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext.Provider value={userProgressCentext}>
            {children}
        </UserProgressContext.Provider>
    )
};


export default UserProgressContext