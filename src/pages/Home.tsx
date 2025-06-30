import React, { useState, useEffect } from 'react';
import ProductCard from '../components/home/ProductCard';
import BottomNav from '../components/common/BottomNav';
import SearchBar from '../components/common/SearchBar';
import CategoryChip from '../components/home/CategoryChip';
import SectionHeader from '../components/common/SectionHeader';
import BannerCarousel from '../components/home/BannerCarousel';
import GroceriesCategoryCard from '../components/home/GroceriesCategoryCard';
import { useNavigate } from 'react-router-dom';
import theme from '../theme/theme';
import { useCart } from '../context/CartContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster, toast } from 'react-hot-toast';

const categories = [
  { name: 'Pulses', image: '/src/assets/home/pulses.png', bg: '#F8A44C1A' },
  { name: 'Rice', image: '/src/assets/home/rice.png', bg: '#53B1751A' },
  { name: 'Meat', image: '/src/assets/home/meat.png', bg: '#F7A5931A' },
];

const exclusive = [
  { id: 1, name: 'Organic Bananas', weight: '7pcs, Price', price: 4.99, image: '/src/assets/home/banana.png' },
  { id: 2, name: 'Red Apple', weight: '1kg, Price', price: 4.99, image: '/src/assets/home/apple.png' },
  { id: 7, name: 'Egg Noodle', weight: '500g, Price', price: 3.49, image: '/src/assets/home/egg-noodle.png' },
  { id: 8, name: 'Pepsi', weight: '1.25L, Price', price: 1.99, image: '/src/assets/home/pepsi.png' },
];

const bestSelling = [
  { id: 3, name: 'Red Capsicum', weight: '1kg, Price', price: 4.99, image: '/src/assets/home/redcapsicum.png' },
  { id: 4, name: 'Ginger', weight: '1kg, Price', price: 4.99, image: '/src/assets/home/ginger.png' },
  { id: 9, name: 'Egg Chicken Red', weight: '1kg, Price', price: 5.49, image: '/src/assets/home/eggchickenred.png' },
  { id: 10, name: 'Sprite', weight: '1.25L, Price', price: 1.99, image: '/src/assets/home/sprite.png' },
];

const groceries = [
  { id: 5, name: 'Beef Bone', weight: '1kg, Price', price: 4.99, image: '/src/assets/home/chicken.png' },
  { id: 6, name: 'Broiler Chicken', weight: '1kg, Price', price: 4.99, image: '/src/assets/home/meat.png' },
];

