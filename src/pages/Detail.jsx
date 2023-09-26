import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/song-jiae/adidas/products/${id}`; //json 주소
    /* https://localhost:3000/ */
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className="prouct_detail">
      <div className="product_detail_img">
        <img src={product?.img}></img>
      </div>
      <div className="product_info">
        <h2>{product?.title}</h2>
        <h3>가격 : {product?.price}</h3>
        <form>
          <select>
            {product?.size.length > 0 &&
              product.size.map((item) => <option>{item}</option>)}
          </select>
        </form>
        <div className="product_infoCart">
          <button className="btn1">장바구니</button>
          <button className="btn2">💚</button>
        </div>
        <ul>
          <li>❕ 배송/반품</li>
          <li>❕ 세탁 및 취급시 주의사항</li>
          <li>❕ 품질 보증 및 AS 정보</li>
          <li>❕ 상품 제조연월 정보</li>
          <br /> <br />
          <li>
            <Link to="/">다른 제품 보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
