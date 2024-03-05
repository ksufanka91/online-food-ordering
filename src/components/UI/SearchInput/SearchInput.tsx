import styles from "./SearchInput.module.scss";

const SearchInput = () => {
    return (
        <form>
            <div className={styles.inputBox}>
                <label className="hidden">Введите адрес доставки</label>
                <input type="text" placeholder="Введите адрес доставки" className={styles.input}/>
            </div>
        </form>
    );
};

export default SearchInput;
