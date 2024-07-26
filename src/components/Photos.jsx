import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import Loading from './Loading'


const Photos = () => {
    const [loading, setLoading] = useState(false)
    const[photos, setPhotos] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>{
            setPhotos(response.data)
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

    const removePhotos = (id) =>{
        const newPhotos = photos.filter((photo)=>photo.id !== id)
        // alert("User with id is Removed"+ id)
        setPhotos(newPhotos)
    }
  return (
    <div className="container">
        {photos?.map((photo,key)=>(
            <div className="card">
                <h2>{photo.title}</h2>
                <button onClick={()=>removePhotos(photo.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Photos
