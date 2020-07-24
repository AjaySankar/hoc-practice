import React, { Component } from 'react';

const UpdatedComponent = (WrappedComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(({count: prevCount}) => {
                return { count: prevCount + 1}
            })
        }
        render() {
            return <WrappedComponent count={this.state.count} updateCounter={this.incrementCount}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent;