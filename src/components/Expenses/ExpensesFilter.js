import React from "react";

import "./ExpensesFilter.css";

export const ExpensesFilter = (props) => {

  const handleChange = (event) => {
    props.onValueChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtruj po roku:</label>
        <select value={props.selected} onChange={handleChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
