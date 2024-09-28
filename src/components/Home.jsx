import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import NavBar from "./NavBar";

const Home = () => {
  const [product, setProduct] = useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData()
  }, [product]);
  return (
    <>
    <NavBar/>
    <div className="flex justify-center">

      <h1 className="text-4xl p-5">E-Commerce-App</h1>
    </div>
      <Product item={product} />
    </>
  );
};

export default Home;
