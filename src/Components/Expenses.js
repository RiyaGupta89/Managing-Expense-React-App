import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";

const Expenses = ({itemArray}) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={itemArray[0].date}
        title={itemArray[0].title}
        price={itemArray[0].price}
      />
      <ExpenseItem
        date={itemArray[1].date}
        title={itemArray[1].title}
        price={itemArray[1].price}
      />
      <ExpenseItem
        date={itemArray[2].date}
        title={itemArray[2].title}
        price={itemArray[2].price}
      />
      <ExpenseItem
        date={itemArray[3].date}
        title={itemArray[3].title}
        price={itemArray[3].price}
      />
      <ExpenseItem
        date={itemArray[4].date}
        title={itemArray[4].title}
        price={itemArray[4].price}
      />
      <ExpenseItem
        date={itemArray[5].date}
        title={itemArray[5].title}
        price={itemArray[5].price}
      />
    </Card>
  );
};

export default Expenses;
