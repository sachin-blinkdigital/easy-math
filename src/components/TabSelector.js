import * as React from "react";

export const TabSelector = ({ isActive, children, onClick, name }) => (
  <button
    className={`${isActive ? "active" : ""}`}
    onClick={onClick}
    name={name}
  >
    {children}
  </button>
);
