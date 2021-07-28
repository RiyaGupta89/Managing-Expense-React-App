import { useMemo } from "react";
import Expenses from "./Components/Expenses";

function App() {
  const itemArray = useMemo(() => ([
    { date: new Date(2021, 3, 26), title: "Scooty Insurance", price: 159.75, },
    { date: new Date(2021, 9, 8), title:"Birthday Cake", price: 52.35 },
    { date: new Date(2021, 12, 24), title:"Santa Gifts", price: 119.21 },
    { date: new Date(2021, 7, 26), title: "Mobile Phone", price: 259.75 }, 
    { date: new Date(2021, 7, 27), title:"Kitkat", price: 159.75  },
    { date: new Date(2021, 11, 12), title: "College Fees", price: 359.75 }
  ]), [])

  return (
    <div className="App">
      <h1>Let's get started!!</h1>
      <Expenses itemArray={itemArray}/>
    </div>
  );
}

export default App;
