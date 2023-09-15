type ProductType = {
  sku: string;
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductDetailsProps = {
  product: ProductType
  onClose: () => void
}

type UseProductsContextType = { products: ProductType[] }

type childrenType = { children?: ReactElement | ReactElement[] }

type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number,
}

type CartStateType = { cart: CartItemType[] }

type ReducerActionType = typeof REDUCER_ACTION_TYPE

type ReducerAction = {
    type: string,
    payload?: CartItemType,
}

type ChildrenType = { children?: ReactElement | ReactElement[] }

type UseCartContextType = ReturnType<typeof useCartContext>
