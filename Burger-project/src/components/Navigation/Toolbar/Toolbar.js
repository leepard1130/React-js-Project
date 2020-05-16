import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <DrawToggle clicked = {props.drawerToggleClicked}/>
        <div className = {classes.Logo}>
            <Logo />
        </div>
        <nav className = {classes.DeskTopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;