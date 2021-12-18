import './App.css';
import Balance from './components/Balance';
import HistoryOperations from './components/HistoryOperations';
import EnteredTransaction from './components/EnteredTransaction';
import { Provider } from './GlobalState';
import Chart from './components/Chart';


function App() {
  return (
    <Provider>
      <h1 className="title"> Racoon's Expense Tracker</h1>
      <div className="container">
        <div className="income-chart">
          <Chart title="Income" />
        </div>
        <main>
          <Balance />
          <div className="main-block">
            <EnteredTransaction />
            <HistoryOperations />
          </div>
        </main>
        <div className="expense-chart">
          <Chart title="Expense" />
        </div>
      </div>
    </Provider>
  );
}

export default App;
