import React, { memo } from 'react';

import css from './index.module.css';

type InputProps = {
  type: string;
  text: string;
  name?: string;
  value?: string | number;
  checked?: boolean;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onClick?: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Input = memo(
  ({
    type,
    min,
    max,
    name,
    step,
    required,
    text,
    value,
    checked,
    disabled,
    onChange,
    onClick,
  }: InputProps) => {
    return (
      <label
        className={disabled ? `${css.root} ${css.disable}` : `${css.root}`}
      >
        <div className={css.text}>{text}</div>
        <input
          className={css.input}
          type={type}
          value={value}
          onChange={onChange}
          onClick={onClick}
          min={min}
          max={max}
          name={name}
          checked={checked}
          step={step}
          required={required}
          disabled={disabled}
        />
      </label>
    );
  }
);

export default Input;
