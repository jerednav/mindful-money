const Expense = ( { expense }) => {
    return (
        <div className='expense'>
            <h3>{expense.text}</h3>
            <p>{expense.day}</p>
            
        </div>
    )
}

export default Expense
