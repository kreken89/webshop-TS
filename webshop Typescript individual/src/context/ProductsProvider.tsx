import  { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  description: string;
};

// const initState: ProductType[] = []
const initState: ProductType[] = [
  {
    sku: "holly",
    name: "Product 1 description",
    price: 100,
    description: "bla",
  },
  {
    sku: "elon",
    name: "Product 2 description",
    price: 200,
    description: "bla",
  },
  {
    sku: "zlatan",
    name: "Product 3 description",
    price: 300,
    description: "bla",
  },
  {
    sku: "zlatan2",
    name: "Product 4 description",
    price: 250,
    description: "bla",
  },
  {
    sku: "saga",
    name: "Product 4 description",
    price: 250,
    description: "bla",
  },
  {
    sku: "senare",
    name: "Product 4 description",
    price: 250,
    description: "bla",
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type childrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: childrenType): ReactElement => {
        const [products, setProducts] = useState<ProductType[]>(initState)

        // useEffect(() => {
        //     const fetchProducts = async (): Promise<ProductType[]> => {
        //         const data = await fetch("https://localhost:3500/products").then(res => {
        //             return res.json()
        //         }).catch(err => {
        //             if (err instanceof Error) {
        //                 console.log(err.message)
        //             }
        //         })
        //         return data
        //     }

        //     fetchProducts().then(products => setProducts(products))
        // }, [])

        return (
            <ProductsContext.Provider value={{ products }}>
                {children}
            </ProductsContext.Provider>
        )
    }

export default ProductsContext



// // Import necessary dependencies from the 'react' library.
// import { ReactElement, createContext, useState, useEffect } from "react"

// // Define a type 'ProductType' to represent a product.
// export type ProductType = {
//     sku: string,
//     name: string,
//     price: number,
// }

// // Initialize an empty array 'initState' to store products.
// const initState: ProductType[] = []

// // Define a context type 'UseProductsContextType' to represent the products context.
// export type UseProductsContextType = { products: ProductType[] }

// // Initialize an empty context state 'initContextState'.
// const initContextState: UseProductsContextType = { products: [] }

// // Create a context called 'ProductsContext' with the initial context state.
// const ProductsContext = createContext<UseProductsContextType>(initContextState)

// // Define a type 'ChildrenType' for the children components.
// type ChildrenType = { children?: ReactElement | ReactElement[] }

// // Create a component called 'ProductsProvider' to provide the products context.
// export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
//     // Define a state variable 'products' using 'useState' to store the products data.
//     const [products, setProducts] = useState<ProductType[]>(initState)

//     // Use 'useEffect' to fetch products data from a server when the component mounts.
//     useEffect(() => {
//         // Define an asynchronous function 'fetchProducts' to fetch product data.
//         const fetchProducts = async (): Promise<ProductType[]> => {
//             try {
//                 // Send a GET request to 'http://localhost:3500/products'.
//                 const response = await fetch('http://localhost:3500/products')

//                 // Parse the response data as JSON.
//                 const data = await response.json()

//                 // Return the fetched product data.
//                 return data
//             } catch (err) {
//                 // Handle errors, if any, and log error messages.
//                 if (err instanceof Error) {
//                     console.log(err.message)
//                 }
//                 // Return an empty array if there is an error.
//                 return []
//             }
//         }
        
//         // Call 'fetchProducts' and update the 'products' state with the fetched data.
//         fetchProducts().then(products => setProducts(products))
//     }, [])  // The empty dependency array ensures this effect runs only once when mounted.

//     // Provide the 'products' state value to the context for its children.
//     return (
//         <ProductsContext.Provider value={{ products }}>
//             {children}
//         </ProductsContext.Provider>
//     )
// }

// // Export the 'ProductsContext' as the default export of this module.
// export default ProductsContext
