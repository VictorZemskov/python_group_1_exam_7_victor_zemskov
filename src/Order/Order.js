import React, { Component } from 'react';
import OrderConstructor from "./OrderConstructor/OrderConstructor";

function Order(props) {
    if(props.items.hamburger.count === 0 &
        props.items.cheeseburger.count === 0 &
        props.items.fries.count === 0 &
        props.items.coffee.count === 0 &
        props.items.tea.count === 0 &
        props.items.cola.count === 0)
        return <div className="Order">Order is empty! <br/> Please add some items!</div>
    else
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
            <hr/>
            <div className="TotalPrice">Total price: {props.isGetTotal} KGS</div>
        </div>
}

export default Order


