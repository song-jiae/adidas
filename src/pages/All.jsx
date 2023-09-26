import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import MainVisual from "./MainVisual";
import Pagination from "../hooc/Pagination";

const All = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProduct = async () => {
    let keyword = query.get("q") || "";
    console.log(keyword);
    let url = `https://my-json-server.typicode.com/song-jiae/adidas/products`;
    // https://my-json-server.typicode.com/khsysr/Adidas/products;

    /* http://localhost:3000/ */
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, []);


  // 페이지네이션
  const itemsPerPage = 8; // 페이지당 아이템 수
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 해당하는 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="All">
      <MainVisual />
      <div className="All_heading">
        <ul>
          <li className="first">Adidas item 🧷</li>
          <li className="second">SALE 💸</li>
          <li className="third">Best of adidas 🔥</li>
        </ul>
      </div>
      <ul className="ProductList">
        {currentItems.map((menu) => (
          <li key={menu.id}>
            <ProductBox item={menu} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(productList.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default All;