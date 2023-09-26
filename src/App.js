/* components */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";



/* style */
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/reset.css";
import "./styles/productBox.css";
import "./styles/Mainvisual.css";
import "./styles/login.css";
import "./styles/detail.css";
import "./styles/all.css";
import "./styles/pagination.css"
import "./styles/setionStyle.css"
/* pages */
import All from "./pages/All";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
/* hooc */
import Private from "./hooc/Private";
/* Routes */
import { Routes, Route } from "react-router-dom";
import MainVisual from "./pages/MainVisual";
import { useEffect, useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="main_container">
      <Header />
      <MainVisual/>
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="/" element={<Detail />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/products/:id"
          element={<Private authenticate={authenticate} />}
        />
      </Routes>
      <Section01/>
      <Section02/>
      <Section03/>
      <Footer />
    </div>
  );
}

export default App;
