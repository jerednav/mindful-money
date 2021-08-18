import { FaTimes } from 'react-icons/fa'

const Expense = ( { expense, onDelete, onToggle}) => {
    return (
        <div className={`expense ${expense.budgeted ? 'reminder' : ''}`} onDoubleClick={() =>
            onToggle(expense.id)}>

            <h3>{expense.text} 
            <FaTimes style={{color: 'red', cursor: 'pointer' }} 
            onClick={() => onDelete(expense.id)}
            /> 
            </h3>
            <p>{expense.day}</p>
            
        </div>
    )
}

export default Expense
