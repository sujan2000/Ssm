import React, { Component } from 'react'

 class Counter extends Component {
     constructor(){
         super()
         this.state={
             count:0
         }
     }

     increment(){
         /* this.setState(
             {
            count: this.state.count + 1
             },
             () => {console.log('callback value',this.state.count)}
         ) */
         this.setState(prevState => ({
             count:prevState.count + 1
         }))
     }

     incrementFive(){
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         
     }
     decrement(){
        this.setState({
           count: this.state.count - 1
        },
        () => {console.log('callback value',this.state.count)});
    }


    render() {
        return (
            <div>
            <div>
                count - {this.state.count}
            </div>
                <button onClick = {()=>this.increment()}>+</button>
                <button onClick = {()=>this.decrement()}>-</button> 
                <button onClick = {()=>this.incrementFive()}>+5</button>
            </div>
        )
    }
}

export default Counter
