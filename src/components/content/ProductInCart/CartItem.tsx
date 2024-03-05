import {FC} from "react";
import {addToCart, ProductInCart, removeFromCart, removeFromCartAll} from "@/app/features/cart/cartSlice";
import {useAppDispatch} from "@/app/hooks";
import priceFormat from "@/utils/priceFormat";
import classNames from "classnames";
import CloseIcon from "@/icons/delete-from-cart.svg?react";
import Button from "@/components/UI/Button/Button";
import styles from "./CartItem.module.scss";

type Props = {
    product: ProductInCart,
}

const CartItem: FC<Props> = ({product}) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.productInCart}>

            <img src={product.image} alt="food-ordered" className={styles.image}/>

            <div className={styles.description}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.text}>{product.description}</div>
            </div>

            <div className={styles.controlsBox}>
                <div className={styles.controls}>
                    <Button className={styles.controlsItem} type={'button'} onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeFromCart(product))
                    }}>-</Button>

                    <div className={styles.itemCount}>{product.count}</div>

                    <Button className={styles.controlsItem} type={'button'} onClick={(e) => {
                        e.preventDefault();
                        dispatch(addToCart(product))
                    }}>+</Button>
                </div>

                <div className={styles.price}>
                    {priceFormat(product.price * product.count)}
                </div>


                <Button className={classNames(styles.controlsItem)} type={'button'} icon={<CloseIcon/>}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(removeFromCartAll(product));
                        }}/>
            </div>
        </div>
    );
};

export default CartItem;
