import React from 'react';

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
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  min,
  max,
  name,
  step,
  required,
  text,
  value,
  checked,
  onChange,
}: InputProps) => {
  return (
    <label className={css.root}>
      <div className={css.text}>{text}</div>
      <input
        className={css.input}
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        name={name}
        checked={checked}
        step={step}
        required={required}
      />
    </label>
  );
};

export default Input;
