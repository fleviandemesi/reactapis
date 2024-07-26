import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import Loading from './Loading'

const Todos = () => {
    const [loading , setLoading] = useState(false)
    const[todos, setTodos] = useState([])
    
    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            setTodos(response.data)
            setLoading(false)

        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    },[])
    if(loading){
        return <Loading/>

    }
    //remove todos
    const removeTodos = (id)=>{
        const newTodos = todos.filter((todo)=> todo.id!==id)
        setTodos(newTodos)
    }
  return (
    <div className="container">
        {todos?.map((todo,key)=>(
            <div className="card">
                <h2>{todo.title}</h2>
                <button onClick={()=>removeTodos(todo.id)}>Remove</button>
            </div>
        ))}
    </div>

    
  )
}

export default Todos
