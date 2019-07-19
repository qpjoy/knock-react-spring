import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { config } from 'react-spring';

const Counter = () => (
    <Spring from={{ number: 0 }} to={{ number: 10}} delay='1000' config={config.molasses}>
        {
            props => <div>
                {props.number.toFixed()}
            </div>
        }
    </Spring>
)

export default Counter;