const banners = [
  '/src/assets/home/homebanner.png',
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2500, // 2.5 seconds per slide
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// Helper function to get slider settings based on number of cards
const getSliderSettings = (numCards: number) => ({
  dots: false,
  arrows: false,
  infinite: numCards > 2,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  swipeToSlide: true,
  autoplay: numCards > 2,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

const Home = () => {
  const { search, setSearch } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/home') {
        navigate('/', { replace: true });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  // Filter logic for all products
  const filterProducts = (list: any[]) =>
    list.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (!selectedCategory || p.name.toLowerCase().includes(selectedCategory?.toLowerCase() ?? ""))
    );

  // Combine all products for search
  const allProducts = [...exclusive, ...bestSelling, ...groceries];
  const searchedProducts = filterProducts(allProducts);

  const showSearchResults = search.trim().length > 0;

  return (
    <div
      className="mx-auto min-h-screen flex flex-col pb-10 overflow-y-auto scrollbar-hide"
      style={{
        maxWidth: 375,
        width: '100vw',
        minHeight: '100dvh',
        background: theme.colors.white,
        fontFamily: 'Gilroy',
      }}
    >
      {/* Location and Logo */}
      <div className="flex flex-col items-center pt-6 pb-2 relative">
        <img src="/src/assets/home/homecarrot.png" alt="logo" style={{height: 32}} />
        <div className="flex items-center gap-1 mt-2">
          <img src="/src/assets/home/location.png" alt="location" style={{height: 18}} />
          <span className="text-sm font-semibold" style={{fontFamily: 'Gilroy', color: '#4C4F4D', fontSize: 18, marginTop: 4}}>Dhaka, Banassre</span>
        </div>
      </div>
      {/* Search Bar */}
      <div className="px-6 mt-2 mb-4">
        <SearchBar value={search} onChange={setSearch} placeholder="Search Store" />
      </div>
      {showSearchResults ? (
        <div className="flex flex-col gap-4 px-6 mb-24">
          {searchedProducts.length === 0 ? (
            <div className="text-center text-gray-400 mt-8" style={{fontFamily: 'Gilroy'}}>No products found.</div>
          ) : (
            // Group search results by section and show section header above each group
            (() => {
              const sectionMap = {
                'Exclusive Offer': exclusive.map(p => p.id),
                'Best Selling': bestSelling.map(p => p.id),
                'Groceries': groceries.map(p => p.id),
              };
              const grouped: Record<string, any[]> = { 'Exclusive Offer': [], 'Best Selling': [], 'Groceries': [] };
              searchedProducts.forEach(product => {
                for (const [section, ids] of Object.entries(sectionMap)) {
                  if (ids.includes(product.id)) {
                    grouped[section].push(product);
                    break;
                  }
                }
              });
              return Object.entries(grouped).map(([section, products]) =>
                products.length > 0 ? (
                  <div key={section}>
                    <SectionHeader title={section} onSeeAll={() => {}} />
                    {products.map((product: any) => (
                      <ProductCard id={product.id} name={product.name} image={product.image} price={product.price} weight={product.weight} onClick={() => navigate(`/product/${product.id}`)} />
                    ))}
                  </div>
                ) : null
              );
            })()
          )}
        </div>
      ) : (
        <>
          {/* Banner Carousel */}
          <div className="px-6 mb-4">
            <BannerCarousel images={banners} />
          </div>
          {/* Exclusive Offer */}
          <SectionHeader title="Exclusive Offer" onSeeAll={() => {}} />
          <div className="px-6 mb-4">
            <Slider {...getSliderSettings(filterProducts(exclusive).length)}>
              {filterProducts(exclusive).map((product, idx, arr) => (
                <div key={product.id} style={{ marginRight: idx !== arr.length - 1 ? 16 : 0 }}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    weight={product.weight}
                    onClick={() => navigate(`/product/${product.id}`, { state: { section: 'Exclusive Offer' } })}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Best Selling */}
          <SectionHeader title="Best Selling" onSeeAll={() => {}} />
          <div className="px-6 mb-4">
            <Slider {...getSliderSettings(filterProducts(bestSelling).length)}>
              {filterProducts(bestSelling).map((product, idx, arr) => (
                <div key={product.id} style={{ marginRight: idx !== arr.length - 1 ? 16 : 0 }}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    weight={product.weight}
                    onClick={() => navigate(`/product/${product.id}`, { state: { section: 'Best Selling' } })}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Groceries Categories */}
          <SectionHeader title="Groceries" onSeeAll={() => {}} />
          <div className="flex gap-3 overflow-x-auto px-6 mb-4 scrollbar-hide" style={{WebkitOverflowScrolling: 'touch'}}>
            {categories.map(cat => (
              <GroceriesCategoryCard
                key={cat.name}
                label={cat.name}
                image={cat.image}
                bg={cat.bg}
                selected={selectedCategory === cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
              />
            ))}
          </div>
          {/* Groceries Products */}
          <div className="px-6 mb-24">
            <Slider {...getSliderSettings(filterProducts(groceries).length)}>
              {filterProducts(groceries).map((product, idx, arr) => (
                <div key={product.id} style={{ marginRight: idx !== arr.length - 1 ? 16 : 0 }}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    weight={product.weight}
                    onClick={() => navigate(`/product/${product.id}`, { state: { section: 'Groceries' } })}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
      {/* Bottom Navigation */}
      <BottomNav active="Shop" onNavigate={path => navigate(path)} />
      <Toaster position="top-right" />
    </div>
  );
};

export default Home;
