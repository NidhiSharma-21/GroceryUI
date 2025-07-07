import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import theme from '../theme/theme';
import Button from '../components/common/Button';
import QuantitySelector from '../components/cart/QuantitySelector';
import Typography from '../components/common/Typography';
import SectionHeader from '../components/common/SectionHeader';
import Modal from '../components/common/Modal';

const products = [
  { id: 1, name: 'Organic Bananas', price: 4.99, image: '/src/assets/banana.png', weight: '7pcs, Price', description: 'Bananas are rich in potassium and fiber. They may help prevent asthma, cancer, high blood pressure, diabetes, cardiovascular disease, and digestive problems.', nutrition: 100 },
  { id: 2, name: 'Red Apple', price: 4.99, image: '/src/assets/apple.png', weight: '1kg, Price', description: 'Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.', nutrition: 100 },
  { id: 3, name: 'Red Capsicum', price: 4.99, image: '/src/assets/redcapsicum.png', weight: '1kg, Price', description: 'Red capsicum is high in vitamin C and antioxidants. It supports immune health and skin health.', nutrition: 100 },
  { id: 4, name: 'Ginger', price: 4.99, image: '/src/assets/ginger.png', weight: '1kg, Price', description: 'Ginger is known for its anti-inflammatory and antioxidant effects.', nutrition: 100 },
  { id: 5, name: 'Beef Bone', price: 4.99, image: '/src/assets/chicken.png', weight: '1kg, Price', description: 'Beef bone is rich in collagen and minerals.', nutrition: 100 },
  { id: 6, name: 'Broiler Chicken', price: 4.99, image: '/src/assets/meat.png', weight: '1kg, Price', description: 'Broiler chicken is a good source of protein.', nutrition: 100 },
  { id: 7, name: 'Egg Noodle', price: 3.49, image: '/src/assets/egg-noodle.png', weight: '500g, Price', description: 'Egg noodles are a versatile and delicious base for many dishes.', nutrition: 100 },
  { id: 8, name: 'Pepsi', price: 1.99, image: '/src/assets/pepsi.png', weight: '1.25L, Price', description: 'Pepsi is a popular carbonated soft drink.', nutrition: 100 },
  { id: 9, name: 'Egg Chicken Red', price: 5.49, image: '/src/assets/eggchickenred.png', weight: '1kg, Price', description: 'Egg Chicken Red is a protein-rich food item.', nutrition: 100 },
  { id: 10, name: 'Sprite', price: 1.99, image: '/src/assets/sprite.png', weight: '1.25L, Price', description: 'Sprite is a refreshing lemon-lime flavored soft drink.', nutrition: 100 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const section = location.state?.section || '';
  const product = products.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const [showDetail, setShowDetail] = useState(true);
  const { addToCart } = useCart();
  const [showNutritionOptions, setShowNutritionOptions] = useState(false);
  const [selectedNutrition, setSelectedNutrition] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.startsWith('/product/')) {
        navigate('/home', { replace: true });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  if (!product) return <div className="p-4">Product not found.</div>;

  const totalPrice = (product.price * qty).toFixed(2);
  const totalNutrition = product.nutrition * qty;

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: 'Gilroy', maxWidth: 430, margin: '0 auto', background: theme.colors.white }}>
      {/* Image Section */}
      <div className="relative w-full flex flex-col items-center pb-4" style={{ width: '100vw', maxWidth: 430, margin: '0 auto', height: 371 }}>
        {/* Sticky Top Bar */}
        <div className="sticky top-0 left-0 flex flex-row items-center justify-between w-full px-4 pt-4 mb-2" style={{ zIndex: 10 }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img src="/src/assets/back.png" alt="back" style={{ width: 18, height: 18 }} />
          </button>
                      <button style={{ background: 'none', border: 'none', padding: 0 }}>
              <img src="/src/assets/export.png" alt="export" style={{ width: 18, height: 18 }} />
          </button>
        </div>
        {/* Large Rounded Rectangle Background */}
        <img 
          src="/src/assets/productImageBg.png" 
          alt="background" 
          className="absolute" 
          style={{ left: '50%', top: 0, transform: 'translateX(-50%)', width: '100vw', maxWidth: 430, height: 371, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, objectFit: 'cover', zIndex: 1, position: 'absolute' }}
        />
        {/* Product Image Centered */}
        <div className="relative flex justify-center items-center w-full" style={{ height: 371, zIndex: 2 }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: 240, height: 180, objectFit: 'contain', marginTop: 60, marginBottom: 24 }} 
          />
        </div>
        {/* Dots (if carousel) */}
        <div className="flex justify-center mt-2 mb-2" style={{ zIndex: 3 }}>
          <span className="inline-block rounded-full bg-[#53B175] w-2 h-2 mx-1" />
          <span className="inline-block rounded-full bg-[#E2E2E2] w-2 h-2 mx-1" />
        </div>
      </div>
      {/* Product Info */}
      <div className="px-6 pt-4 pb-2 w-full flex flex-col items-start mx-2">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-start" style={{ flex: 1 }}>
            <Typography variant="h2" className="mb-1" style={{ fontWeight: 700, textAlign: 'left', width: '100%' }}>{product.name}</Typography>
            <Typography variant="body" className="mb-4" color={theme.colors.gray} style={{ fontSize: 18, fontWeight: 500, textAlign: 'left', width: '100%' }}>{product.weight}</Typography>
          </div>
          <div className="flex flex-col items-end justify-start" style={{ minWidth: 32 }}>
            <img src="/src/assets/favorite.png" alt="favorite" style={{ width: 24, height: 24, marginTop: 4 }} />
          </div>
        </div>
        {/* Quantity Selector and Price below, price right-aligned below favorite */}
        <div className="flex flex-row items-center w-full mb-4 mt-2 justify-between">
          <QuantitySelector value={qty} onChange={setQty} />
          <Typography variant="h2" style={{ fontWeight: 700, fontSize: 28 }}>${totalPrice}</Typography>
        </div>
      </div>
      {/* Accordion Sections */}
      <div className="px-6 w-full">
        {/* Product Detail Accordion */}
        <div className="border-t border-b border-[#E2E2E2] py-4 mb-2">
          <button className="flex items-center w-full justify-between" onClick={() => setShowDetail(d => !d)} style={{ background: 'none', border: 'none', padding: 0 }}>
            <Typography variant="h3" style={{ fontWeight: 500 }}>Product Detail</Typography>
            <img src="/src/assets/downarrow.png" alt="down arrow" style={{ width: 16, height: 16, marginLeft: 8 }} />
          </button>
          {showDetail && (
            <Typography variant="body" color={theme.colors.gray} className="mt-2" style={{ fontWeight: 500, fontSize: 16 }}>{product.description}</Typography>
          )}
        </div>
        {/* Nutritions */}
        <div className="flex items-center justify-between py-4 border-b border-[#E2E2E2]">
          <Typography variant="h3" style={{ fontWeight: 500 }}>Nutritions</Typography>
          <div className="bg-[#F2F3F2] rounded-lg px-3 py-1 text-xs ml-auto" style={{ color: theme.colors.gray, fontWeight: 500 }}>{totalNutrition}gr</div>
                      <img src="/src/assets/rightarrow.png" alt="right arrow" style={{ width: 16, height: 16, marginLeft: 8, cursor: 'pointer' }} onClick={() => setShowNutritionOptions(true)} />
        </div>
        {/* Review */}
        <div className="flex items-center justify-between py-4 border-b border-[#E2E2E2]">
          <Typography variant="h3" style={{ fontWeight: 500 }}>Review</Typography>
          <div className="flex items-center gap-1 ml-auto">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#F3603F', fontSize: 28, fontWeight: 900 }}>★</span>
            ))}
          </div>
                      <img src="/src/assets/rightarrow.png" alt="right arrow" style={{ width: 16, height: 16, marginLeft: 8 }} />
        </div>
      </div>
      {/* Add to Basket Button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-6 pb-6 bg-white z-50" style={{ boxSizing: 'border-box' }}>
        <Button
          className="w-full"
          style={{ background: theme.colors.primary, color: '#fff', fontWeight: 700, fontSize: 20, borderRadius: 20, padding: '20px 0' }}
          onClick={() => { addToCart({ id: product.id, name: product.name, image: product.image, price: product.price, weight: product.weight }, qty); navigate('/cart'); }}
        >
          Add To Basket
        </Button>
      </div>
      <div style={{ height: 90 }} /> {/* Spacer for fixed button */}
      {/* Nutrition Options Modal */}
      <Modal open={showNutritionOptions} onClose={() => setShowNutritionOptions(false)}>
        <div className="p-6">
          <h2 className="text-lg font-medium mb-4">Select Nutrition Option</h2>
          {['High Protein', 'Low Sugar', 'Low Fat', 'High Fiber'].map(option => (
            <div key={option} className="flex items-center mb-2">
              <input
                type="radio"
                id={option}
                name="nutritionOption"
                value={option}
                checked={selectedNutrition === option}
                onChange={() => setSelectedNutrition(option)}
                className="mr-2"
              />
              <label htmlFor={option} className="text-base">{option}</label>
            </div>
          ))}
          <button
            className="mt-4 w-full rounded-xl font-semibold shadow-lg py-2"
            style={{ background: theme.colors.primary, color: theme.colors.white, fontSize: 16, fontFamily: 'Gilroy', cursor: 'pointer' }}
            onClick={() => setShowNutritionOptions(false)}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail; 