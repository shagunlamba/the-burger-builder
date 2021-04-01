import React from 'react';
import classes from './BuildControls.module.css';
import BuildOneControl from './BuildOneControl/BuildOneControl';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            { controls.map( (ctrl) => {
                return <BuildOneControl key={ctrl.label} label={ctrl.label} />
            })}
        </div>  
    )
}

export default BuildControls;
