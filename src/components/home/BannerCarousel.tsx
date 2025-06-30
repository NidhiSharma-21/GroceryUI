import React from 'react';

interface BannerCarouselProps {
  images: string[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ images }) => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`banner-${idx}`}
          className="rounded-lg"
          style={{ height: 120, minWidth: 320, objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};

export default BannerCarousel; 