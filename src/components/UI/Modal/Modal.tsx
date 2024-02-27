import {FC, ReactNode, useEffect, useRef} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import classNames from "classnames";
import CloseIcon from "@/icons/close.svg?react";
import styles from "./Modal.module.scss";

export interface IModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
    className?: string,
}

const Modal: FC<IModalProps> = ({isOpen, onClose, children, className}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            isOpen ? disableBodyScroll(ref.current) : enableBodyScroll(ref.current);
        }
    }, [isOpen]);

    return (
        <div className={classNames(styles.modalBox, isOpen && styles.open)}>
            <div className={classNames(styles.overlay)} onClick={onClose}/>

            <div ref={ref} className={classNames(styles.modal, className || "")}>
                <CloseIcon onClick={onClose} className={styles.closeIcon}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;
