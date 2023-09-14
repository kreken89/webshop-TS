import React, { useState } from 'react';
import "../styles/AddProduct.css"

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProduct({ ...product, image: imageUrl });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a unique identifier for the product (e.g., using a timestamp)
    const productId = Date.now();

    // Combine product details with the unique identifier
    const newProduct = { ...product, id: productId };

    // Retrieve existing products from local storage (if any)
    const existingProducts = JSON.parse(
      localStorage.getItem('products') || '[]'
    );

    // Add the new product to the existing products array
    const updatedProducts = [...existingProducts, newProduct];

    // Store the updated products array back in local storage
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Clear the form or perform any other necessary actions
    setProduct({
      name: '',
      price: 0,
      description: '',
      image: '',
    });
  };

  return (
    <div className="add_products-container">
      <div>
        <h2>Add New Product</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            className="image-input"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button className="submit_new_product-btn" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
