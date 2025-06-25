import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (typeof window === 'undefined') return null;
  return createPortal(
    <div className={`fixed inset-0 z-40 bg-black/40 flex items-end ${open ? '' : 'pointer-events-none'}`}
      aria-modal="true" role="dialog"
      onClick={onClose}
    >
      <div
        className={`w-full bg-white rounded-t-2xl shadow-lg max-h-[70vh] overflow-y-auto transform transition-all duration-300
          ${open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default BottomSheet; 