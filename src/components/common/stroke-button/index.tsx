import {RsButtonProps} from "../rf-button";
import * as React from "react";
import './style.scss';

export const StrokeButton = ({
  onClick,
  text
}: RsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="Stroke-button"
    >{text}</button>
  );
};
