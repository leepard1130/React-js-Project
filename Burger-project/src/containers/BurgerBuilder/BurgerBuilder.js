import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class BurgerBuilder extends Component {
    render() {
        return(
            <Auxiliary>
                <div>Burger</div>
                <div>BuildControl</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;