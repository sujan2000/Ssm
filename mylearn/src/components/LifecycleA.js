import React, { Component } from 'react'


class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state ={
            hasError : false
        }
    }
   
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    
    render() {
        
       if(this.state.hasError){
           return <h1>Somethings went wrong</h1>
       }
       return this.props.children
    }
}

export default LifecycleA
