import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


const OrdarSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map((ingKey)=>{
        return <li key={ingKey}> 
                    <span style={{textTransform: "capitalize"}}>{ingKey}</span>
                    : {props.ingredients[ingKey]}
                </li>;
    });

    return (
        <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {props.price}</strong></p>
                <p>Continue to CheckOut?</p>
                <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default OrdarSummary;
