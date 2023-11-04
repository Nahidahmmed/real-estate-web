import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
export default function Main() {
  const location = useLocation();

  const noHeader = location.pathname.includes('detail');
  return (
    <div>
        { noHeader || <Header></Header> }
        <Outlet></Outlet>
        { noHeader || <Footer></Footer> }
        
    </div>
  )
}
