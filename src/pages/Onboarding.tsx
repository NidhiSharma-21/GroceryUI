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
    <div className="relative h-screen w-full" style={{ fontFamily: 'Gilroy, sans-serif' }}>
      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover"
        src="/assets/onboarding.png"
        alt="Delivery Person"
      />

      {/* Overlay content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-[5vh] px-4 bg-black/30 text-white text-center">
        <div className="mb-4 text-4xl">
          <img src="/assets/carrot.png" alt="carrot" style={{ width: 48, height: 48 }} />
        </div>
        <h1 className="text-[48px] leading-tight font-semibold" style={{ fontFamily: 'Gilroy, sans-serif', fontWeight: 600, color: theme.colors.white }}>
          Welcome<br />to our store
        </h1>
        <p className="text-lg mt-2 mb-6" style={{ fontFamily: 'Gilroy, sans-serif', color: theme.colors.subtitle }}>
          Get your groceries in as fast as one minute
        </p>
        <Link
          to="/home"
          className="bg-green-500 max-w-[25em] w-full text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-green-600 transition"
          style={{ fontFamily: 'Gilroy, sans-serif', background: theme.colors.primary, color: theme.colors.white, fontWeight: 700 }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;