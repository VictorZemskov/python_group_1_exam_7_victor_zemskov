import React from 'react'


function ItemConstructor(props) {
    return <div className="ItemConstructor" onClick={() => {return props.onAddItem(props.name)}}>
        <a href='#'>
            <h2>{props.label}</h2>
            <h4>Price: {props.price} KGS</h4>
        </a>
    </div>;
}

export default ItemConstructor;