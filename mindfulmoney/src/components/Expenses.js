const expenses = [
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
]

const Expenses = () => {
    return (
       <>
        {expenses.map((expense) => ( 
            <h3 key={expense.id}> {expense.text} </h3>
        ))}
       </>
    )
}

export default Expenses
