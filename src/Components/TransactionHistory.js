import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
            <li className="plus">
                Day 1 Income 
                <span> $20 </span>
                <button className="delete-btn">X</button>
            </li>
            <li className="minus">
                Day 1 Expense 
                <span>$13</span>
                <button className="delete-btn">X</button>
           
            </li >
            </ul>
        </div>
    )
}
