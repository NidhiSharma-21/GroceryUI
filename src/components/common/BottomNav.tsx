import React from 'react';

const navItems = [
  { label: 'Shop', icon: '/src/assets/bottomnav/home.png', path: '/home' },
  { label: 'Explore', icon: '/src/assets/bottomnav/explore.png', path: '/explore' },
  { label: 'Cart', icon: '/src/assets/bottomnav/cart.png', path: '/cart' },
  { label: 'Favourite', icon: '/src/assets/bottomnav/favorite.png', path: '/favourite' },
  { label: 'Account', icon: '/src/assets/bottomnav/account.png', path: '/account' },
];

interface BottomNavProps {
  active: string;
  onNavigate: (path: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ active, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[375px] bg-white flex justify-between items-center px-2 py-2 shadow-lg z-40" style={{fontFamily: 'Roboto', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
      {navItems.map(item => (
        <button
          key={item.label}
          className="flex flex-col items-center flex-1"
          onClick={() => onNavigate(item.path)}
        >
          <img src={item.icon} alt={item.label} style={{height: 24, opacity: active === item.label ? 1 : 0.5}} />
          <span className="text-xs mt-1" style={{color: '#181725', fontWeight: 700}}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav; 