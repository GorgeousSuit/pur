'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);    
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
    const [totalPrice, setTotalPrice] = useState(() => JSON.parse(localStorage.getItem('totalPrice')) || 0);
    const [totalQuantities, setTotalQuantities] = useState(() => JSON.parse(localStorage.getItem('totalQty')) || 0);
    const [qty, setQty] = useState(() => JSON.parse(localStorage.getItem('totalQty')) || 0);
    

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find(
            (item) => item?._id === product?._id
        );

        if (checkProductInCart) {
            toast.error(`"${product.name}" is already in the cart.`);
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct?._id === product?._id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    };
                }
                return cartProduct;
            });

            setCartItems(updatedCartItems);
        } else {
            const updatedProduct = {
                ...product,
                quantity: quantity
            };
            setCartItems([...cartItems, updatedProduct]);

            toast.success(`${product.name} was added to the cart.`);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
            setTotalQuantities(
                (prevTotalQuantities) => prevTotalQuantities + quantity
            );
            setQty((prevQty) => prevQty + 1);
        }
    };

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter(
            (item) => item._id !== product._id
        );

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities);
        setCartItems(newCartItems);
    };

    const decQty = () => {
        setQty((prevQty) => prevQty - 1);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        localStorage.setItem('totalQty', JSON.stringify(qty));
    }, [cartItems, totalPrice, qty]);

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                setCartItems,
                totalPrice,
                totalQuantities,
                qty,
                setTotalPrice,
                setQty,
                decQty,
                onAdd,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
