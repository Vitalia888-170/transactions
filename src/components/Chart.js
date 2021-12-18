import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import useDataTransaction from '../common/Chart/useDataTransaction';

const Chart = ({ title }) => {
   const Chartdata = useDataTransaction(title);
   return (
      <div>
         {Chartdata.labels.length > 0 && <h2 className="chart-title">{title}</h2>}
         <Doughnut data={Chartdata} width={240} />
      </div>
   )
}

export default Chart;
