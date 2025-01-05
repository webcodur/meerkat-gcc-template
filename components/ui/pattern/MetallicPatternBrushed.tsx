interface MetallicPatternBrushedProps {
  children?: React.ReactNode;
  className?: string;
}

const MetallicPatternBrushed = ({ children, className = '' }: MetallicPatternBrushedProps) => {
  const defaultContent = (
    <div className="flex items-center justify-center min-h-[200px]">
      {/* <span className="text-gray-700 font-medium">메탈릭 패턴 영역</span> */}
    </div>
  );

  return (
    <div 
      className={`bg-gradient-to-br from-gray-300 via-white to-gray-200 ${className}`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent 0px, rgba(0,0,0,0.05) 5px),
          repeating-linear-gradient(-45deg, transparent 0px, rgba(0,0,0,0.05) 5px)
        `
      }}
    >
      {children || defaultContent}
    </div>
  );
};

export default MetallicPatternBrushed;