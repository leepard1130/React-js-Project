import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type: 'Salad'},
    {label : 'Bacon', type: 'Bacon'},
    {label : 'Cheese', type: 'Cheese'},
    {label : 'Meat', type: 'Meat'}
];

const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        {controls.map(ctrl => {
            return <BuildControl key ={ctrl.label} label = {ctrl.type} />
        })}
    </div>
);

export default buildControls;