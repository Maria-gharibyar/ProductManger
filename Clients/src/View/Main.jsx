
import { useState } from "react"
import DisplayAll from "../compontes/DisplayAll"
import Products from "../compontes/Products"

const Main=(props)=>{
const[product,setprodcuts]=useState([])

    return(
        <div>
         <DisplayAll product={product} setprodcuts={setprodcuts}></DisplayAll>
        <Products product={product} setprodcuts={setprodcuts}></Products>
        </div>
       
    )
}

export default Main