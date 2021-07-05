import React, { Component } from 'react'



class HoverCounter extends Component {
    render() {
        const { count, incrementHandler } = this.props
        return <h3 onMouseOver={incrementHandler}> Hover {count} times</h3>
           
    }
}

export default HoverCounter