// Modal.js
import type {ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}

const Modal = ({isOpen, onClose, children}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full max-w-lg rounded-lg bg-white p-6 shadow-2xl md:h-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute left-3 top-3 text-3xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
