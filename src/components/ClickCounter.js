import React, { useState } from 'react';

function ClickCounter(props) {
    const [ count, updateCounter ] = useState(0)
    return (
        <div>
            <button onClick={() => updateCounter(count+1)}>{`Clicked ${count} times`}</button>
        </div>
    );
}

export default ClickCounter;