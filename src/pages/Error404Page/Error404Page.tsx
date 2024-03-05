import Button from "@/components/UI/Button/Button";
import styles from "./Error404Page.module.scss";

const Error404Page = () => {
    return (
        <div className={styles.pageNotFound}>
            <div className="container">
                <div className={styles.title}>Ошибка 404</div>
                <p className={styles.text}>
                    Кажется что-то пошло не так! Страница, которую вы запрашиваете не существует. Возможно
                    она устарела, была удалена, или был введен неверный адрес в адресной строке.
                </p>
                <div className={styles.button}>
                    <Button href={"/"} type={"link"}>Перейти на главную</Button>
                </div>
            </div>
        </div>
    );
};

export default Error404Page;
