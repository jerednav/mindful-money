import React from 'react'
import Header from './components/Header'
import Expenses from './components/Expenses'
import { useState } from 'react'



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

  return (
    <div className='container'>

      <Header />
      <Expenses expenses={expenses}/>


    </div>
  )
}

export default App
