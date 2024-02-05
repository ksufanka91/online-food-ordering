import {FC} from "react";
import ContactsAboutUs from "./ContactsAboutUs/ContactsAboutUs";
import ContactsDetails from "./ContactsDetails/ContactsDetails";

import styles from "./Contacts.module.scss";

type Props = {
    showAboutUs: boolean,
}

const Contacts: FC<Props> = ({showAboutUs = false}) => {
    return (
        <section className={styles.contacts}>
            {showAboutUs && <ContactsAboutUs/>}
            <ContactsDetails/>
        </section>
    );
};

export default Contacts;