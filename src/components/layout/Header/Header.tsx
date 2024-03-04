import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {Link, useLocation} from "react-router-dom";
import SearchInput from "../../UI/SearchInput/SearchInput";
import Cart from "@/components/content/Cart/Cart";
import MobileMenu from "@/components/layout/MobileMenu/MobileMenu";
import HamburgerButton from "@/components/layout/MobileMenu/HumburgerButton/HumburgerButton";
import styles from "./Header.module.scss";

const Header = () => {
    const refMenu = useRef(null);

    const [isMenuOpen, setIsOpenMenu] = useState(false);

    const {pathname} = useLocation();

    useEffect(() => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    }, [pathname]);

    function toggleMenuMode() {
        setIsOpenMenu(!isMenuOpen);

        if (isMenuOpen) {
            enableBodyScroll(refMenu.current!);
        } else {
            disableBodyScroll(refMenu.current!);
        }
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>

                   <HamburgerButton isMenuOpen={isMenuOpen} toggleMenuMode={toggleMenuMode}/>

                    <div className={classNames(styles.item, styles.itemLeft)}>
                        <Link to={'/'} className={styles.logo}>
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
                        <Cart/>
                    </div>
                </div>
            </div>

            <MobileMenu ref={refMenu} open={isMenuOpen}/>
        </header>
    );
};

export default Header;