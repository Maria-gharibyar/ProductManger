import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Oneproducts=(props)=>{
    
    const[Oneproduct,setOneProducts]=useState({})
    const{id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + id )
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneProducts(res.data);
        })
        .catch((err)=>console.log(err))
    },[id])
        return(
            <div>

              <h2> Title:{Oneproduct.title}</h2>
              <p> Price: {Oneproduct.price}</p>
              <p>Descriptions: {Oneproduct.description}</p>


                    
            </div>
        )
}
export default Oneproducts 