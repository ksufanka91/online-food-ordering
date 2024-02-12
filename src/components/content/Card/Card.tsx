import {Link} from "react-router-dom";
import Product from "@/app/models/Product";
import {FC} from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";

type Props = {
    product: Product,
    className?: string,
}

const Card: FC<Props> = ({product, className}) => {
    return (
        <Link to={'/'} className={classNames(styles.card, className || '')}>
            {product.image && <img src={product.image} alt="product" className={styles.image}/>}
            <div className={styles.cardInfo}>
                <div className={styles.titleBox}>
                    <div className={styles.title}>{product.name}</div>
                    <div className={styles.weight}>Вес: {product.weight}</div>
                </div>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.buyInfo}>
                    <div className={styles.price}>{product.price} &#8381;</div>
                    <button></button>
                </div>
            </div>
        </Link>

    );
};

export default Card;