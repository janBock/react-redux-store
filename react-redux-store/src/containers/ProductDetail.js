import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("id: ", product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.error("Error: ", err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
        dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div className="ui grid container" id="break">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
                <div className="column lp">
                    <img className="ui fluid image" id="image-deet" src={image}/>
                </div>
                <div className="column rp">
                    <h1 id="deet-text">{title}</h1>
                    <h2>
                        <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown header" id="block-cat">{category.toUpperCase()}</h3>
                    <p id="deet-text">{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
