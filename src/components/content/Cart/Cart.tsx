import {FC} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {showModal} from "@/app/features/cart/cartSlice";
import styles from "./Cart.module.scss";

const Cart: FC = () => {
    const dispatch = useAppDispatch();

    const products = useAppSelector(state => {
        return state.cart.products;
    });

    const totalItems = products.reduce((acc, curr) => acc + curr.count, 0);

    return (
        <Link to={'/cart'} className={styles.cart} onClick={(e) => {
            if (products.length <= 0) {
                e.preventDefault();
                dispatch(showModal());
            }
        }}>
            <div className={styles.cartBox}>
                <span className={styles.text}>Корзина</span>
                <span className={styles.totalItems}>{totalItems}</span>
            </div>
        </Link>
    );
};

export default Cart;
