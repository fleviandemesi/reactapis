import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"

const Comments = () => {
    const[loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setComments(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    },[])
    if(loading){
        return <p>Loading...</p>

    }
    const removeComments = (id) =>{
        const newComments= comments.filter((comment)=>comment.id !== id)
        // alert("User with id is Removed"+ id)
        setComments(newComments)
    }

  return (
    <div className="container">
        {comments?.map((comments,key)=>(
            <div className="card">
                <h2>{comments.name}</h2>
                <p>{comments.email}</p>
                <p>{comments.body}</p>
                <button onClick={()=>removeComments(comments.id)}>Remove</button>
            </div>
        
        ))}
    </div>
  )
}

export default Comments
