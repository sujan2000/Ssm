import React,{useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter:10
}

const  reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value}
        case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value}
        case 'decrement2':
            return {...state,secondCounter:state.secondCounter-action.value}
         case 'reset':
             return initialState   
         default:
         return state
    }
  }
function Reducer() {
     const [count,dispatch] = useReducer(reducer,initialState)
  
    return (
        <div>
            <div>first counter - {count.firstCounter}</div>
            <div>second counter - {count.secondCounter}</div>

            <button onClick={()=>dispatch({type:'increment',value:1})}>
                increment
            </button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>
                decrement
            </button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>
                increment 5
            </button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>
                decrement 5
            </button>
            <div> 
            <button onClick={()=>dispatch({type:'increment2',value:1})}>
                increment counter 2
            </button>
            <button onClick={()=>dispatch({type:'decrement2',value:1})}>
                decrement counter 2
            </button>
            </div>
            <button onClick={()=>dispatch({type:'reset'})}>
                reset
            </button>
        </div>
    )
}

export default Reducer
