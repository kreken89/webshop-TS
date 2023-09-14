import { ProductType } from "../context/ProductsProvider"
import "../styles/ProductDetails.css"
import { getImageUrl } from "./Product"

type ProductDetailsProps = {
  product: ProductType
  onClose: () => void
}

const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
      // const image: string = new URL(`../images/${product.sku}.jpeg`, import.meta.url).href;
      const imgSrc: string = getImageUrl(product.sku)

      

  return (
    <div className="modal-layer">
      <div className="modal">
        <div className="modal-content">
          {/* <img src={imgSrc} alt={product.name} className="product-image" /> */}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {/* Add more details here */}
          <div>
            
          {/* <button className="close-modal-btn" onClick={onClose}>
            Close
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;