import styles from "./MobileMenuNavbar.module.scss";
import {Link} from "react-router-dom";


const MobileMenuNavbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.link}>Главная</Link>
            <Link to='/promo' className={styles.link}>Акции</Link>
            <Link to='/notfound' className={styles.link}>Возврат&nbsp;товара</Link>
            <Link to='/delivery' className={styles.link}>Доставка</Link>
        </nav>
    );
};

export default MobileMenuNavbar;