import React, { useState, useRef, useEffect } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  total: number;
  onPlaceOrder: () => void;
}

function CheckoutModal({ open, onClose, total, onPlaceOrder }: CheckoutModalProps) {
  const [deliveryDropdownOpen, setDeliveryDropdownOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState('Select Method');
  const deliveryOptions = ['Door Delivery', 'Pick Up'];
  const deliveryRef = useRef<HTMLDivElement | null>(null);
  const [promoDropdownOpen, setPromoDropdownOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState('Pick discount');
  const promoOptions = ['SAVE10', 'FREESHIP', 'WELCOME5'];
  const promoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (deliveryRef.current && !deliveryRef.current.contains(event.target as Node)) {
        setDeliveryDropdownOpen(false);
      }
    }
    if (deliveryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [deliveryDropdownOpen]);

  useEffect(() => {
    function handleClickOutsidePromo(event: MouseEvent) {
      if (promoRef.current && !promoRef.current.contains(event.target as Node)) {
        setPromoDropdownOpen(false);
      }
    }
    if (promoDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutsidePromo);
    } else {
      document.removeEventListener('mousedown', handleClickOutsidePromo);
    }
    return () => document.removeEventListener('mousedown', handleClickOutsidePromo);
  }, [promoDropdownOpen]);

  if (!open) return null;
  return (
    <Modal  open={open} onClose={onClose}>
      <div className="relative z-50  right-0 bottom-0 w-full max-w-[414px] bg-white rounded-t-3xl p-8 pb-8 animate-slideup" style={{ fontFamily: 'Roboto', minHeight: 520, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
        {/* Close Icon */}
        <button onClick={onClose} className="absolute right-6 top-6" style={{ background: 'none', border: 'none', padding: 0 }}>
          <img src="/src/assets/cart/cross.png" alt="close" style={{ width: 24, height: 24 }} />
        </button>
        {/* Title */}
        <div className="font-bold text-2xl mb-6" style={{ color: '#181725' }}>Checkout</div>
        {/* Delivery */}
        <div className="flex items-center justify-between py-4 border-b relative" style={{ borderColor: '#E2E2E2' }} ref={deliveryRef}>
          <span className="text-[#7C7C7C] text-base font-semibold">Delivery</span>
          <span className="flex items-center cursor-pointer select-none" onClick={() => setDeliveryDropdownOpen(v => !v)}>
            <span className="text-base font-semibold" style={{ color: '#181725' }}>{selectedDelivery}</span>
            <img src="/src/assets/productdetail/rightarrow.png" alt="right arrow" style={{ width: 14, height: 14, marginLeft: 4 }} />
          </span>
          {deliveryDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded-lg shadow-lg z-10" style={{ borderColor: '#E2E2E2' }}>
              {deliveryOptions.map(option => (
                <div
                  key={option}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selectedDelivery === option ? 'font-bold text-[#53B175]' : ''}`}
                  onClick={() => { setSelectedDelivery(option); setDeliveryDropdownOpen(false); }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Payment */}
        <div className="flex items-center justify-between py-4 border-b" style={{ borderColor: '#E2E2E2' }}>
          <span className="text-[#7C7C7C] text-base font-semibold">Payment</span>
          <span className="flex items-center">
            <img src="/src/assets/cart/card.png" alt="payment" style={{ width: 32, height: 20, marginRight: 8 }} />
            <img src="/src/assets/productdetail/rightarrow.png" alt="right arrow" style={{ width: 14, height: 14, marginLeft: 0 }} />
          </span>
        </div>
        {/* Promo Code */}
        <div className="flex items-center justify-between py-4 border-b relative" style={{ borderColor: '#E2E2E2' }} ref={promoRef}>
          <span className="text-[#7C7C7C] text-base font-semibold">Promo Code</span>
          <span className="flex items-center cursor-pointer select-none" onClick={() => setPromoDropdownOpen(v => !v)}>
            <span className="text-base font-semibold" style={{ color: '#181725' }}>{selectedPromo}</span>
            <img src="/src/assets/productdetail/rightarrow.png" alt="right arrow" style={{ width: 14, height: 14, marginLeft: 4 }} />
          </span>
          {promoDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded-lg shadow-lg z-10" style={{ borderColor: '#E2E2E2' }}>
              {promoOptions.map(option => (
                <div
                  key={option}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selectedPromo === option ? 'font-bold text-[#53B175]' : ''}`}
                  onClick={() => { setSelectedPromo(option); setPromoDropdownOpen(false); }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Total Cost */}
        <div className="flex items-center justify-between py-4 border-b" style={{ borderColor: '#E2E2E2' }}>
          <span className="text-[#7C7C7C] text-base font-semibold">Total Cost</span>
          <span className="text-lg font-bold" style={{ color: '#181725' }}>${total.toFixed(2)}</span>
        </div>
        {/* Terms */}
        <div className="text-[#7C7C7C] text-xs mt-4 mb-4">
          By placing an order you agree to our <span className="font-bold" style={{ color: '#181725' }}>Terms And Conditions</span>
        </div>
        {/* Place Order Button */}
        <Button
          className="w-full mt-8 mb-0 rounded-2xl font-bold"
          style={{ fontSize: 20, fontWeight: 700, background: '#53B175', borderRadius: 20, height: 60, color: '#fff' }}
          onClick={onPlaceOrder}
        >
          Place Order
        </Button>
      </div>
    </Modal>
  );
}

export default CheckoutModal;