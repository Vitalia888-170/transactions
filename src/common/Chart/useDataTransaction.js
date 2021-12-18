import { useContext } from 'react';
import { incomeCategories, expenseCategories, resetCategories } from '../../constants/Categories';
import { GlobalContext } from '../../GlobalState';

const useDataTransaction = (title) => {
   const { transactions } = useContext(GlobalContext);
   resetCategories();
   const selectedTypeItems = transactions.filter(elem => elem.type === title);
   const categoryType = title === 'Income' ? incomeCategories : expenseCategories;
   selectedTypeItems.forEach(item => {
      let currentCategory = categoryType.find(category => category.type === item.category);
      if (currentCategory) currentCategory.amount += item.amount
   });
   const filterCategory = categoryType.filter(categ => categ.amount > 0);

   const Chartdata = {
      labels: filterCategory.map(label => label.type),
      datasets: [{
         data: filterCategory.map(item => item.amount),
         backgroundColor: filterCategory.map(c => c.color)
      }]
   };
   return Chartdata;
}

export default useDataTransaction;
