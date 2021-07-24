import * as React from "react";

export const TabSelector = ({ isActive, children, onClick, name }) => (
  <button
    className={`commontab ${isActive ? "active" : ""}`}
    onClick={onClick}
    name={name}
  >
    {children}
  </button>
);
