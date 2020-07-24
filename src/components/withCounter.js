import React, { useState } from 'react';

const UpdatedComponent = (WrappedComponent) => {
    const NewComponent = () => {
        const [ count, updateCounter ] = useState(0)
        return <WrappedComponent count={count} updateCounter={updateCounter}/>
    }
    return NewComponent
}

export default UpdatedComponent;