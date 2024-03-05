import {FC} from "react";
import styles from "./HamburgerButton.module.scss";

type Props = {
    isMenuOpen: boolean;
    toggleMenuMode: () => void;
}

const HamburgerButton: FC<Props> = ({isMenuOpen, toggleMenuMode}) => {
    return (
        <button className={styles.burgerMenu}
                onClick={toggleMenuMode}>
            <img src={isMenuOpen ? "images/icons/close-menu.svg" : "images/icons/menu.svg"}
                 alt="burger-menu"
                 width={37}
                 height={37}
            />
        </button>
    );
};

export default HamburgerButton;
