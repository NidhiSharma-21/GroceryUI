import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import BottomNav from '../components/common/BottomNav';
import CheckoutModal from '../components/cart/CheckoutModal';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();
  const total = getTotal();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div
      className="mx-auto min-h-screen flex flex-col pb-24"
      style={{ maxWidth: 375, width: '100vw', background: '#fff', fontFamily: 'Gilroy' }}
    >
      {/* Header with Back Icon */}
      <div className="flex items-center justify-center pt-8 pb-4 relative">
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', padding: 0 }}>
          <img src="/assets/back.png" alt="back" style={{ width: 18, height: 18 }} />
        </button>
        <span className="font-bold text-2xl" style={{ fontFamily: 'Gilroy', color: '#181725' }}>My Cart</span>
      </div>
      <div style={{ height: 1, background: '#E2E2E2', width: '100%' }} />
      {/* Cart Items */}
      <div className="flex-1 px-4 space-y-4">
        {cart.length === 0 ? (
          <div className="text-center text-gray-400 mt-8" style={{ fontFamily: 'Gilroy' }}>Your cart is empty.</div>
        ) : (
          cart.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              weight={item.weight}
              quantity={item.quantity}
              onRemove={() => removeFromCart(item.id)}
              onQuantityChange={qty => updateQuantity(item.id, qty)}
            />
          ))
        )}
      </div>
      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[375px] px-4 z-40 mt-6">
          <Button
            className="w-full flex items-center justify-center relative rounded-2xl py-6 font-bold"
            style={{ fontSize: 20, fontWeight: 700, background: '#53B175', borderRadius: 20 }}
            onClick={() => setShowCheckout(true)}
          >
            <span className="mr-10">Go to Checkout</span>
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                background: '#489E67',
                borderRadius: 12,
                fontSize: 20,
                fontWeight: 700,
                color: '#fff',
                padding: '2px 16px',
                minWidth: 60,
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
              ${total.toFixed(2)}
            </span>
          </Button>
        </div>
      )}
      <CheckoutModal
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        total={total}
        onPlaceOrder={() => { setShowCheckout(false); setTimeout(() => navigate('/order-placed'), 0); }}
      />
      <BottomNav active="Cart" onNavigate={path => navigate(path)} />
    </div>
  );
};

export default Cart; 