import ExpenseItem from "./Components/ExpenseItem";

function App() {

  const itemArray = [
    {
      date: new Date(2021, 3, 26),
      title: "Scooty Insurance",
      price: 159.75,
    },
    {
      date: new Date(2021, 9, 8),
       title:"Birthday Cake",
        price: 52.35
    },{
      date: new Date(2021, 12, 24),
       title:"Santa Gifts",
        price: 119.21
    },
    {
      date: new Date(2021, 7, 26),
       title: "Mobile Phone",
        price: 259.75
    }, 
    {
      date: new Date(2021, 7, 27),
       title:"Kitkat",
        price: 159.75 
    },
    {
      date: new Date(2021, 11, 12),
       title: "College Fees",
        price: 359.75
    }
  ]

  return (
    <div className="App">
      <h1>Let's get started!!</h1>
      <ExpenseItem date={itemArray[0].date} title={itemArray[0].title} price={itemArray[0].price}/>
      <ExpenseItem date={itemArray[1].date} title={itemArray[1].title} price={itemArray[1].price}/>
      <ExpenseItem date={itemArray[2].date} title={itemArray[2].title} price={itemArray[2].price}/>
      <ExpenseItem date={itemArray[3].date} title={itemArray[3].title} price={itemArray[3].price}/>
      <ExpenseItem date={itemArray[4].date} title={itemArray[4].title} price={itemArray[4].price}/>
      <ExpenseItem date={itemArray[5].date} title={itemArray[5].title} price={itemArray[5].price}/>
    </div>
  );
}

export default App;
