import React from 'react';
import {ExpenseForm} from './ExpenseForm'
import './NewExpense.css';

export const NewExpense = (props) => {

  const saveExpenseData = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataHandler={saveExpenseData}/>
    </div>
  );
};
