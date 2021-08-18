const AddExpense = () => {
    return (
       <form className='add-form'>
        <div className='form-control'>
        
        <label>Task</label>

        <input type='text' placeholder='Add Expense' />

        </div>
        <div className='form-control'>
        
        <label>Day & Time</label>

        <input type='text' placeholder='Add Day & Time' />

        </div>
        <div className='form-control'>
        
        <label>Budgeted?</label>

        <input type='checkbox' />

        </div>

        <input type="submit" value='Save Task' />

       </form> 
    )
}

export default AddExpense
