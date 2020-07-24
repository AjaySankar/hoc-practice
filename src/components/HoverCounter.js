import React from 'react';
import withCounter from './withCounter'

function HoverCounter(props) {
    const { count, updateCounter, stepSize } = props
    return (
        <div>
            <h2 onMouseOver={() => updateCounter(count+stepSize)}> Hovered {count} times </h2>
        </div>
    );
}

export default withCounter(HoverCounter, 10);