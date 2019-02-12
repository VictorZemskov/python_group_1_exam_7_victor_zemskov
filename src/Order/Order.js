import React, { Component } from 'react';
import OrderConstructor from "./OrderConstructor/OrderConstructor";

function Order(props) {
    return <div className="Order">
        {Object.keys(props.items).map((name) => {
            if(props.items[name].count > 0)
                return <OrderConstructor
                    name={name}
                    count={props.items[name].count}
                    total={props.items[name].total}
                    onRemoveItem={props.onRemoveItem}
                />
        })}
    </div>
}

export default Order


