import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import "./Expenses.css";

export const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const showSelectedValue = (value) => {
    setSelectedFilter(value);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedFilter
  })


 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedFilter} onValueChange={showSelectedValue} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            description={expense.description}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
