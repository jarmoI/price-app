import React, { useState } from "react";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpenseList } from "./ExpenseList";
import "./Expenses.css";

export const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const showSelectedValue = (value) => {
    setSelectedFilter(value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilter}
          onValueChange={showSelectedValue}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};
