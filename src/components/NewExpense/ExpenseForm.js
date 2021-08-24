import React, { useState } from "react";
import { ExpenseFormItem } from "./ExpenseFormItem";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  function showForm() {
    setFormVisibility(true);
  }
  function hideForm() {
    setFormVisibility(!formVisibility);
  }

  function saveExpenseDataHandler(data) {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);

  }

  return (
    <div>
      {formVisibility && <ExpenseFormItem onSaveExpenseData={saveExpenseDataHandler}/>}
      <button onClick={showForm} type="submit">
        Add expense
      </button>
      {formVisibility && (
        <button type="button" onClick={hideForm}>
          Cancel
        </button>
      )}
    </div>
  );
};
