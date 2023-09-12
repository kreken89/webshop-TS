import useCart from "../hooks/UseCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
  const [ confirm, setConfirm ] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

  const onSubmitOrder = () => {
    // Save the order in local storage
    const order = {
      items: cart,
      totalItems: totalItems,
      totalPrice: totalPrice,
      orderDate: new Date().toLocaleString(),
    }
    // Retrieve existing orders from local storage or create an empty array
    const existingOrdersJSON = localStorage.getItem('orders')
    const existingOrders = existingOrdersJSON
      ? JSON.parse(existingOrdersJSON)
      : []
    // Add the new order to the existing orders
    existingOrders.push(order)
    // Save the updated orders array back to local storage
    localStorage.setItem('orders', JSON.stringify(existingOrders))
    // Dispatch the action to clear the cart
    dispatch({ type: REDUCER_ACTIONS.SUBMIT })
    // Set the confirmation flag
    setConfirm(true)
  }

  const pageContent = confirm
  ? <h2>Thank you for your order.</h2>
  : <>
    <h2 className="offscreen">Cart</h2>
    <ul className="cart">
      {cart.map(item => {
        return (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        )
      })}
    </ul>
    <div className="cart__totals">
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>
        Place Order
      </button>
    </div>
  </>

      const content = (
        <main className="main main--cart">
          {pageContent}
        </main>
      )
  return content
}

export default Cart