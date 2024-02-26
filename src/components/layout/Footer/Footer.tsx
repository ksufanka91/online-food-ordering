import {Link} from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerBox}>
                    <div className={styles.scrollToTop}
                         onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <img src="images/icons/arrow.svg" alt="arrow-to-top"/>
                    </div>

                    <div className={styles.info}>
                        <img src="images/icons/logo.png" alt="logo" className={styles.logo}/>
                        <div className={styles.companyInfo}>
                            © ООО СК «АПШЕРОН»
                            <br>
                            </br>
                            Все права защищены. 2010-2020
                        </div>
                        <Link to='/notfound' className={styles.text}>Пользовательское соглашение</Link>
                        <Link to='/notfound' className={styles.text}>Карта сайта</Link>
                        <Link to='/notfound' className={styles.text}>Политика конфиденциальности</Link>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
