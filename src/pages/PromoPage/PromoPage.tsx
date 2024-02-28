import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {fetchPromos} from "@/app/features/promo/promoSlice";
import MenuScrollBar from "@/components/content/MenuScrollBar/MenuScrollBar";
import MainTitle from "@/components/UI/MainTitle/MainTitle";
import PromoCard from "@/components/content/PromoCard/PromoCard";
import styles from "./PromoPage.module.scss";

const PromoPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPromos());
    }, []);

    const promos = useAppSelector(state => {
        return state.promo.promos;
    })

    const loadingPromos = useAppSelector(state => {
        return state.promo.loading;
    });

    return (
        <>
            {loadingPromos && 'Загрузка данных'}
            <MenuScrollBar/>

            <div className="container">
                <MainTitle title="Акции"/>
            </div>

            {promos && (
                <div className="container">
                    <div className={styles.promoCards}>
                        {promos.map(promo => (
                            <PromoCard key={promo.id} promo={promo}/>
                        ))}
                    </div>

                </div>
            )}
        </>
    );
};

export default PromoPage;