import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {fetchFaqs} from "@/app/features/faq/faqSlice";
import MenuScrollBar from "@/components/content/MenuScrollBar/MenuScrollBar";
import MainTitle from "@/components/UI/MainTitle/MainTitle";
import Faq from "@/components/UI/Faq/Faq";
import styles from "./DeliveryPage.module.scss";


const DeliveryPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFaqs());
    }, []);

    const faqs = useAppSelector(state => {
        return state.faq.faqs;
    })

    const loadingFaqs = useAppSelector(state => {
        return state.faq.loading;
    });

    return (
        <div>
            {loadingFaqs && 'Загрузка данных'}

            <MenuScrollBar/>
            <div className="container">
                <MainTitle title="Условия доставки"/>

                <div className={styles.accordionBox}>
                    <Faq faqs={faqs}/>
                    <div className={styles.image}/>
                </div>

                <div className={styles.schedule}>
                    <div>
                        <div className={styles.title}>График работы доставки:</div>
                        <div>с 10:00-21:00</div>
                    </div>
                    <div>
                        <div className={styles.title}>График работы кафе:</div>
                        <div>с 08:00-21:00</div>
                    </div>
                </div>

                <div className={styles.minOrder}>
                    <div className={styles.title}>
                        Минимальный заказ:
                    </div>
                    <div className={styles.description}>
                        Бесплатная доставка пешим курьером при сумме заказа от 400 ₽.
                        Доставка оператором такси от любой суммы заказа - по тарифам
                        перевозчика.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPage;
