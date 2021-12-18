import React, { useContext } from 'react';
import '../App.css';
import { Racoon } from './Racoon';
import { GlobalContext } from '../GlobalState';

export var balance;
const Balance = () => {
   const { transactions } = useContext(GlobalContext);
   const incomeType = transactions.filter(elem => elem.type === 'Income');
   const expenseType = transactions.filter(elem => elem.type === 'Expense');
   const income = incomeType.map(item => item.amount).reduce((total, item) => total += item, 0).toFixed(2);
   const expense = expenseType.map(item => item.amount).reduce((total, item) => total += item, 0).toFixed(2);
   balance = (income - expense).toFixed(2);



   return (
      <div className="wrapper">
         <div className="balance-container">
            <div className="wrap">
               <h1 className="balance-title">Your balance</h1>
               <p className="balance"> ${balance}</p>
            </div>
         </div>
         <div className="operations">
            <div className="block">
               <h4 className="operation-title green">Income</h4>
               <p className="operation-cash">${income}</p>
            </div>
            <div className="block">
               <h4 className="operation-title red">Expense</h4>
               <p className="operation-cash">${expense}</p>
            </div>
         </div>
         <div className="racoon-container">
            <Racoon balance={balance} />
         </div>
      </div>

   )
}
export default Balance;
