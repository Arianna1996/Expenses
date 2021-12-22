import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [data, setData] = useState("2020");

  const nuovaData = (data) => {
    setData(data);
  };
  const datoFiltrato = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === data
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onCambiaData={nuovaData} selected={data} />
        <ExpenseList items={datoFiltrato} />
      </Card>
    </div>
  );
};

export default Expenses;
