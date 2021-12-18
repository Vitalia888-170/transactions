import React from 'react';
import img1 from '../common/images/img1.png';
import img2 from '../common/images/img2.png';
import img3 from '../common/images/img3.png';

export const Racoon = ({ balance }) => {

   return (
      <>
         <img className="racoon" src={(balance > 0 && balance < 10000) ? img2 : balance >= 10000 ? img3 : img1} alt={balance} />
      </>
   )
}
