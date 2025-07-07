import React from 'react';
import theme from '../../theme/theme';
import Typography from '../common/Typography';

interface CategoryChipProps {
  label: string;
  image: string;
  selected?: boolean;
  bg?: string;
  onClick?: () => void;
}

const CategoryChip: React.FC<CategoryChipProps> = ({ label, image, selected, bg, onClick }) => (
  <button
    className={`flex flex-col items-center min-w-[120px] rounded-xl mb-1 px-2 py-2 ${selected ? 'ring-2 ring-[#53B175]' : ''}`}
    style={{ background: bg || theme.colors.white, fontFamily: 'Roboto', border: 'none' }}
    onClick={onClick}
  >
    <div className="flex items-center justify-center mb-1" style={{ width: 110, height: 60 }}>
      <img src={image} alt={label} style={{ width: 40, height: 40 }} />
    </div>
    <Typography variant="caption" className="text-center font-semibold" color={theme.colors.text}>{label}</Typography>
  </button>
);

export default CategoryChip; 