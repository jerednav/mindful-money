import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    
    return (
    <header className='header'>

    <h1> {title} </h1>
    <Button color = 'white' text='Add Expense' onClick={onClick} />
    
    </header>

    )
}

Header.defaultProps = {
    title: 'Budget',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
