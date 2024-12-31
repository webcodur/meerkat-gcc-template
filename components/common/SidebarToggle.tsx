import { useAtom } from 'jotai';
import { sidebarOpenAtom } from '@/atoms';

const iconProps = {
    className: "h-4 w-4 text-gray-600",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
} as const;

const pathProps = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
} as const;

export default function SidebarToggle() {
    const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);

    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed top-4 left-4 z-50 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
                isOpen ? 'opacity-100' : 'opacity-60'
            }`}
            aria-label="사이드바 토글"
        >
            {isOpen ? (
                <svg {...iconProps}>
                    <path
                        {...pathProps}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            ) : (
                <svg {...iconProps}>
                    <path
                        {...pathProps}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            )}
        </button>
    );
}
