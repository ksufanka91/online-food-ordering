import {FC} from "react";
import {useAppDispatch} from "@/app/hooks";
import {addToCart} from "@/app/features/cart/cartSlice";
import priceFormat from "@/utils/priceFormat";
import Product from "@/app/models/Product";
import IconCart from "@/icons/cart.svg?react";
import Button from "@/components/UI/Button/Button";
import styles from "./ProductCard.module.scss";

type Props = {
    product: Product,
}

const ProductCard: FC<Props> = ({product}) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.cardBox}>
            <div className={styles.productCard}>
                <img src={product.image} alt="product" className={styles.image}/>
                <div className={styles.cardInfo}>
                    <div className={styles.mainInfo}>
                        <h3 className={styles.title}>{product.name}</h3>
                        <p className={styles.description}>{product.description}</p>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.weight}>Вес: {product.weight}</div>
                        <div className={styles.buttonBox}>
                            <Button icon={<IconCart/>} type={'button'} onClick={(e) => {
                                e.preventDefault();
                                dispatch(addToCart(product));
                            }}>В корзину</Button>

                            <div className={styles.price}>{priceFormat(product.price)}</div>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <div className={styles.itemTitle}>Белки</div>
                                <div className={styles.itemDescription}>{product.proteins}</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemTitle}>Жиры</div>
                                <div className={styles.itemDescription}>{product.fats}</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemTitle}>Углеводы</div>
                                <div className={styles.itemDescription}>{product.carbohydrates}</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemTitle}>Ккал</div>
                                <div className={styles.itemDescription}>{product.proteins}</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemTitle}>Вес</div>
                                <div className={styles.itemDescription}>{product.weight}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
