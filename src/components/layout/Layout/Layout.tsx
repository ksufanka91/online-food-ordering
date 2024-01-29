import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Categories/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Layout;