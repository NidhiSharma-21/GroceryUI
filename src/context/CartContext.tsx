import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  weight: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  getTotal: () => number;
  clearCart: () => void;
  search: string;
  setSearch: (s: string) => void;
}

const CartContext = createContext(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

export function CartProvider({ children }: { children: any }) {
  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>, qty: number = 1) => {
    setCart(prev => {
      const found = prev.find(ci => ci.id === item.id);
      if (found) {
        return prev.map(ci => ci.id === item.id ? { ...ci, quantity: ci.quantity + qty } : ci);
      }
      return [...prev, { ...item, quantity: qty }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart(prev => prev.filter(ci => ci.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, qty: number) => {
    setCart(prev => prev.map(ci => ci.id === id ? { ...ci, quantity: qty } : ci));
  }, []);

  const getTotal = useCallback(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  const clearCart = useCallback(() => {
    setCart([]);
    sessionStorage.removeItem('cart');
  }, []);

  const setSearchCallback = useCallback((s: string) => setSearch(s), []);

  const contextValue = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotal,
    clearCart,
    search,
    setSearch: setSearchCallback
  }), [cart, addToCart, removeFromCart, updateQuantity, getTotal, clearCart, search, setSearchCallback]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
} 