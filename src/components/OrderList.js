import React from "react";
import OrderDetail from "./OrderDetail";

const OrderList = (props) => {
  const { orders, total } = props;
  return (
    <div className="container">
            
      <div className="all-container">

        {orders.map((order, index) => {
          return (
            <div className="order" key={order.id}>
              <OrderDetail order={order} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderList;