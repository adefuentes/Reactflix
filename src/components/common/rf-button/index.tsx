import * as React from 'react';
import './style.scss';

export type RsButtonProps = {
  onClick?: () => void;
  text: string;
};

export const RsButton = ({
  onClick,
  text
}: RsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="Rs-Button"
    >{text}</button>
  )
}
