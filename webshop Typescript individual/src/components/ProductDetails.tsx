import "../styles/ProductDetails.css"
import { getImageUrl } from "./Product"

const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
      const imgSrc: string = getImageUrl(product.sku)

      const closeModal = () => {
        onClose();
      };

  return (
    <div className="modal-layer">
      <div className="modal">
        <div className="modal-content" onClick={closeModal}>
          <img src={imgSrc} alt={product.name} className="product-image" />
          <div className="modal-parent">
            <h2>{product.name}</h2>
            <h3>{product.price} SEK</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
