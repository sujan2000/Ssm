import React, { Component } from 'react'

class Massage extends Component {

    constructor(){
        super()
        this.state= {
            message:'welcome visitor'
        }
    }
     changeMessage(){
         this.setState({
           message: 'Thanku sir'
         });
     }

    render(){
        return (
     <div>
        <h1>
           {/* {this.state.message}
           <button onClick={()=>this.changeMessage()} >Change</button> */}
        </h1>
     </div>
        )
    }
}

export default Massage;