import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CartIsEmptyModal from "@/components/content/CartIsEmptyModal/CartIsEmptyModal";
import styles from "./Layout.module.scss";


const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>

            <main className={styles.main}>
                <Outlet/>
            </main>

            <Footer/>

            <CartIsEmptyModal/>

            <ScrollToTop/>
        </div>
    );
};

export default Layout;