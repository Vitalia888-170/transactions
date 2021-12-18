import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../GlobalState';
import { incomeCategories, expenseCategories } from '../constants/Categories';
import DateModificator from '../common/DateModificator/DateModificator';
import { useInput } from '../common/FormControl/FormControl';
import { balance } from './Balance';


const EnteredTransaction = () => {
   const { addTransaction } = useContext(GlobalContext);
   const [type, setType] = useState('Income');
   const [date, setDate] = useState(DateModificator(new Date()));
   const [category, setCategory] = useState('Salary');
   const [value, setValue] = useState(0);

   const amount = useInput('', { Empty: true, maxLengthError: 6 });
   const onSubmit = (e) => {
      e.preventDefault(e);
      const newTransaction = {
         id: Math.random().toString(36).substr(2, 9),
         date,
         amount: +value,
         category,
         type
      }
      addTransaction(newTransaction);
      setValue('');
   }

   useEffect(() => {
      amount.onChange(value);
   }, [value])




   const invalidValue = type === 'Expense' && Math.trunc(balance) < amount.value;
   const selectedType = type === 'Income' ? incomeCategories : expenseCategories;
   return (
      <div className="transaction">
         <h4 className="transaction-title">Add new transaction</h4>
         <div className="underline"></div>
         <form onSubmit={onSubmit}>
            <select value={type} onChange={(e) => setType(e.target.value)} >
               <option value="Income">Income</option>
               <option value="Expense">Expense</option>
            </select>
            <select className="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
               {
                  selectedType.map((category, index) => <option key={index} value={category.type}>{category.type}</option>)
               }
            </select>
            <input type="date" value={date} onChange={(e) => setDate(DateModificator(e.target.value))} placeholder="Enter text ..." />
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)}
               onBlur={(e) => amount.onBlur(e)} placeholder="Enter amount ..." />
            {(amount.isDirty && amount.isEmpty) && <p className="error">Field can`t be empty</p>}
            {amount.maxLengthError && <p className="error">Maximum 6 digits</p>}
            <button disabled={!amount.inputValid || invalidValue || amount.value === 0} className="btn-add">Add transaction</button>
         </form>
      </div>
   )
}

export default EnteredTransaction;
