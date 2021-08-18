import { ExpenseItem } from "./ExpenseItem";
import { Card } from '../UI/Card';
import "./Expenses.css";

export const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        description={props.items[0].description}
        price={props.items[0].price}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        description={props.items[1].description}
        price={props.items[1].price}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        description={props.items[2].description}
        price={props.items[2].price}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        description={props.items[3].description}
        price={props.items[3].price}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
};
