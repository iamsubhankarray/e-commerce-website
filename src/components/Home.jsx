import axios from "axios";
import React, { useState } from "react";
import Product from "./Product";

const Home = () => {
  const [product, setProduct] = useState([]);
  const data = axios
    .get("https://fakestoreapi.com/products/")
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
  return (<>
  <p1>E-Commerce-App</p1>
  <Product item={product}/>
  </>)
};

export default Home;
