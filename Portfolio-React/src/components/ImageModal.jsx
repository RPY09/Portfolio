import { useEffect } from 'react';
import { X } from 'lucide-react';
import './ImageModal.css';

export default function ImageModal({ src, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="img-modal__backdrop" onClick={onClose}>
      <button className="img-modal__close" onClick={onClose} aria-label="Close modal">
        <X size={36} />
      </button>
      <div className="img-modal__content" onClick={e => e.stopPropagation()}>
        <img src={src} alt="Fullscreen View" className="img-modal__img" />
      </div>
    </div>
  );
}
