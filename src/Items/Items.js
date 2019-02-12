import React from 'react';

import ItemConstructor from './ItemConstructor';




function Items(props) {
    return <div className="Item">
        {Object.keys(props.ingredients).map((name) => {
            return <ItemConstructor
                name={name}
                label={props.ingredients[name].label}
                price={props.ingredients[name].price}

                onAddIngredient={props.onAddIngredient}
                // isAddButtonDisabled={props.isAddButtonDisabled}
            />
        })}

    </div>
}

export default Items;