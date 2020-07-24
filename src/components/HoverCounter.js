import React, { useState } from 'react';

function HoverCounter(props) {
    const [ count, updateCounter ] = useState(0)
    return (
        <div>
            <h2 onMouseOver={() => updateCounter(count+1)}> Hovered {count} times </h2>
        </div>
    );
}

export default HoverCounter;