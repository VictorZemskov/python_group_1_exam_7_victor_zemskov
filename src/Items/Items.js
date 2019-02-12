import React from 'react';

import ItemConstructor from './ItemConstructor';




function Items(props) {
    return <div className="Item">
        {Object.keys(props.availableItems).map((name) => {
            return <ItemConstructor
                name={name}
                label={props.availableItems[name].label}
                price={props.availableItems[name].price}
                onAddItem={props.onAddItem}

            />
        })}

    </div>
}

export default Items;