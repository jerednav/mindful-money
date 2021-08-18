import React from 'react'
import Header from './components/Header'
import Expenses from './components/Expenses'
import AddExpense from './components/AddExpense'
import { useState } from 'react'
import { FaTasks, FaTheaterMasks } from 'react-icons/fa'



const App = () => {
  const [expenses, setExpenses] = useState ([
    {
        id: 1,
        text: 'Wal-mart',
        day: 'Aug 16',
        budgeted: true,
    },
    {
        id: 2,
        text: 'Target',
        day: 'Aug 15',
        budgeted: true,
    },
])

//Delete Task
const deleteExpense = (id) => {
  setExpenses(expenses.filter((expense) => expense.id !== id))
}


//Toggle Reminder
const toggleBudget = (id) => {
  setExpenses(
    expenses.map((expense) => expense.id === id ? { ...expense, budgeted: !expense.budgeted } : expense
  )
  )
}




  return (
    <div className='container'>

      <Header />
      <AddExpense />
      {expenses.length > 0 ? (
      <Expenses expenses={expenses} onDelete={deleteExpense} 
      onToggle={toggleBudget}
      />
      ) : (
        'No Expenses To Show'
      )}

    </div>
  )
}

export default App
