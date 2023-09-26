import React from "react";
import { useNavigate } from "react-router";
const ProductBox = ({ item }) => {
  const navigate = useNavigate();
  const Click = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div className="ProductBox_wrap">
      <div className="ProductBox" onClick={Click}>
        <img src={item?.img}></img>
        <p>Adidas</p>
        <h2>제품명 : {item?.title}</h2>
        <h3>가격 :{item?.price}</h3>
      </div>
    </div>
  );
};

export default ProductBox;
