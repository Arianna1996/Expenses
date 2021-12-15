import React from "react"; //Facoltativo
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let title = props.title;

  const clickHandler = () => {
    title = "Aggiornato";
    console.log("Cliccato!!");
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
