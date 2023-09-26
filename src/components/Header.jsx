import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  //Link를 클릭 했을 때 활성화
  const navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`?q=${event.target.value}`);
    }
  };
  return (
    <div className="Header">
      <ul className="Header_wrap">
        <Link to="/">
          <li>
            <img src="./img/logo.svg" alt="" />
          </li>
        </Link>
        <ul>
          <Link to="/">
            <li>MEN</li>
          </Link>
          <Link to="/">
            <li>WOMEN</li>
          </Link>
          <Link to="/">
            <li>KIDS</li>
          </Link>
          <Link to="/">
            <li>SPORTS</li>
          </Link>
          <Link to="/">
            <li>BRANDS</li>
          </Link>
          <Link to="/">
            <li>SALE</li>
          </Link>
        </ul>
        <ul>
          <li>
            <form>
              <input
                type="text"
                onKeyPress={onCheckEnter}
                placeholder="신상품이 보고 싶다면? "
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </form>
          </li>
          <li><Link to ="/Login">로그인</Link></li>
          <li>장바구니</li>
          <li>위시리스트</li>
        </ul>
      </ul>
    </div>
  );
};

export default Header;
