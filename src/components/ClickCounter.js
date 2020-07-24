import React  from 'react';
import withCounter from './withCounter'

function ClickCounter(props) {
    const { count, updateCounter } = props
    return (
        <div>
            <button onClick={() => updateCounter(count+1)}>{`Clicked ${count} times`}</button>
        </div>
    );
}

export default withCounter(ClickCounter);