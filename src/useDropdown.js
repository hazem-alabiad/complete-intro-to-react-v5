import _ from "lodash";
import React, { useState } from "react";

export default function useDropdown(label, initialState, options) {
  const [state, setState] = useState(initialState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
      >
        <option value="All" key="All">
          All
        </option>
        {_.map(options, (option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
}
