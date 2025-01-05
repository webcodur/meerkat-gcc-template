const MetalicPatternBrushed = () => {
  return (
    <div className="bg-gray-300"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent 0px, rgba(0,0,0,0.1) 5px),
          repeating-linear-gradient(-45deg, transparent 0px, rgba(0,0,0,0.1) 5px)
        `
      }}>
      <div className="relative p-24">
        <h1 className="absolute top-0 left-0 p-2.5 text-xl"></h1>
      </div>
    </div>
  );
};

export default MetalicPatternBrushed;