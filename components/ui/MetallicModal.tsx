'use client';

import { ReactNode } from 'react';

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}
        >
            <div 
                className="relative w-80 translate-z-0 border-2 border-white/80 bg-gradient-to-br from-gray-300 via-white to-gray-200 p-8 shadow-[0_0_25px_8px_rgba(255,255,255,0.2)]"
                style={{ willChange: 'transform' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute inset-0 bg-white/5" />
                
                <button
                    onClick={onClose}
                    className="absolute end-4 top-4 flex h-8 w-8 translate-z-0 items-center justify-center rounded-full border border-white/50 bg-gradient-to-br from-gray-200 via-white to-gray-100 text-gray-700 transition-transform hover:scale-105 cursor-pointer"
                    style={{ willChange: 'transform' }}
                    aria-label="Close"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <h2 className="relative mb-8 text-2xl font-bold text-gray-700 text-center">
                    {title}
                </h2>

                {children}
            </div>
        </div>
    );
} 