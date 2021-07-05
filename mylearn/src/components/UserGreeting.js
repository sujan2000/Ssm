import React, { Component } from 'react'


/* Method for conditional rendring */

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
     
    render() {
        /* SHORT CIRCUIT OPERATOR */
        return this.state.isLoggedIn && <div>Welcome sujan</div>


       /* TERNARY CONDITIONAL OPERATOR */
       /* return(
         this.state.isLoggedIn ? <div>Welcome sujan</div> : <di>Welcome Guest</di>
) */

       /* ELEMENT VARIABLES */
        /* let message 
        if(this.state.isLoggedIn){
           message = <div>Welcome sujan</div>
        }else{
           message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>
 */

        /* IF/ELSE */
       /*  if(this.state.isLoggedIn){
            return <div>Welcome sujan</div>
        }else{
            return <div>Welcome Guest</div>
        } */


       /*  return (
            <div>
                <div>Welcome sujan</div>
                <div>Welcome Guest</div>
            </div>
        ) */
    }
}

export default UserGreeting
