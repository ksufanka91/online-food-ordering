import {FC} from "react";
import Promo from "@/app/models/Promo";
import styles from "./PromoCard.module.scss";

type Props = {
    promo: Promo,
}

const PromoCard: FC<Props> = ({promo}) => {
    return (
        <div className={styles.promoCard}>
            <div>
                {promo.image && (
                    <img src={promo.image} alt="promo" className={styles.image}/>
                )}
            </div>
            <div className={styles.infoBox}>
                <div>{promo.title}</div>
                <p className={styles.description}>{promo.description}</p>
                <div className={styles.date}>{promo.date}</div>
            </div>
        </div>
    );
};

export default PromoCard;
