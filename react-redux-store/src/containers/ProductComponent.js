import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderlist = products.map((product) => {
    const { id, price, title, image, category } = product;
    return (
        <div className="four wide column">
            <Link to={`/product/${id}`}>
          <div className="ui link card" id="card">
            <div className="ui centered small image">
              <img src={image} alt={title}></img>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="description">${price.toFixed(2)}</div>
              <div className="description">{category}</div>
            </div>
          </div>
          </Link>
        </div>
    );
  });

  return <>{renderlist}</>;
};

export default ProductComponent;
