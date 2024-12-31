'use client';

import { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';

interface MetallicModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export default function MetallicModal({ isOpen, onClose, title, children }: MetallicModalProps) {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
            style={{ willChange: 'backdrop-filter' }}
        >
            <div 
                className="relative w-80 translate-z-0 border-2 border-white/80 bg-gradient-to-br from-gray-300 via-white to-gray-200 p-8 shadow-[0_0_25px_8px_rgba(255,255,255,0.2)]"
                style={{ willChange: 'transform' }}
                onClick={(e) => e.stopPropagation()}
            >
                <IoClose 
                    size={20}
                    className="absolute end-4 top-4 cursor-pointer text-gray-700 hover:scale-105 transition-transform"
                    onClick={onClose}
                />

                <h2 className="relative mb-8 text-2xl font-bold text-gray-700 text-center">
                    {title}
                </h2>

                {children}
            </div>
        </div>
    );
} 