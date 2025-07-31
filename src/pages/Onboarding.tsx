import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import theme from '../theme/theme';

const Onboarding = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-end overflow-y-auto scrollbar-hide"
      style={{
        maxWidth: 375,
        width: '100vw',
        minHeight: '100dvh',
        background: theme.colors.white,
        fontFamily: 'Gilroy',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
        src="/assets/onboarding.png"
        alt="Delivery Person"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />

      {/* Fullscreen Overlay (background only) */}
      <div
        className="absolute inset-0 w-full h-full bg-black/30 z-10"
        style={{ maxWidth: 375, margin: '0 auto', pointerEvents: 'none' }}
      />

      {/* Bottom Card Content */}
      <div
        className="relative z-20 w-full px-8 py-2  text-white text-center rounded-t-3xl flex flex-col items-center"
       
      >
        <div className="mb-4 flex justify-center w-full">
          <img src="/assets/carrot.png" alt="carrot" style={{ width: 48, height: 48, display: 'block', margin: '0 auto' }} />
        </div>
        <h1
          className="text-[38px] leading-tight font-semibold mb-2"
          style={{ fontFamily: 'Gilroy', fontWeight: 600, color: theme.colors.white }}
        >
          Welcome<br />to our store
        </h1>
        <p
          className="text-lg mt-2 mb-5 whitespace-nowrap"
          style={{ fontFamily: 'Gilroy', color: theme.colors.subtitle }}
        >
          Get your groceries in as fast as one hour
        </p>
        <Link
          to="/home"
          className="bg-green-500 max-w-[20em] w-full text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-green-600 transition"
          style={{ fontFamily: 'Gilroy', background: theme.colors.primary, color: theme.colors.white, fontWeight: 700 }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;