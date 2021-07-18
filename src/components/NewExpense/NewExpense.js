import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

  const [addingExpense, setAddingExpense] = useState(false)

  const changeAddExpense = () => setAddingExpense(!addingExpense)

  const saveExpenseDataHAndler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      {addingExpense &&
      <ExpenseForm
        cancelToAddExpense={changeAddExpense}
        onSaveExpenseData={saveExpenseDataHAndler}
      />}
      {!addingExpense && <button onClick={changeAddExpense}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense