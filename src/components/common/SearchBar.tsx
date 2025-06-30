import React from 'react';
import theme from '../../theme/theme';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = 'Search' }) => {
  return (
    <div
      className="flex items-center w-full rounded-2xl px-4"
      style={{ background: '#F2F3F2', height: 56 }}
    >
      <img src="/src/assets/home/search.png" alt="search" style={{ width: 24, height: 24, marginRight: 12, opacity: 0.7 }} />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-base"
        style={{ fontFamily: 'Roboto', color: theme.colors.gray, fontSize: 18, fontWeight: 500 }}
      />
    </div>
  );
};

export default SearchBar; 