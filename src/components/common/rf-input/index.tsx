import * as React from "react";
import './style.scss';

export type RfInputProps = {
  secureTextEntry?: boolean;
  extraStyle?: React.CSSProperties;
  placeholder: string;
  onChange: (newValue: string) => void;
  value: string;
};

export const RfInput = ({
  secureTextEntry,
  extraStyle,
  placeholder,
  onChange,
  value
}: RfInputProps) => {

  const _onChange = (value: string) => {
    if(onChange) onChange(value);
  }

  return (
    <div className="RsInput-Wrapper">
      <input
        placeholder={placeholder}
        style={extraStyle}
        value={value}
        onChange={(e) => _onChange(e.target.value)}
        type={!!secureTextEntry ? 'password' : 'text'}
      />
    </div>
  );
}
