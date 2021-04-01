import React from 'react'
import classes from './BuildOneControl.module.css';

const BuildOneControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={props.removed}
                disabled={props.disabled} >Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
}

export default BuildOneControl;
