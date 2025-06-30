import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import theme from '../../theme/theme';
import Typography from '../common/Typography';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  weight: string;
  price: number;
  onClick?: () => void;
}

function ProductCard({ id, image, name, weight, price, onClick }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow relative" style={{fontFamily: 'Roboto', minWidth: 160, minHeight: 220, cursor: onClick ? 'pointer' : undefined, background: theme.colors.white}} onClick={onClick}>
      <img src={image} alt={name} className="mb-2" style={{width: 80, height: 80, objectFit: 'contain'}} />
      <div className="flex flex-col items-start w-full">
        <Typography variant="body" className="font-bold mb-1 text-left" style={{ color: theme.colors.text, fontSize: '1rem', fontWeight: 700 }}>{name}</Typography>
        <Typography variant="caption" className="mb-2 text-left" color={theme.colors.gray} style={{ fontSize: 14, fontWeight: 500 }}>{weight}</Typography>
        <div className="flex items-center justify-between w-full mt-1">
          <Typography variant="body" className="font-bold text-left" color={theme.colors.text} style={{ fontSize: '1.125rem', fontWeight: 700 }}>${price.toFixed(2)}</Typography>
          <Button
            variant="icon"
            style={{ background: theme.colors.primary, borderRadius: 16, width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px 0 rgba(60,60,60,0.03)' }}
            onClick={e => { e.stopPropagation(); addToCart({ id, name, image, price, weight }); toast.success('Item added to cart!', { duration: 3000, position: 'top-right' }); }}
          >
            <span className="text-white text-2xl font-bold">+</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 