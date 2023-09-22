import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextprovider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (props) => {
    const oldCart = [...cart];
    const newCart = oldCart.concat(props);
    setCart(newCart);
    setCartItemCount((prev) => prev + 1)

  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartItemCount }}>
      {props.children}
    </CartContext.Provider>
  );
};
