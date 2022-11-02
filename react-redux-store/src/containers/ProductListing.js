import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error thrown: ", err);
        console.error(err);
      });

    dispatch(setProducts(response.data));
    //we dispatch an action (setProducts). The reducer takes the object returned by the action
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="ui grid container" id="break">
        <ProductComponent />
      </div>
  );
};

export default ProductListing;
