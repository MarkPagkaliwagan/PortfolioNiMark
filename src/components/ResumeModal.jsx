import React from 'react';
import { X } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative bg-black rounded-xl border border-green-400 max-w-4xl w-full shadow-[0_0_20px_#00ff95]">
        <button
          className="absolute top-2 right-2 text-green-300 hover:text-white transition"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <iframe
          src="/ResumeNiMark.pdf"
          title="Mark Jeus Resume"
          className="w-full h-[80vh] rounded-b-xl"
        />
      </div>
    </div>
  );
}
