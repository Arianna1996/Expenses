import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem rivalutato da React");
  const clickHandler = () => {
    setTitle("Update!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Cambia Titolo</button>
    </Card>
  );
};

export default ExpenseItem;
