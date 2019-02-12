import React from 'react'


function OrderConstructor(props) {
    return <div className="OrderConstructor">
        <h2 className="Order_name">{props.name}</h2>
        <h3>x {props.count}</h3>
        <h3>{props.total} KGS</h3>
        <a href='#'><h3 onClick={() => {return props.onRemoveItem(props.name)}}><b>X</b></h3></a>

    </div>;
}

export default OrderConstructor;