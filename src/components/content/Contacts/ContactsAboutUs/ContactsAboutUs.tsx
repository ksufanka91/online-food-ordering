import styles from "./ContactsAboutUs.module.scss";
import IconOnion from "@icons/onion.svg?react";
import IconFlash from "@icons/flash.svg?react";
import IconChef from "@icons/chef.svg?react";

const ContactsAboutUs = () => {
    return (
        <div className="container-lg">
            <section className={styles.description}>
                <div>
                    <h2>Наше кафе</h2>
                    <p className={styles.text}>
                        Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте
                        города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь
                        все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале
                        ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая
                        террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                    </p>
                </div>

                <div className={styles.columnCards}>
                    <div className={styles.item}>
                        <IconOnion className={styles.icon}/>
                        <div>Свежайшие продукты</div>
                    </div>
                    <div className={styles.item}>
                        <IconFlash className={styles.icon}/>
                        <div>Быстрая доставка</div>
                    </div>
                    <div className={styles.item}>
                        <IconChef className={styles.icon}/>
                        <div>Лучшие повора</div>
                    </div>
                    <div className={styles.item}>
                        <IconOnion className={styles.icon}/>
                        <div>Свежайшие продукты</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactsAboutUs;