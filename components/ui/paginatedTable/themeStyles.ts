export const themeStyles = {
  dark: {
    table: {
      wrapper: "overflow-x-auto rounded-xl bg-slate-800 p-0.5 relative after:absolute after:inset-0 after:bg-[url('/assets/patterns/metal-texture.svg')] after:opacity-[0.15] after:mix-blend-overlay after:pointer-events-none",
      header: "bg-slate-700 border-b border-blue-300/10",
      headerText: "font-bold text-[1.05rem] text-blue-300",
      row: "hover:bg-slate-700 border-b border-blue-300/10 transition-colors",
      cell: "text-slate-300 py-3"
    },
    pagination: {
      wrapper: "bg-slate-800 relative after:absolute after:inset-0 after:bg-[url('/assets/patterns/metal-texture.svg')] after:opacity-[0.15] after:mix-blend-overlay after:pointer-events-none",
      button: "join-item btn w-[3rem] bg-slate-700 text-blue-300 border-blue-300/20 hover:bg-slate-600 transition-colors",
      activeButton: "bg-blue-600 text-white border-blue-300/50"
    }
  },
  light: {
    table: {
      wrapper: "overflow-x-auto rounded-xl bg-gray-100 p-0.5 border border-gray-200 relative after:absolute after:inset-0 after:bg-[url('/assets/patterns/metal-texture.svg')] after:opacity-[0.1] after:mix-blend-overlay after:pointer-events-none",
      header: "bg-white border-b border-gray-200",
      headerText: "font-bold text-[1.05rem] text-gray-700",
      row: "hover:bg-gray-50 border-b border-gray-200 transition-colors",
      cell: "text-gray-700 py-3"
    },
    pagination: {
      wrapper: "bg-white relative after:absolute after:inset-0 after:bg-[url('/assets/patterns/metal-texture.svg')] after:opacity-[0.1] after:mix-blend-overlay after:pointer-events-none",
      button: "join-item btn w-[3rem] bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 transition-colors",
      activeButton: "bg-blue-600 text-white border-blue-300"
    }
  }
} as const 