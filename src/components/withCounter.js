import React, { useState } from 'react';

const UpdatedComponent = (WrappedComponent, stepSize) => {
    const NewComponent = () => {
        const [ count, updateCounter ] = useState(0)
        return <WrappedComponent count={count} updateCounter={updateCounter} stepSize={stepSize}/>
    }
    return NewComponent
}

export default UpdatedComponent;