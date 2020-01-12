import React, { useState } from "react";
const useDropDown = (label, defaultState, options) => {
  const [state, useState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        vale={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={options.length === 0}
          >
              <option>All</option>
              {options.map(item) => (
              <option ket={item} value={item}>{item}</option>
              )}
      </select>
    </label>
  );
};
