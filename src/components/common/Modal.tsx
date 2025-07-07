import React, { useEffect } from 'react';
import theme from '../../theme/theme';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, className = '' }) => {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 h-screen flex  items-end w-full justify-center"
      style={{ background: 'rgba(0,0,0,0.3)', fontFamily: 'Roboto' }}
      onClick={onClose}
    >
      <div
        className={`bg-white  w-full rounded-2xl shadow-lg relative ${className}`}
        style={{ minWidth: 320, maxWidth: 414, minHeight: 100 }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal; 