import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 305.89,
    date: new Date(2021, 11, 10),
  },
  {
    id: "e2",
    title: "Crocchette",
    amount: 10.5,
    date: new Date(2020, 10, 10),
  },
  {
    id: "e3",
    title: "Bread",
    amount: 5.6,
    date: new Date(2020, 9, 30),
  },
  {
    id: "e4",
    title: "Water",
    amount: 2.5,
    date: new Date(2021, 5, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //console.log("Siamo in App.js");
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />;
    </div>
  );
};

export default App;
