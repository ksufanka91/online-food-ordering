import styles from "./MenuScrollBar.module.scss";
import {Link} from "react-router-dom";
import {useAppSelector} from "@/app/hooks";

const MenuScrollBar = () => {
    const categories = useAppSelector(state => {
        return state.category.categories;
    })


    return (
        <section className={styles.menuScrollBar}>
            <div className="container">
                <div className={styles.menu}>
                    {categories.map(category => (
                        <Link to={'/'} className={styles.menuItem}>{category.name}</Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuScrollBar;