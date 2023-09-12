import Nav from "./Nav"
import useCart from "../hooks/UseCart"

type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Book store</h1>
        <div className="header_price-box">
          <p>Total Items: { totalItems }</p>
          <p>Total Price: { totalPrice }</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  )

  return content
}

export default Header