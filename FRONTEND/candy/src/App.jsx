import React, { useState } from "react";

import Header from "./components/Header";
import CartButton from "./components/Cart/CartButton";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <CartButton onShowCart={showCartHandler} />
      <Header />
    </CartProvider>
  );
};

export default App;
