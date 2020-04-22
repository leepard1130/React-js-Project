import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.css'

const layout = (props) => (
    <Auxiliary>
        <div>
            Toolbar, Sidebar,etc
        </div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;