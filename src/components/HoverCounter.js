import React from 'react';
import withCounter from './withCounter'

function HoverCounter(props) {
    const { count, updateCounter } = props
    return (
        <div>
            <h2 onMouseOver={() => updateCounter(count+1)}> Hovered {count} times </h2>
        </div>
    );
}

export default withCounter(HoverCounter);