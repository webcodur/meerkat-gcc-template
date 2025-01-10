'use client';

import React, { useState } from 'react';
import Switch from '@/components/ui/toggleButton/toggleButton';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return <Switch checked={isChecked} onChange={handleChange} />;
};

export default ToggleButton;
