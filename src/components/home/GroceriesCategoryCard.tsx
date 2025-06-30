import React from 'react';
import theme from '../../theme/theme';
import Typography from '../common/Typography';

interface GroceriesCategoryCardProps {
  label: string;
  image: string;
  bg?: string;
  selected?: boolean;
  onClick?: () => void;
}

const GroceriesCategoryCard: React.FC<GroceriesCategoryCardProps> = ({ label, image, bg, selected, onClick }) => (
  <button
    className={`flex items-center rounded-2xl px-4 py-3 shadow-sm transition ring-2 ${selected ? 'ring-[#53B175]' : 'ring-transparent'}`}
    style={{ background: bg || theme.colors.white, minWidth: 220, minHeight: 100, height: 100, border: 'none', fontFamily: 'Roboto', cursor: 'pointer' }}
    onClick={onClick}
  >
    <img src={image} alt={label} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 20 }} />
    <Typography variant="body" className="text-left" style={{ fontSize: 20, fontWeight: 500 }}>{label}</Typography>
  </button>
);

export default GroceriesCategoryCard; 