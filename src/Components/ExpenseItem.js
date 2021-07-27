import React from 'react'
import "./ExpenseItem.css"

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>July 26 2021</div>
            <div className="expense-item__description">
                <h2>Scooty Insurance</h2>
                <div className="expense-item__price">$296.43</div>
            </div>
        </div>
    )
}

export default ExpenseItem

