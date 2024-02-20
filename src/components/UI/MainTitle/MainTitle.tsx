import {FC} from "react";
import styles from "./MainTitle.module.scss";

type Props = {
    title: string,
}

const MainTitle: FC<Props>  = ({title}) => {
    return (
        <h2 className={styles.title}>{title}</h2>
    );
};

export default MainTitle;