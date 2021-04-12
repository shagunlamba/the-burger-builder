import React from 'react';
import classes from './Order.module.css';


const Order = (props) => {

    const ingredients = [];
    for( let ingName in props.ingredients){
        ingredients.push({
            name: ingName,
            amount: props.ingredients[ingName]
        });
    }

    const ingOutput = ingredients.map(ig =>{    
        return (
                <span key={ig.name}
                style={{textTransform: "capitalize", display: 'inline-block', border: '1px solid #ccc', margin: '0 8px', padding: '5px'}}
                >{ig.name}
                ({ig.amount})
                </span> 
        )
    })

    return (
        <div className={classes.Order}>
            <p>The ingredients: </p>
            {ingOutput}
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order;