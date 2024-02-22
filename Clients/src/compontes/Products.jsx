import axios from 'axios'
import { useState } from 'react'


const Products=()=>{
        const[title,setTilte]=useState("")
        const[price,setPrice]=useState("")
        const[description,setDescription]=useState("")

        const HandelrProducts=(e)=>{
            e.preventDefault();
            axios.post('http://localhost:8000/api/products', {
                title: title,
                price: price,
                 description: description     // this is shortcut syntax for lastName: lastName
            })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
        
        return(
            <>
                    <form onSubmit={HandelrProducts}>
                          
                            <label htmlFor="">Title</label>
                            <input type="text" value={title} onChange={(e)=>setTilte(e.target.value)} />
                            <label htmlFor="">Price</label>
                            <input type="number" name="" id="" value={price} onChange={(e)=>setPrice(e.target.value)} />
                            <label htmlFor="">Description</label>
                            <input type="text" value={description}  onChange={(e)=>setDescription(e.target.value)}/>
                            <input type="submit" value="Create" />



                    </form>
            </>
        )

}

export default Products