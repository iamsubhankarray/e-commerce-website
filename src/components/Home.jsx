import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Slider from './Slider'
import NavBar from "./NavBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [filteredData]);

  return (
    <>
      <NavBar />
      <div className=" flex justify-end ">
        <input
          type="text"
          placeholder="Product search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-yellow-500 border-4 w-80"
          />
      </div>
          <Slider products={products}/>
    
      <Product item={filteredData} />
    </>
  );
};

export default Home;
