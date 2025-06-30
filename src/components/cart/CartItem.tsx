import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  weight: string;
  quantity: number;
  onRemove: () => void;
  onQuantityChange: (qty: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, image, price, weight, quantity, onRemove, onQuantityChange }) => {
  const totalPrice = (price * quantity).toFixed(2);

  // If weight is in the format 'Xpcs, Price', multiply X by quantity
  let displayWeight = weight;
  const pcsMatch = weight.match(/(\d+)\s*pcs/i);
  if (pcsMatch) {
    const pcs = parseInt(pcsMatch[1], 10);
    const newPcs = pcs * quantity;
    displayWeight = weight.replace(/\d+\s*pcs/i, `${newPcs}pcs`);
  } else {
    // If weight is in the format 'Xkg, Price' or 'Xgm, Price', multiply X by quantity
    const kgMatch = weight.match(/(\d+)\s*kg/i);
    if (kgMatch) {
      const kg = parseInt(kgMatch[1], 10);
      const newKg = kg * quantity;
      displayWeight = weight.replace(/\d+\s*kg/i, `${newKg}kg`);
    } else {
      const gmMatch = weight.match(/(\d+)\s*gm/i);
      if (gmMatch) {
        const gm = parseInt(gmMatch[1], 10);
        const newGm = gm * quantity;
        displayWeight = weight.replace(/\d+\s*gm/i, `${newGm}gm`);
      }
    }
  }

  return (
    <div className="flex items-center justify-between py-4 border-b" style={{ borderColor: '#E2E2E2', fontFamily: 'Roboto' }}>
      <img src={image} alt={name} style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: 12 }} />
      <div className="flex-1 ml-4 min-w-0">
        <div className="font-bold text-lg" style={{ color: '#181725', lineHeight: 1.2 }}>{name}</div>
        <div className="text-[#7C7C7C] text-base mb-2" style={{ fontWeight: 500 }}>{displayWeight}</div>
        <div className="flex items-center gap-2 mt-1">
          <button
            className="w-10 h-10 rounded-lg border flex items-center justify-center text-2xl"
            style={{ color: '#BDBDBD', borderColor: '#E2E2E2', background: '#fff', fontWeight: 700, fontSize: 24 }}
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          >
            –
          </button>
          <span className="mx-2 text-xl font-bold" style={{ color: '#181725', minWidth: 24, textAlign: 'center' }}>{quantity}</span>
          <button
            className="w-10 h-10 rounded-lg border flex items-center justify-center text-2xl"
            style={{ color: '#53B175', borderColor: '#E2E2E2', background: '#fff', fontWeight: 700, fontSize: 24 }}
            onClick={() => onQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center h-full ml-4 min-w-[60px]">
        <button onClick={onRemove} style={{ background: 'none', border: 'none', padding: 0, marginBottom: 8, marginTop: 2 }}>
          <img src="/src/assets/cart/cross.png" alt="remove" style={{ width: 24, height: 24, opacity: 0.6 }} />
        </button>
        <div className="font-bold text-lg mt-2" style={{ color: '#181725', lineHeight: 1.2 }}>${totalPrice}</div>
      </div>
    </div>
  );
};

export default CartItem; 