import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate ,Link} from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]); // Include id in the dependency array

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:8000/api/product/" + id, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        navigate("/product"); // this will take us back to the Main.js
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Price</label>
        <input
          type="number"
          name=""
          id=""
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="update" />
      </form>
      <Link to={"/product"}>Go home</Link>
    </div>
  );
};

export default Update;
