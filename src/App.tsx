import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useRoutes } from "react-router-dom";
import RouterSite from './routers/RouterSite';
import LayoutSite from './layout';
function App() {

  let element =useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children:RouterSite,
    },
  ]);
  return element;
}

export default App
