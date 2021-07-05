import axios from 'axios'
import React,{useState,useEffect} from 'react'

function DataFetch() {
    const[post,setPost]=useState({})
    const[id,setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setPost(res.data)
        })
        .catch(err=>{console.log(err)})
    },[idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <button tyep="button" onClick={handleClick}>Fatch Data</button>
            <ul>{post.title}</ul>
        </div>
    )
}

export default DataFetch
