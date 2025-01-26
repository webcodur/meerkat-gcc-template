'use client';

import React, { useState } from 'react';
import MetalSwitch from '@/components/ui/toggleButton/MetalSwitch';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <MetalSwitch checked={isChecked} onChange={handleChange} />
    </>
  );
};

export default ToggleButton;
