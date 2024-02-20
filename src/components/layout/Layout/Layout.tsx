import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "@/utils/ScrollToTop";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>

            <main className={styles.main}>
                <Outlet/>
            </main>

            <Footer/>
            <ScrollToTop/>
        </div>
    );
};

export default Layout;