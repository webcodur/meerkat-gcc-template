import React from 'react';
import styles from './MetalSwitch.module.css';

interface MetalSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  disabled?: boolean;
}

const MetalSwitch: React.FC<MetalSwitchProps> = ({
  checked = false,
  onChange,
  id = 'switch1',
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <span className={styles.switch}>
      <span className={styles['switch-border1']}>
        <span className={styles['switch-border2']}>
          <input
            checked={checked}
            type="checkbox"
            id={id}
            onChange={handleChange}
            disabled={disabled}
          />
          <label htmlFor={id}></label>
          <span className={styles['switch-top']}></span>
          <span className={styles['switch-shadow']}></span>
          <span className={styles.handle}></span>
          <span className={styles['switch-handle-left']}></span>
          <span className={styles['switch-handle-right']}></span>
          <span className={styles['switch-handle-top']}></span>
          <span className={styles['switch-handle-bottom']}></span>
          <span className={styles['switch-handle-base']}></span>
          <span className={`${styles['switch-led']} ${styles['switch-led-green']}`}>
            <span className={styles['switch-led-border']}>
              <span className={styles['switch-led-light']}>
                <span className={styles['switch-led-glow']}></span>
              </span>
            </span>
          </span>
          <span className={`${styles['switch-led']} ${styles['switch-led-red']}`}>
            <span className={styles['switch-led-border']}>
              <span className={styles['switch-led-light']}>
                <span className={styles['switch-led-glow']}></span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  );
};

export default MetalSwitch;
