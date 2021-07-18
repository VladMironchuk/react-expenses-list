import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {id: 1, title: 'seriy', amount:'50', date: new Date(2020,4,5)},
  {id: 2, title: 'serg', amount:'100', date: new Date(2021,10,6)},
  {id: 3, title: 'sergay', amount:'400', date: new Date(2019,3,7)},
  {id: 4, title: 'vpn', amount:'60', date: new Date(2021,0,8)},
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => [...prevExpense, expense])
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
