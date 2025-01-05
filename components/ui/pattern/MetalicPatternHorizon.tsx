import React from 'react';

const BrushedMetal = () => {
  return (
    <div 
      className="w-full h-64"
      style={{
        backgroundImage: `
          radial-gradient(
            rgba(180, 180, 180, 0.5),
            rgba(90, 90, 90, 0.4),
            rgba(0, 0, 0, 0.3)
          ),
          linear-gradient(90deg,
            rgba(0, 0, 0, 0.5),
            rgba(91, 91, 91, 0.5),
            rgba(192, 192, 192, 0.4),
            rgba(192, 192, 192, 0.4),
            rgba(192, 192, 192, 0.4),
            rgba(91, 91, 91, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          repeating-linear-gradient(0deg,
            rgba(1, 1, 1, 0.26),
            rgba(189, 189, 189, 0.4) 2.5px
          ),
          repeating-linear-gradient(0deg,
            rgba(23, 23, 23, 0.32),
            rgba(192, 192, 192, 0.4) 2.7px
          ),
          repeating-linear-gradient(0deg,
            rgba(65, 65, 65, 0.6),
            rgba(226, 226, 226, 0.3) 3px
          ),
          repeating-linear-gradient(0deg,
            rgba(95, 95, 95, 0.5),
            rgba(170, 170, 170, 0.26) 4.5px
          )
        `
      }}
    />
  );
};

export default BrushedMetal;