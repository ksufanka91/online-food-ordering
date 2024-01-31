import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import classNames from "classnames";
import SearchInput from "../../UI/SearchInput/SearchInput";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <div className={classNames(styles.item, styles.itemLeft)}>
                        <Link to={'/'}>
                            <img src="images/icons/logo.png" alt="logo"/>
                        </Link>

                        <SearchInput/>
                    </div>

                    <div className={classNames(styles.item, styles.itemRight)}>
                        <div className={styles.contacts}>
                            <div className={styles.contactsIcon}>
                                <img src="images/icons/phone.svg" alt="phone"/>
                            </div>
                            <div className={styles.contactsInfo}>
                                <div className={styles.contactsText}>Контакты:</div>
                                <a href="tel:+79175105759" className={styles.contactsPhone}>+ 7 (917) 510-57-59</a>
                            </div>

                        </div>
                        <button>
                            Button
                        </button>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;