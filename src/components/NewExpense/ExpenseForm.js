import React, { useState } from "react";
import { ExpenseFormItem } from "./ExpenseFormItem";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  function showForm () {
    setFormVisibility(true);
  };
  function hideForm () {
    setFormVisibility(!formVisibility)
  }

  return (
    <div>
      {formVisibility && <ExpenseFormItem />}
      <button onClick={showForm} type="submit">
        Add expense
      </button>
      {formVisibility && <button onClick={hideForm}>Cancel</button> }
    </div>
  );
};
