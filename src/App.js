import { ExpenseItem } from "./components/ExpenseItem";
import { Expenses } from "./components/Expenses";
import { Card } from './components/UI/Card'

function App() {
  const expenses = [
    {
      id: "e1",
      description: "Gra komputerowa",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      description: "Samochód",
      price: 7998.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      description: "Ubezpieczenie na zycie",
      price: 199.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      description: "IPad",
      price: 299,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <Card>
      <Expenses items={expenses} />
    </Card>
  );
}

export default App;
