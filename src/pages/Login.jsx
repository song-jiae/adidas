import React from "react";
import { useNavigate } from "react-router";
import Detail from "./Detail";
const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault(); //submit기본속성없애기
    console.log("login user");
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className="login_inner">
      <h1>자세한 상품은 로그인을 하셔야 볼 수 있습니다.</h1>
      <div className="example">
        <p>ex) 아이디 : 123@naver.com</p>
        <p>ex) 비밀번호 : 1234</p>
      </div>
      <form onSubmit={(event) => loginUser(event)}>
        <label for="email">아이디</label> <br /> <br />
        <input type="email" placeholder="이메일을 입력 해주세요" id="email" />
        <br /> <br />
        <label for="password">비밀번호</label> <br /> <br />
        <input
          type="password"
          placeholder="비밀번호를 입력 해주세요"
          id="password"
        />
        <br /> <br /> <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
export default Login;
