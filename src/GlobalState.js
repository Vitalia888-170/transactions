import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
   transactions: []
}
//create context
export const GlobalContext = createContext(initialState);
//create provider
export const Provider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);
   function addTransaction(transaction) {
      dispatch({
         type: 'ADD_TRANSACTION',
         data: transaction
      });
   }

   function deleteTransaction(id) {
      dispatch({
         type: 'DELETE_TRANSACTION',
         data: id
      });
   }
   return (
      <GlobalContext.Provider value={{
         transactions: state.transactions,
         addTransaction,
         deleteTransaction
      }}>
         {children}
      </GlobalContext.Provider>
   )
}
