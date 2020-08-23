import * as React from 'react';
import './style.scss';
import {RsButtonProps} from "../rf-button";

export const DefaultButton = ({
  onClick,
  text
}: RsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="Default-button"
    >{text}</button>
  );
};
