import React from "react";
import { Link } from "react-router-dom";
import productRows from "../utils/products";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState(productRows);
  const deleteProduct = (id) => {
    setProducts((oldProduct) => {
      oldProduct = products.filter((product) => product.id !== id);
      return oldProduct;
    });
  };
  return (
    <Wrapper className="section">
      <Navbar />
      <Link to={"/"} className="btn product-btn">
        back home
      </Link>
      <section className="section product-container">
        {products.map((item) => {
          const { id, name, img, price } = item;
          return (
            <article key={id} className="product">
              <p>name:{name} </p>
              <img src={img} alt={name} className="product-img" />
              <p>price {price} </p>
              <button className="delete-btn" onClick={() => deleteProduct(id)}>
                <FaTrash />
              </button>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    width: 500px;
  }
  .product-btn {
    display: block;
    width: 120px;
    margin: 3rem auto;
  }
  button {
    font-size: 1.25rem;
  }
`;

export default Products;
