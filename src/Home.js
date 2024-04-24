import React from "react";
import "./Home.css";
import ProductList from "./component/ProductList";
import Sidebar from "./component/SideBar";
import Footer from "./component/Footer";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <>
          <div className="home__sidebar">
            <Sidebar />
          </div>

          <div className="home__row">
            <ProductList />
          </div>
        </>
      </div>
      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
