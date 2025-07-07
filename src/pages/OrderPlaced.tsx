import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';

const OrderPlaced = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  useEffect(() => { clearCart(); }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden" style={{ fontFamily: 'Roboto', background: '#fff' }}>
      {/* Background image, covers top to just below the text */}
      <img
        src="/assets/Background.png"
        alt="Background"
        className="absolute left-0 top-0 w-full"
        style={{ height: 380, objectFit: 'cover', zIndex: 0, marginTop: 120 }}
      />
      <div className="flex flex-col items-center w-full relative z-10 pt-20 mt-20">
        <img src="/assets/orderaccepted.png" alt="Order Accepted" style={{ width: 180, height: 180, marginBottom: 32 }} />
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#181725' }}>Your Order has been accepted</h2>
        <p className="text-[#7C7C7C] text-base mb-10 text-center" style={{ maxWidth: 320 }}>
          Your items have been placed and are on their way to being processed
        </p>
        <Button
          className="w-11/12 max-w-xs mb-4 mt-8"
          style={{ fontSize: 18, background: '#53B175', color: '#fff', borderRadius: 20, height: 56, fontWeight: 700 }}
          onClick={() => {}}
        >
          Track Order
        </Button>
        <button
          className="text-base font-semibold mt-2"
          style={{ color: '#181725', fontFamily: 'Roboto' }}
          onClick={() => {
            navigate('/home', { replace: true });
            setTimeout(() => {
              window.history.pushState({}, '', '/');
            }, 100);
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced; 