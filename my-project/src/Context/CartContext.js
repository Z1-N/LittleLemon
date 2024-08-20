import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };


  const getCartCount = () => {
    return cartList.reduce((count, item) => count + item.quantity, 0);
  };

  const updateCart = (productId, quantity) => {
    setCartList((prevCartList) => {
      return prevCartList.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
    );
  }); 
};
const addItem = (product) => {
  setCartList((prevCartList) => {
    const cartItem = prevCartList.find((item) => item.id === product.id);
    if (cartItem) {
      return prevCartList.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevCartList, { ...product, quantity: 1 }];
    }
  });
};

const decrementQuantity = (productId) => {
  setCartList((prevCartList) => {
    return prevCartList.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
  });
};

const deleteItem = (productId) => {
  setCartList((prevCartList) => {
    return prevCartList.filter((item) => item.id !== productId);
  });
};

const clearCart = () => {
  setCartList([]);
};



return (
    <CartContext.Provider value={{ cartList, addToCart, getCartCount  , updateCart , addItem  , decrementQuantity ,deleteItem , clearCart , set  }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};