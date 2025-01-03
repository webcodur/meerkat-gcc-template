export const styles = {
    base: `
    inline-flex flex-col rounded-lg
    bg-gradient-to-b from-gray-800 to-gray-900
    border border-gray-600
    shadow-sm
    overflow-hidden
    min-w-[300px]
  `,

    location: `
    w-full px-4 py-2.5
    bg-gradient-to-b from-gray-700 to-gray-800
    text-gray-200 text-center
    font-sans font-medium text-base
    border-b border-gray-600
  `,

    timeContainer: `
    flex flex-col items-center gap-2 px-4 py-3
    bg-gradient-to-b from-gray-700 to-gray-800
    w-full
  `,

    date: `
    w-[260px] px-3 py-1.5 rounded-md text-center
    bg-gradient-to-b from-gray-200 to-gray-100
    text-gray-800
    font-sans font-medium text-sm
    border border-gray-300
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]
  `,

    time: `
    w-[260px] px-5 py-2.5 rounded-md text-center
    bg-gradient-to-b from-slate-100 via-white to-slate-200
    text-gray-800
    font-sans font-bold text-3xl
    border border-gray-300
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_1px_1px_rgba(0,0,0,0.1)]
  `,
} as const;
