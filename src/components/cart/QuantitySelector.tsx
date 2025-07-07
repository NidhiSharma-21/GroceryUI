import React from 'react';
import Button from '../common/Button';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ value, onChange, min = 1, className = '' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`} style={{ fontFamily: 'Roboto' }}>
      <button
        className="w-9 h-2 rounded-full flex items-center justify-center text-2xl"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        style={{ color: '#BDBDBD', fontSize: 32, fontWeight: 700, background: 'none', border: 'none', cursor: value <= min ? 'not-allowed' : 'pointer' }}
      >
        –
      </button>
      <span
        className="flex items-center justify-center"
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          border: '2px solid #E5E5E5',
          fontSize: 28,
          fontWeight: 700,
          color: '#181725',
          background: '#fff',
        }}
      >
        {value}
      </span>
      <button
        className="w-9 h-2 rounded-full flex items-center justify-center text-2xl"
        onClick={() => onChange(value + 1)}
        style={{ color: '#53B175', fontSize: 32, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector; 