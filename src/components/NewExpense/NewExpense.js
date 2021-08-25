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

  // const saveExpenseData = (enteredExpense) => {
  //   const expenseData = {
  //     ...enteredExpense,
  //     id: Math.random().toString(),
  //   };
  //   console.log(expenseData);
  //   props.onAddExpense(expenseData);
  // };

  {
    /*
    {formVisibility && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      )}
   <button onClick={showForm} type="submit">
    Add expense
    </button>
    {formVisibility && (
      <button type="button" onClick={hideForm}>
        Cancel
      </button>
    )}
  */
  }

  return (
    // <div className="new-expense">
    // <button onClick={showForm} type="submit">
    //   Add expense
    //   </button>
    //   { formVisibility && <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />}
    //   </div>
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
