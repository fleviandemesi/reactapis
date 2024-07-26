import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import Loading from './Loading'

const Products = () => {

    const[loading,setLoading] = useState(false)
    const[products,setproducts] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            setproducts(response.data)
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
    const removeProducts = (id) =>{
        const newProducts = products.filter((product)=>product.id !== id)
        // alert("User with id is Removed"+ id)
        setproducts(newProducts)
    }

  return (
   <div className="container">
    {products?.map((product,key)=>(
        <div className="card">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img src={product.image} alt="" width={400} height={400}/>
            <button onClick={()=>removeProducts(product.id)}>Remove</button>
        </div>
    ))}
   </div>
  )
}

export default Products
