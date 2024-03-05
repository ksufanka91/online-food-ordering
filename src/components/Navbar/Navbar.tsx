import {Link} from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.link}>Главная</Link>
            <Link to='/promo' className={styles.link}>Акции</Link>
            <Link to='/notfound' className={styles.link}>Возврат&nbsp;товара</Link>
            <Link to='/delivery' className={styles.link}>Доставка</Link>
        </nav>
    );
};

export default Navbar;
