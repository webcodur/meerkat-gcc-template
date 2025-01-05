const MetallicCircleButton = () => {
  return (
    <button 
      className="relative w-64 h-64 leading-[16rem] rounded-full border-none cursor-pointer bg-[hsl(0,0%,90%)]"
      style={{
        boxShadow: `
          inset hsla(0,0%,15%,1) 0 0px 0px 4px,
          inset hsla(0,0%,15%,.8) 0 -1px 5px 4px,
          inset hsla(0,0%,0%,.25) 0 -1px 0px 7px,
          inset hsla(0,0%,100%,.7) 0 2px 1px 7px
        `,
        backgroundImage: `
          -webkit-radial-gradient(50% 0%, 8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
          -webkit-radial-gradient(50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%),
          -webkit-radial-gradient(0% 50%, 50% 7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
          -webkit-radial-gradient(100% 50%, 50% 5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
          -webkit-repeating-radial-gradient(50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%),
          -webkit-repeating-radial-gradient(50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%),
          -webkit-radial-gradient(50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%)
        `
      }}>
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          backgroundImage: `
            -webkit-radial-gradient(50% 0%, 10% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
            -webkit-radial-gradient(50% 100%, 10% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
            -webkit-radial-gradient(0% 50%, 50% 10%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
            -webkit-radial-gradient(100% 50%, 50% 06%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%)
          `,
          transform: 'rotate(65deg)'
        }}
      />
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          backgroundImage: `
            -webkit-radial-gradient(50% 0%, 10% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
            -webkit-radial-gradient(50% 100%, 10% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
            -webkit-radial-gradient(0% 50%, 50% 10%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
            -webkit-radial-gradient(100% 50%, 50% 06%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%)
          `,
          transform: 'rotate(-65deg)'
        }}
      />
      {/* Active state styles */}
      <style jsx>{`
        button:active {
          box-shadow: 
            inset hsla(0,0%,15%,1) 0 0px 0px 4px,
            inset hsla(0,0%,0%,.4) 0 -3px 8px 2px,
            inset hsla(0,0%,0%,.3) 0 3px 8px 2px;
          filter: brightness(0.95);
          background-image:
            -webkit-radial-gradient(50% 0%, 8% 50%, hsla(0,0%,100%,.3) 0%, hsla(0,0%,100%,0) 100%),
            -webkit-radial-gradient(50% 100%, 12% 50%, hsla(0,0%,100%,.3) 0%, hsla(0,0%,100%,0) 100%),
            -webkit-radial-gradient(0% 50%, 50% 7%, hsla(0,0%,100%,.3) 0%, hsla(0,0%,100%,0) 100%),
            -webkit-radial-gradient(100% 50%, 50% 5%, hsla(0,0%,100%,.3) 0%, hsla(0,0%,100%,0) 100%),
            -webkit-repeating-radial-gradient(50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%),
            -webkit-repeating-radial-gradient(50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
            -webkit-radial-gradient(50% 50%, 200% 50%, hsla(0,0%,85%,1) 5%, hsla(0,0%,80%,1) 30%, hsla(0,0%,55%,1) 100%);
        }
      `}</style>
    </button>
  );
};

export default MetallicCircleButton;