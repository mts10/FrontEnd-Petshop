import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../src/services/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("api/products")
      .then((response) => {
        const products = response.data;
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderProducts = () => {
    return products.map((product) => (
      <li key={product._id}>
        <Link to={`api/products/${product._id}`}>
          <div className="card">
            <img
              src={`data:image/png;base64,${product.img}`}
              alt={product.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p>
                <b>Descrição: </b> {product.description}
              </p>
              <p>
                <b>Categoria: </b> {product.categories.join(", ")}
              </p>
              <p>
                <b>Preço: </b> {product.price}
              </p>
            </div>
          </div>
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <h1>Ecommerce Petshop</h1>
      <ul>{renderProducts()}</ul>
    </div>
  );
};

export default Home;
