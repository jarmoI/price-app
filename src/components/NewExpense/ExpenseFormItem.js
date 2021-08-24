import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseFormItem = (props) => {
    
  const [expenseTitle, setexpenseTitle] = useState("");
  const [expenseAmount, setexpenseAmount] = useState("");
  const [expenseDate, setexpenseDate] = useState("");

  /*
  const [userInput, setUserInput] = useState({
    expenseTitle: '',
    expenseAmount: '',
    expenseDate: ''
  });
  */

  function expenseTitleChangeHandler(event) {
    setexpenseTitle(event.target.value);
    /*
    setUserInput({
      ...prevState,
      expenseTitle: event.target.value
    })
    setUserInput((prevState) => {
      return {...prevState, expenseTitle: event.target.value}
    })
    */
  }

  function expenseAmountChangeHandler(event) {
    setexpenseAmount(event.target.value);
  }

  function expenseDateChangeHandler(event) {
    setexpenseDate(event.target.value);
  }


  const submitHandler = (event) => {
    event.preventDefault();
    const dataToSend = {
      description: expenseTitle,
      price: expenseAmount,
      date: new Date(expenseDate)
    }
    console.log(dataToSend)
    props.onSaveExpenseData(dataToSend);
    setexpenseAmount('');
    setexpenseDate('');
    setexpenseTitle('');
  }

  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseTitle}
            onChange={expenseTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={expenseAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-12"
            value={expenseDate}
            onChange={expenseDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="button">Powrót</button>
      <button type="submit" >Dodaj</button>
    </form>
  );
};
