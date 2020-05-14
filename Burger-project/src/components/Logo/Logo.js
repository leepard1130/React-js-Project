import React from 'react';

import burgerLogo from '../../assest/images/original.png';

import classes from './Logo.css';

const logo = (props) => (
    <div className = {classes.Logo} style = {{height: props.hright}}>
        <img src = {burgerLogo} alt = "MyBurger" />
    </div>
);

export default logo;