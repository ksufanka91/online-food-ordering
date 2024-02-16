import {FC} from "react";
import {Link} from "react-router-dom";
import Product from "@/app/models/Product";
import {addToCart, removeFromCart} from "@/app/features/cart/cartSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import classNames from "classnames";
import Button from "@/components/UI/Button/Button";
import IconCart from "@/icons/cart.svg?react";
import styles from "./Card.module.scss";


type Props = {
    product: Product,
    className?: string,
}

const Card: FC<Props> = ({product, className}) => {
    const dispatch = useAppDispatch();

    const productsInCart = useAppSelector(state => {
        return state.cart.products;
    });

    const countInCart = productsInCart.find(item => item.id === product.id)?.count || 0;

    return (
        <Link to={'/'} className={classNames(styles.card, className || '')}>
            {product.image && <img src={product.image} alt="product" className={styles.image}/>}

            <div className={styles.cardInfo}>
                {countInCart > 0 && <div className={styles.productsInCart}>{countInCart}</div>}
                <div className={styles.titleBox}>
                    <div className={styles.title}>{product.name}</div>
                    <div className={styles.weight}>Вес: {product.weight}</div>
                </div>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.buyInfo}>
                    <div className={styles.price}>{product.price} &#8381;</div>
                    <button onClick={() => {
                        dispatch(removeFromCart(product));
                    }}>минус
                    </button>
                    <button onClick={() => {
                        dispatch(addToCart(product));
                    }}>плюс
                    </button>
                    <Button icon={<IconCart/>} type={'button'} onClick={() => {dispatch(addToCart(product))}}>В корзину</Button>
                </div>
            </div>
        </Link>

    );
};

export default Card;