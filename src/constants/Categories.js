const incomeColors = ['#66ff66', '#00cc00', '#008000', '#00cc6d', '#008044', '#00331b', '#b7ff69', '#4c804c', '#6B8E23'];
const expenseColors = ['#b30000', '#660000', '#ff3333', '#330000', '#ff4d4d', '#cc0747', '#990535', '#ff8c00', '#fa4d5e', '#64173e', '#b366b3', '#5a005a'];

export const incomeCategories = [
   { type: 'Salary', amount: 0, color: incomeColors[0] },
   { type: 'Gift', amount: 0, color: incomeColors[1] },
   { type: 'Lotery', amount: 0, color: incomeColors[2] },
   { type: 'Deposits', amount: 0, color: incomeColors[3] },
   { type: 'Rental', amount: 0, color: incomeColors[4] },
   { type: 'Business', amount: 0, color: incomeColors[5] },
   { type: 'Investments', amount: 0, color: incomeColors[6] },
   { type: 'Savings', amount: 0, color: incomeColors[7] },
   { type: 'Other', amount: 0, color: incomeColors[8] }
];

export const expenseCategories = [
   { type: 'Utilities', amount: 0, color: expenseColors[0] },
   { type: 'Car', amount: 0, color: expenseColors[1] },
   { type: 'Education', amount: 0, color: expenseColors[2] },
   { type: 'Meals', amount: 0, color: expenseColors[3] },
   { type: 'Shopping', amount: 0, color: expenseColors[4] },
   { type: 'Entertainment', amount: 0, color: expenseColors[5] },
   { type: 'Travel', amount: 0, color: expenseColors[6] },
   { type: 'Pets', amount: 0, color: expenseColors[7] },
   { type: 'Clothes', amount: 0, color: expenseColors[8] },
   { type: 'Bank Fees', amount: 0, color: expenseColors[9] },
   { type: 'Rent', amount: 0, color: expenseColors[10] },
   { type: 'Other', amount: 0, color: expenseColors[11] }
];

export const resetCategories = () => {
   incomeCategories.forEach(item => item.amount = 0);
   expenseCategories.forEach(item => item.amount = 0);
}