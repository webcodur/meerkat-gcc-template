import { ReactNode } from 'react';
import Link from 'next/link';

interface MetallicButtonProps {
  href: string;
  children: ReactNode;
}

export default function MetallicButton({ href, children }: MetallicButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-6 py-3 mt-4
        bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700
        text-white rounded-lg
        border border-blue-300/50
        shadow-[0_0_15px_rgba(59,130,246,0.2)]
        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
        transition-all duration-300"
    >
      {children}
    </Link>
  );
}
