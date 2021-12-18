const DateModificator = (date) => {
   let currentData = new Date(date);
   let month = `${currentData.getMonth() + 1}`;
   let day = `${currentData.getDate()}`;
   let year = currentData.getFullYear();

   if (month < 9) {
      month = `0${month}`
   }
   if (day < 9) {
      day = `0${day}`
   }
   return [year, month, day].join('-');
}

export default DateModificator;
