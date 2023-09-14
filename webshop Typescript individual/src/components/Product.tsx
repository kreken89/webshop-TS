import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo, useState } from "react"
import ProductDetails from "./ProductDetails"
import "../styles/Product.css"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

export const getImageUrl = (sku: string): string => {
    if(sku.includes ('http' || 'https')){
        return sku
    }
    else {
        return new URL(`../images/${sku}`, import.meta.url).href
    }
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
//   const img: string = new URL(`../images/${product.sku}`, import.meta.url).href
//   const img: string = product.sku; // Ersätt 'imageUrl' med det faktiska namnet på din bild-URL-egenskap

const img = getImageUrl(product.sku)

  const [showDetails, setShowDetails] = useState(false);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? ' Item in Cart: ✅' : null;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const content = (
    <article className="product">
      <img
        src={img}
        alt={product.name}
        className="product__img"
        onClick={toggleDetails}
      />
      <p className="price_styling">
        {new Intl.NumberFormat('sv-SE', {
          style: 'currency',
          currency: 'SEK',
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
      {showDetails && (
        <ProductDetails product={product} onClose={toggleDetails} />
      )}
    </article>
  );

  return content;
}

function areProductsEqual({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
    return (
        Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] ===
                nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct