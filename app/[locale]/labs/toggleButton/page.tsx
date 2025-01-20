'use client';

import React, { useState } from 'react';
import Switch from '@/components/ui/toggleButton/ToggleButton';
import MetalSwitch from '@/components/ui/toggleButton/MetalSwitch';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <Switch checked={isChecked} onChange={handleChange} />
      <MetalSwitch checked={isChecked} onChange={handleChange} />
    </>
  );
};

export default ToggleButton;
