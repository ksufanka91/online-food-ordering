import {useAppSelector} from "@/app/hooks";
import {useDispatch} from "react-redux";
import {hideModal} from "@/app/features/cart/cartSlice";
import EmptyCartIcon from "@/icons/empty-cart.svg?react";
import Modal from "@/components/UI/Modal/Modal";
import styles from "./CartIsEmptyModal.module.scss";

const CartIsEmptyModal = () => {
    const dispatch = useDispatch();

    const showModal = useAppSelector(state => {
        return state.cart.showModal;
    })

    return (
        <Modal isOpen={showModal} onClose={() => dispatch(hideModal())}>
            <EmptyCartIcon className={styles.modalIcon}/>
            <div className={styles.title}>Корзина пустая</div>
        </Modal>
    );
};

export default CartIsEmptyModal;
