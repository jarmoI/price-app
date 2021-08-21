import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = () => {


  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('')

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    console.log(title);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value)
  }

  function dateChangeHandler(event) {
    setDate(event.target.value)
  }

  return (
    <form>
      <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
      <label>Amount</label>
      <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
    </div>
    <div className="new-expense__control">
    <label>Date</label>
    <input type="date" min="2019-01-01" max="2022-12-12" onChange={dateChangeHandler}/>
    </div>
    </div>
    <div className="new-expense__actions">
    <button type="submit">Add expense</button>
    </div>
    </form>
  );
};
