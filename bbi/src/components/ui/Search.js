
import React,{useState} from 'react'

const Search = ({getQuery}) => {

    const [text,setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
  
    return (
        <section className="search">
         <input 
         type="text" 
         className="form-control" 
         placeholder="Search characters"
         value={text}
         onChange={(e)=>onChange(e.target.value)}
         autoFocus
         />
        </section>
    )
}

export default Search
