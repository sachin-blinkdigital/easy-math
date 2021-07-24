import React from "react";
import Select from "react-select";

export default function Dropdown({ selectedOption, onChange, options }) {
  return (
    <Select value={selectedOption} onChange={onChange} options={options} />
  );
}
