import {FC, HTMLAttributes, ReactNode} from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    type: "submit" | "reset" | "button" | "link";
    href?: string;
}

const Button: FC<ButtonProps> = ({type, href, className, children, icon, ...props}) => {
    if (type === 'link' && href) {
        return (
            <Link to={href} className={classNames(styles.button, {
                [styles.buttonWithIcon]: icon,
            }, className || '')}>
                {children}
                {icon && <span className={styles.buttonIcon}>{icon}</span>}
            </Link>
        )
    }

    return (
        <button className={classNames(styles.button, {
            [styles.buttonWithIcon]: icon,
        }, className || '')}
                {...props}>
            <div className={styles.buttonBox}>
                {children}
                {icon && <span className={styles.buttonIcon}>{icon}</span>}
            </div>
        </button>
    );
};

export default Button;