import Nav from "./Nav"
import useCart from "../hooks/UseCart"
import { useState } from "react"
import AddProduct from "./AddProduct"
import "../styles/Header.css"


type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const [showAddProduct, setShowAddProduct] = useState(false)

  const content = (
    <>
      <header className="header">
        <div className="header__title-bar">
          <h1>Book store</h1>
          <div className="header_price-box">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
          </div>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </header>
        <div className="add_new_product-div">
          <button className="add_new_product-btn" onClick={() => setShowAddProduct(!showAddProduct)}>
            {showAddProduct ? 'Close' : 'Add New Product'}
          </button>
        </div>
      {showAddProduct && <AddProduct />}

    </>
  );

  return content
}

export default Header