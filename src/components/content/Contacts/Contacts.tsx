import {FC} from "react";
import ContactsAboutUs from "./ContactsAboutUs/ContactsAboutUs";
import ContactsDetails from "./ContactsDetails/ContactsDetails";
import classNames from "classnames";
import styles from "./Contacts.module.scss";

type Props = {
    showAboutUs: boolean,
}

const Contacts: FC<Props> = ({showAboutUs = false}) => {
    return (
        <section className={classNames(styles.contacts, {
            [styles.contactsCover]: !showAboutUs
        })}>

            {showAboutUs && <ContactsAboutUs/>}
            <ContactsDetails/>
        </section>
    );
};

export default Contacts;
