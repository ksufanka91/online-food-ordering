import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <img src="images/promo/main-title.png" alt="title" className={styles.image}/>
            </div>
        </section>
    );
};

export default Hero;