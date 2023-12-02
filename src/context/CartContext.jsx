import { useContext } from "react";
import { createContext, useState } from "react";


export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextComponent = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => {
        return cartList.some((prod) => prod.id === id)
    }

    const addToCart = (product) => {
        const exist = isInCart(product.id)

        setCartList((prevCart) => {
            if (exist) {
                return prevCart.map((prod) =>
                    prod.id === product.id
                        ? { ...prod, quantity: prod.quantity + product.quantity }
                        : prod
                )
            } else {
                return [...prevCart, product]
            }
        })
    }


    const getQuantityById = (id) => {
        const product = cartList.find((elem) => elem.id === id);
        return product ? product.quantity : 0;
    }


    const emptyCart = () => {
        setCartList([])
    }

    const deleteProductById = (id) => {
        let newArray = cartList.filter((product) => product.id !== id)
        setCartList(newArray)
    }

    const removeOneUnit = (productId) => {
        setCartList((prevCart) => {
            const updatedCart = prevCart.map((prod) =>
                prod.id === productId
                    ? prod.quantity > 1
                        ? { ...prod, quantity: prod.quantity - 1 }
                        : null
                    : prod
            ).filter(Boolean) 

            if (updatedCart.length === 0) {
                deleteProductById(productId)
            }

            return updatedCart
        })
    }

    const getTotalPrice = () => {
        const price = cartList.reduce((x, item) => {
            return x + item.price * item.quantity
        }, 0)
        return price
    }

    const getTotalQuantity = () => {
        let totalQuantity = cartList.reduce((x, item) => {
            return x + item.quantity
        }, 0)
        return totalQuantity
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            getQuantityById,
            deleteProductById,
            getTotalPrice,
            getTotalQuantity,
            removeOneUnit
        }} >
            {children}
        </CartContext.Provider >
    )
}

