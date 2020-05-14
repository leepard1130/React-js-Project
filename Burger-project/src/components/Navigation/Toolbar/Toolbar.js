import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';


const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <div className = {classes.Logo}>
            <Logo />
        </div>
        <nav className = {classes.DeskTopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;