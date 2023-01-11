import '../css/Total.css'
import { useSelector } from 'react-redux'

function Total() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(product => {
      totalQuantity += product.quantity
      totalPrice += product.price * product.quantity
    })
    return { totalPrice, totalQuantity }
  }

  return (
    <div className="total">
      <h2>SUM MONEY</h2>
      <div>
        <p>
          total ({getTotal().totalQuantity} product)
          : <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total