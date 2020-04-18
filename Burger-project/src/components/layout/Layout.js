import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const layout = (props) => (
    <Auxiliary>
        <div>
            Toolbar, Sidebar,etc
        </div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;