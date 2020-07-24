import React  from 'react';
import withCounter from './withCounter'

function ClickCounter(props) {
    const { count, updateCounter, stepSize } = props
    return (
        <div>
            <button onClick={() => updateCounter(count+stepSize)}>{`Clicked ${count} times`}</button>
        </div>
    );
}

export default withCounter(ClickCounter, 5);