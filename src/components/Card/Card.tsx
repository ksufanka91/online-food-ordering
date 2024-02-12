import {Link} from "react-router-dom";
import Product from "@/app/models/Product";
import {FC} from "react";
import styles from "./Card.module.scss";

type Props = {
    product: Product
}

const Card: FC<Props> = ({product}) => {
    return (
        <Link to={'/'} className={styles.card}>
            <img src={product.image} alt="product-image" className={styles.image}/>
            <div className={styles.cardInfo}>
                <div className={styles.titleBox}>
                    <div className={styles.title}>{product.name}</div>
                    <div className={styles.weight}>{product.weight}</div>
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