import { useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";

const DisplayAll=(props)=>{
    const {product,setprodcuts}=props;
    const deleteProduct = (productID) => {
        axios
          .delete("http://localhost:8000/api/product/" + productID)
          .then((res) => {
            console.log(res.data);
            setprodcuts(product.filter((prodct, index) => prodct._id !== productID));
          })
          .catch((err) => console.log(err));
      };
      
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then((res)=>{
            console.log(res.data);
            setprodcuts(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })

},[])
        return(
            <div>
               {product.map((pro, index) => (
               <div key={index}>
                <Link to={"/product/" + pro._id}>{pro.title} </Link>

                 <Link to={"/product/edit/" + pro._id}>
                 Edit
                 </Link>
                    <button onClick={(e)=>{deleteProduct(pro._id)}}></button>
               </div>
            


))}

            </div>
        )

}

export default DisplayAll