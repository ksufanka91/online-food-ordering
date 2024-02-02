import styles from "./Description.module.scss";

const Description = () => {
    return (
        <div className="container-lg">
            <section className={styles.description}>
                <div className={styles.column}>
                    <h2>Наше кафе</h2>
                    <p className={styles.text}>
                        Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте
                        города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь
                        все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале
                        ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая
                        террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                    </p>
                    <button type="button">Посмотреть меню</button>
                </div>
                <div className={styles.columnCards}>
                    <div className={styles.item}>
                        <img src="images/icons/onion.svg" alt="onion" className={styles.icon}/>
                        <div className={styles.subtitle}>Свежайшие продукты</div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/icons/flash.svg" alt="delivery" className={styles.icon}/>
                        <div className={styles.subtitle}>Быстрая доставка</div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/icons/chef.svg" alt="chef" className={styles.icon}/>
                        <div className={styles.subtitle}>Лучшие повора</div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/icons/onion.svg" alt="onion" className={styles.icon}/>
                        <div className={styles.subtitle}>Свежайшие продукты</div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Description;