import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '../App'

function Context() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <UserContext.Consumer>
                {
                    user=>{
                        return(
                            <ChannelContext.Consumer>
                                { 
                                channel =>{
                                return <div> {user}-{channel}</div>
                                }
                           }
                        </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
            
        </div>
    )
}

export default Context
