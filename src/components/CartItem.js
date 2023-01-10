import React from 'react'
import '../css/CartItem.css';

import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
export default function CartItem({ id, image, title, price, quantity = 0 }) {
  const dispatch = useDispatch()
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt='product-loading' />
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton'
          onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
    </div>
  )
}


