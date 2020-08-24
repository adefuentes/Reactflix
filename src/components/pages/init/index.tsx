import './style.scss';
import React from "react";
import {CircularProgress} from "@material-ui/core";

export function InitPage() {
  return (
    <div className="Init-Container">
      <CircularProgress />
    </div>
  );
}
