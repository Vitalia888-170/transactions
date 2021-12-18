import React, { useContext, useState } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../GlobalState';


const HistoryOperations = () => {
   const { transactions, deleteTransaction } = useContext(GlobalContext);
   const [showHistory, setShowHistory] = useState(false);


   return (
      <div className="history-block">
         <button className="btn-history" onClick={() => setShowHistory(!showHistory)}>{showHistory ? 'Hide History' : 'Show History'}</button>
         <div className="history-list">
            {
               showHistory && <div>
                  {
                     transactions.map(item => <Transaction key={item.id}
                        transaction={item} deleteTransaction={deleteTransaction} />)
                  }
               </div>
            }
         </div>
      </div>
   )
}
export default HistoryOperations;