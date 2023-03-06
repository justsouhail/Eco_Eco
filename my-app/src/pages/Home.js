import React from "react";
import Navbar from "./Navbar";
import "../pagecss/Home.css";
import Produits from "./Produits";
// import photo from "./photos/photosp.jpeg";
import { useEffect, useState } from 'react';
import axios from 'axios';
function Home() {

  const [loading, setLoading] = useState(true); // Add loading state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3001/api/products');
        console.log('result.data:', result.data);
        setProducts(result.data.products);
        setLoading(false); // Set loading state to false when data is loaded
      } catch (error) {
        console.log('error:', error);
        setLoading(false); // Set loading state to false on error
      }
    };
    fetchData();
  }, []);




  return (
    <div>
      <Navbar />

      <img src="./photos/photoph.png" alt="" className="home_photo" />
      


      <p className="home_categ" style={{ fontSize: "1.5em" }}>
        {" "}
        Sport{" "}
      </p>


     



      <div className="produits">

        {products.map((prod, index) => (
          <div key={index}>
            <Produits  info={prod} />
          </div>
        ))}
      </div>


    </div>
  );
}

export default Home;
