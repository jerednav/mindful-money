import { useState } from 'react'


const AddExpense = () => {

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [budgeted, setExpenses] = useState(false)

    return (
       <form className='add-form'>
        <div className='form-control'>
        
        <label> Expense </label>

        <input type='text' placeholder='Add Expense' 
        value={text}
        onChange={((e) => setText(e.target.value))}
        />

        </div>
        <div className='form-control'>
        
        <label>Day & Time</label>

            <input type='text' placeholder='Add Day & Time' 
            value={day}
            onChange={((e) => setDay(e.target.value))}
            />

        </div>
        <div className='form-control-form-control-check'>
        
        <   label>Budgeted?</label>

            <input type='checkbox' 
            value={budgeted}
            onChange={((e) => setExpenses(e.currentTarget.checked))}
            />

        </div>

        <input type="submit" value='Save Task' />

       </form> 
    )
}

export default AddExpense
