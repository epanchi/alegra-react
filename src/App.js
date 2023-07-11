
import './App.css';
import OrderList from './components/OrderList';
import { useEffect, useState } from "react";
import { getAllData, handleSubmit } from "./api";

function App() {
  const [time, setTime] = useState(new Date());
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
    // Function
    const getAllOrders = async () => {

      const data = await getAllData();
      setTotal(data.count);
      const results = await Promise.all(data);
  
      setOrders(results);
    };
    // useEffect(() => {
    //   getAllOrders();
    // }, [total]);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
        getAllOrders();

      }, 1000);
   
      return () => clearInterval(interval);
    }, []);


    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://alegra.test/api/order/', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();

      getAllOrders();
    }

  return (
    <div className="app-container">
    <h1>OrderList</h1>
    <p>The current time is: {time.toLocaleTimeString()}</p>
    <button id="download" styles="display: none;" onClick={handleSubmit} >
                Download
    </button>
      <OrderList
        orders={orders}
        total={total}
      />
    </div>
  );
}

export default App;
