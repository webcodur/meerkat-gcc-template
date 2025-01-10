import React, { CSSProperties } from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const handleChange = () => {
    onChange();
  };

  const toggleStyle: CSSProperties = {
    background: 'linear-gradient(to bottom, #9c9c9c, #f9f9f9)',
    position: 'relative',
    cursor: 'pointer',
  };

  const beforePseudo: CSSProperties = {
    content: "''",
    position: 'absolute',
    width: '156px',
    height: '76px',
    top: '2px',
    left: '2px',
    borderRadius: '38px',
    background: 'linear-gradient(to bottom, #7b7b7b, #ececec)',
    zIndex: 1,
  };

  const afterPseudo: CSSProperties = {
    content: "''",
    position: 'absolute',
    width: '120px',
    height: '48px',
    top: '16px',
    left: '20px',
    borderRadius: '24px',
    backgroundColor: checked ? '#00c0d2' : '#3b3b3d',
    boxShadow: 'inset rgba(0,0,0,.7) 0 6px 12px',
    transition: 'background-color .3s linear',
    zIndex: 1,
  };

  const switchStyle: CSSProperties = {
    display: 'block',
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    position: 'absolute',
    top: '6px',
    left: checked ? '86px' : '6px',
    zIndex: 9,
    background: 'linear-gradient(to bottom, #ddd, #636363)',
    transition: 'left .2s linear',
  };

  const switchAfterStyle: CSSProperties = {
    content: "''",
    position: 'absolute',
    width: '24px',
    height: '24px',
    top: '22px',
    left: '22px',
    borderRadius: '50%',
    background: '#3b3b3d',
    boxShadow: 'inset rgba(0,0,0,.6) 0 3px 6px',
    zIndex: 8,
  };

  const brushedMetalStyle: CSSProperties = {
    display: 'block',
    width: '64px',
    height: '64px',
    position: 'absolute',
    top: '2px',
    left: '2px',
    borderRadius: '50%',
    zIndex: 4,
    backgroundColor: '#a9a9a9',
    backgroundImage: `
      radial-gradient(8% 50% at 50% 0%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
      radial-gradient(12% 50% at 50% 100%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%),
      radial-gradient(50% 7% at 0% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
      radial-gradient(50% 5% at 100% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
      repeating-radial-gradient(100% 100% at 50% 50%, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,0) 3%, hsla(0,0%,0%,.1) 3.5%),
      repeating-radial-gradient(100% 100% at 50% 50%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%,.1) 7.5%),
      repeating-radial-gradient(100% 100% at 50% 50%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%),
      radial-gradient(200% 50% at 50% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%)
    `,
  };

  const brushedMetalBeforeStyle: CSSProperties = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    transform: 'rotate(65deg)',
    backgroundImage: `
      radial-gradient(10% 50% at 50% 0%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
      radial-gradient(10% 50% at 50% 100%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
      radial-gradient(50% 10% at 0% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%),
      radial-gradient(50% 6% at 100% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 100%)
    `,
  };

  const brushedMetalAfterStyle = {
    ...brushedMetalBeforeStyle,
    transform: 'rotate(-65deg)',
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-300">
      <label className="block m-5 w-40 h-20 rounded-full" style={toggleStyle}>
        <input type="checkbox" className="hidden" checked={checked} onChange={handleChange} />
        <div style={beforePseudo} />
        <div style={afterPseudo} />
        <div style={switchStyle}>
          <div style={switchAfterStyle} />
          <div style={brushedMetalStyle}>
            <div style={brushedMetalBeforeStyle} />
            <div style={brushedMetalAfterStyle} />
          </div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
