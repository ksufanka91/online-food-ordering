import {Link} from "react-router-dom";
import {FC} from "react";
import styles from "./Cart.module.scss";
import {useAppSelector} from "@/app/hooks";

const Cart: FC = () => {
    const products = useAppSelector(state => {
        return state.cart.products;
    })

    const totalItems = products.reduce((acc, curr) => acc + curr.count, 0);


    return (
        <Link to={'/cart'} className={styles.cart}>
            <div className={styles.cartBox}>
                Корзина
                <span className={styles.totalItems}>{totalItems}</span>
            </div>

        </Link>
    );
};

export default Cart;