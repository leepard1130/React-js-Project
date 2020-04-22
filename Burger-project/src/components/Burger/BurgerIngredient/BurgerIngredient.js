import React from 'react';

import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className = {classes.BreaBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className = {classes.BreadTop}>
                    <div className = {classes.Seed1}></div>
                    <div className = {classes.Seed2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className = {classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className = {classes.Cheese}></div>;
            break;
        case ('sald'):
            ingredient = <div className = {classes.Salad}></div>;
            break;        
        case ('bacon'):
        ingredient = <div className = {classes.Bacon}></div>;
            break;
        default:
            ingredient = null;

    }
}

export default burgerIngredient;