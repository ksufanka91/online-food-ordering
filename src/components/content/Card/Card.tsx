import {FC} from "react";
import {Link} from "react-router-dom";
import Product from "@/app/models/Product";
import IconCart from "@/icons/cart.svg?react";
import IconAdd from "@/icons/plus.svg?react";
import IconRemove from "@/icons/minus.svg?react";
import {addToCart, removeFromCart} from "@/app/features/cart/cartSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import classNames from "classnames";
import Button from "@/components/UI/Button/Button";
import priceFormat from "@/utils/priceFormat";
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
        <Link to={`/menu/${product.slug}`} className={classNames(styles.card, className || '')}>
            {product.image && <img src={product.image} alt="product" className={styles.image}/>}

            <div className={styles.cardInfo}>
                {countInCart > 0 && <div className={styles.productsInCart}>{countInCart}</div>}
                <div className={styles.titleBox}>
                    <div className={styles.title}>{product.name}</div>
                    <div className={styles.weight}>Вес: {product.weight}</div>
                </div>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.buyInfo}>
                    {countInCart > 0 &&
                        <>
                            <Button icon={<IconRemove/>} type={'button'} onClick={(e) => {
                                e.preventDefault();
                                dispatch(removeFromCart(product));
                            }}>
                            </Button>
                            <div>
                                {priceFormat(product.price * countInCart)}
                            </div>
                            <Button icon={<IconAdd/>} type={'button'} onClick={(e) => {
                                e.preventDefault();
                                dispatch(addToCart(product));
                            }}>
                            </Button>
                        </>
                    }

                    {countInCart === 0 &&
                        <>
                            <div>{priceFormat(product.price)}</div>
                            <Button icon={<IconCart/>} type={'button'} onClick={(e) => {
                                e.preventDefault();
                                dispatch(addToCart(product));
                            }}>В корзину</Button>
                        </>
                    }
                </div>
            </div>
        </Link>
    );
};

export default Card;