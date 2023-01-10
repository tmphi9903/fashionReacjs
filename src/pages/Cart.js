import React from 'react'
import { useSelector } from 'react-redux'
import Total from '../components/Total'

import CartItem from '../components/CartItem'

export default function Cart() {
    const cart = useSelector((state) => state.cart)
    return (
        <div className="cart row">
            <div className="cart_left col-lg-7 shadow-lg">
                <div>
                    <h3>Shopping Cart</h3>
                    {cart?.map((product) => (
                        <CartItem
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                </div>
            </div>

            <div className="cart_right col-lg-5">
                <Total />
            </div>
        </div>
    )
}
