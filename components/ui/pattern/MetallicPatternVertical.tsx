const MetallicPatternVertical = () => {
  return (
    <div className="relative p-12 w-96 bg-[#9c9ba1] flex flex-col"
      style={{
        boxShadow: `
          inset hsla(0,0%,15%,1) 0 0px 0px 4px,
          inset hsla(0,0%,15%,.8) 0 -1px 5px 4px,
          inset hsla(0,0%,0%,.25) 0 -1px 0px 7px,
          inset hsla(0,0%,100%,.7) 0 2px 1px 7px
        `
      }}>
      <div className="absolute inset-0 z-0"
        style={{
          background: `#9c9ba1`,
          backgroundSize: '10rem',
          backgroundImage: `
            -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%),
            -webkit-repeating-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,0) 4%, hsla(0,0%,0%,.03) 4.5%),
            -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
            linear-gradient(180deg, hsl(0,0%,78%) 0%, hsl(0,0%,90%) 47%, hsl(0,0%,78%) 53%, hsl(0,0%,70%)100%)
          `
        }}>
      </div>
    </div>
  );
};

export default MetallicPatternVertical;