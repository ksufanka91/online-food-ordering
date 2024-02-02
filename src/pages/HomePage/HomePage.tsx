import styles from "./HomePage.module.scss";
import Hero from "../../components/content/Hero/Hero";
import Contacts from "../../components/content/Contacts/Contacts";
import Description from "../../components/content/Description/Description";

const HomePage = () => {
    return (
        <>
            <Hero/>

            <div className={styles.bgBox}>
                <Description/>
                <Contacts/>
            </div>

        </>
    );
};

export default HomePage;