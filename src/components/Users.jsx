import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import Loading from './Loading'

const Users = () => {
    const [loading , setLoading] = useState(false)
    const [users,  setUsers] = useState ([])

    useEffect(()=>{
        // set loading to be true
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })

    },[])
    // lets console and see if we get all users
    // console.log(users)
    if(loading){
        return <Loading/>

    }
    //filter users
    //fun to filter users
    const removeUser = (id) =>{
        const newUsers = users.filter((user)=>user.id !== id)
        // alert("User with id is Removed"+ id)
        setUsers(newUsers)
    }


  return (
    <div className="container">
        {users?.map((user,key)=>(
            <div className="card">
                <h2>{user.name}</h2>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                {/* //buton to delete user */}
                <button onClick={()=>removeUser(user.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Users
