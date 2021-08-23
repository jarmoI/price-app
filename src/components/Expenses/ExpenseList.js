import React from 'react';
import { ExpenseItem } from './ExpenseItem';
import './ExpenseList.css';

export const ExpenseList = props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
        {
            props.items.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  description={expense.description}
                  price={expense.price}
                  date={expense.date}
                />
            ))}
        </ul>
    )
}