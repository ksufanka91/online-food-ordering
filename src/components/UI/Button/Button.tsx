import {FC, HTMLAttributes, ReactNode} from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: "submit" | "reset" | "button" | "link";
    icon?: ReactNode;
    href?: string;
    size?: "default" | "big"
}

const Button: FC<ButtonProps> = ({type, href, className, children, icon = null, size = "default", ...props}) => {
    if (type === 'link' && href) {
        return (
            <Link to={href} className={classNames(styles.button, {
            }, className || '')}>
                {children}
                {icon && <span>{icon}</span>}
            </Link>
        )
    }

    return (
        <button className={classNames(styles.button, {
            [styles.buttonBig]: size === 'big',
        }, className || '')}
                {...props}>
            <div className={styles.buttonBox}>
                {children}
                {icon}
            </div>
        </button>
    );
};

export default Button;