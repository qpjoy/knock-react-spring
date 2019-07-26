import React from 'react';
import {useSpring, animated} from 'react-spring'

function FadeIn() {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return <animated.div style={props} delay={2000}>I will fade in</animated.div>
}

export default FadeIn;