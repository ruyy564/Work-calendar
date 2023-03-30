import React, { memo } from 'react';

import getClasses from '../../../helpers/getClasses';

import css from './index.module.css';

type InputProps = {
  type?: string;
  error?: boolean;
  errorMessage?: string | null;
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
    error,
    errorMessage,
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
      <div className={css.root}>
        {error && <div className={css.errorText}>* {errorMessage}</div>}
        <div
          className={
            disabled ? getClasses(css.wrapper, css.disable) : css.wrapper
          }
        >
          <div className={css.text}>{text}</div>
          <input
            className={error ? css.error : ''}
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
        </div>
      </div>
    );
  }
);

export const InputRadio = memo(
  ({ name, text, value, checked, disabled, onChange, onClick }: InputProps) => {
    return (
      <label
        className={
          disabled ? getClasses(css.wrapper, css.disable) : css.wrapper
        }
      >
        <div className={css.text}>{text}</div>
        <input
          type="radio"
          value={value}
          onChange={onChange}
          onClick={onClick}
          name={name}
          checked={checked}
          disabled={disabled}
        />
      </label>
    );
  }
);

export default Input;
