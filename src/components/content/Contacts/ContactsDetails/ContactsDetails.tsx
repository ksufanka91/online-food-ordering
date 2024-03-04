import styles from "./ContactsDetails.module.scss";
import Button from "@/components/UI/Button/Button";

const ContactsDetails = () => {
    return (
        <section className={styles.contacts}>
            <div className="container">
                <div className={styles.contactCard}>
                    <h2 className={styles.mainTitle}>Контакты</h2>
                    <div className={styles.contact}>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <img src="images/icons/location-main-color.svg" alt="location"/>
                            </div>
                            <div>
                                <div className={styles.title}>Наш адрес:</div>
                                <div className={styles.text}>
                                    МО, городской округ Красногорск, село Ильинcкое,
                                    Экспериментальная улица, 10
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <img src="images/icons/message.svg" alt="email"/>
                            </div>
                            <div>
                                <div className={styles.title}>Наша почта:</div>
                                <a href="mailto: order.food@gmail.com" className={styles.text}>order.food@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serve}>
                        <Button type={'link'} size={'big'} className={styles.button}>Забронировать стол</Button>
                        <div className={styles.contactUs}>
                            <a href="tel:+79175105759" className={styles.contactPhone}>+ 7 (917) 510-57-59</a>
                            <div className={styles.contactText}>Звоните или оставляйте заявку</div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <span className={styles.socialsText}>Мы в соц сетях:</span>
                        <div className={styles.socialsIcons}>
                            <a href="https://www.facebook.com" className={styles.socialIcon} target="_blank">
                                <img src="images/icons/facebook.svg" alt="facebook"/>
                            </a>

                            <a href="https://vk.com" className={styles.socialIcon} target="_blank">
                                <img src="images/icons/vk.svg" alt="vk"/>
                            </a>

                            <a href="https://www.youtube.com" className={styles.socialIcon} target="_blank">
                                <img src="images/icons/youtube.svg" alt="youtube"/>
                            </a>

                            <a href="https://www.instagram.com" className={styles.socialIcon} target="_blank">
                                <img src="images/icons/instagram.svg" alt="instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsDetails;
