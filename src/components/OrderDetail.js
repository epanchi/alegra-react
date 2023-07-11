import React from "react";

const OrderDetail = (props) =>{
    const {order } = props;
    return(
        <div className={`container-detail `}>
             <h1>{order.recipe.name}</h1>
             <p>{order.status}</p>
        </div>
    );

}

export default OrderDetail;
