import React, {useState} from 'react';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card'
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.description)

function clickHandler() {
  setTitle('Updated')
} 
  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
