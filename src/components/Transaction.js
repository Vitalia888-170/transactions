import React from 'react';
import { FaTrashAlt, FaPiggyBank } from "react-icons/fa";

const Transaction = ({ transaction, deleteTransaction }) => {
   const { id, date, amount, category, type } = transaction;
   const sign = type === 'Income' ? '+' : '-';
   const correctFormDate = date.split('-').reverse().join('-');
   return (
      <div className="item-container">
         <div className="item">
            <FaPiggyBank className="moneybox" />
            <h4 className="item-title">{category}</h4>
            <p className="item-date">{correctFormDate}</p>
            <p className="item-cash">{sign}{amount}$</p>
            <FaTrashAlt className="item-btn" onClick={() => deleteTransaction(id)} />
            <span className={type === 'Income' ? 'green-line' : 'red-line'}></span>
         </div>
      </div>
   )
}
export default Transaction;