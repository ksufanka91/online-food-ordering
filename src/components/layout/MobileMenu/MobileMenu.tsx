import {forwardRef} from "react";
import classNames from "classnames";
import MobileMenuNavbar from "@/components/layout/MobileMenu/MobileMenuNavbar/MobileMenuNavbar";
import styles from "./MobileMenu.module.scss";

type Props = {
    open: boolean
}

const MobileMenu = forwardRef<HTMLDivElement, Props>(({open}, ref) => {
    return (
        <div className={classNames(styles.mobileMenu, {[styles.mobileMenuOpen]: open})} ref={ref}>
            <div className="container">
                <MobileMenuNavbar/>
            </div>
        </div>
    );
});

export default MobileMenu;