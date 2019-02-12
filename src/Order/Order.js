import React, { Component } from 'react';
import OrderConstructor from "./OrderConstructor/OrderConstructor";

function Order(props) {
    return <div className="Order">
        {Object.keys(props.ingredients).map((name) => {
            if(props.ingredients[name].count > 0)
                return <OrderConstructor
                    name={name}
                    count={props.ingredients[name].count}
                    total={props.ingredients[name].total}
                    onRemoveIngredient={props.onRemoveIngredient}
                />
        })}
    </div>
}

export default Order


