
const AppReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TRANSACTION':
         return {
            ...state,
            transactions: [action.data, ...state.transactions]
         }
      case 'DELETE_TRANSACTION':
         return {
            ...state,
            transactions: state.transactions.filter((item) => item.id !== action.data)
         }
      default:
         return state;
   }
}

export default AppReducer;