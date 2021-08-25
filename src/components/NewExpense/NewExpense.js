import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
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
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      {!formVisibility && <button onClick={showForm}>Dodaj</button>}
      {formVisibility && (
        <ExpenseForm
          onCancel={hideForm}
          onSaveExpenseDataHandler={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
