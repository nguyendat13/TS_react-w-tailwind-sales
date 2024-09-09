import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./Header";
import Footer from "./Footer";
function LayoutSite() {

  return (
    <>
      <h1>
        <Header/>
        <Outlet/>
        <Footer/>
      </h1>
      </>
  )
}

export default LayoutSite
