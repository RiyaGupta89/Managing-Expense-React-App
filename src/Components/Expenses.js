import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";

const Expenses = ({itemArray}) => {
  return (
    <Card className="expenses">
      {itemArray.map(item => (
        <ExpenseItem
          key={item.title}
          date={item.date}
          title={item.title}
          price={item.price}
        />
      ))}
    </Card>
  );
};

export default Expenses;
