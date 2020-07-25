import React from 'react';

//使用withRouter可以把this.props 印在console
// import { withRouter} from 'react-router-dom';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) =>
            {
               return <BurgerIngredient key = {igKey + i} type = {igKey}/>;
            })
    }).reduce((arr,el) => {
        return arr.concat(el);//arr是reduced vale, el 是 current value
    },[]);

    if ( transformedIngredients.length === 0 ) {
        transformedIngredients = <p>Please start adding elements!</p>
    }

    return <div className = {classes.Burger}>
                <BurgerIngredient type = 'bread-top'/>
                {transformedIngredients}
                <BurgerIngredient type = 'bread-bottom'/>
    </div>
}

export default burger;