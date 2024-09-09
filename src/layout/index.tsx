import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./header/Header";
import Footer from "../layout/footer/Footer";
function LayoutSite() {

  return (
    <>
      <h1 className='font-no'>
        <Header/>
        <Outlet/>
        <Footer/>
      </h1>
      </>
  )
}

export default LayoutSite
