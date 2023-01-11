import React from 'react'
import '../css/CartItem.css';

import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
export default function CartItem({ id, image, title, price, quantity = 0 }) {
  const dispatch = useDispatch()
  return (
    <div className="cartItem">
      <img className="cartItem_image" src={image} alt='product-loading' />
      <div className="cartItem_info">
        <p className="cartItem_title">{title}</p>
        <p className="cartItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem_incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem_removeButton'
          onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
    </div>
  )
}


