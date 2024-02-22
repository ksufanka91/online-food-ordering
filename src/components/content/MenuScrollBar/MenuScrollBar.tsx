import {FC, useEffect} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import classNames from "classnames";
import styles from "./MenuScrollBar.module.scss";
import Category from "@/app/models/Category";
import {fetchCategories} from "@/app/features/categories/categoriesSlice";

type Props = {
    activeCategory?: Category | null,
}

const MenuScrollBar: FC<Props> = ({activeCategory}) => {
    const categories = useAppSelector(state => {
        return state.category.categories;
    });

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <section className={styles.menuScrollBar}>
            <div className="container">
                <div className={styles.menu}>
                    {categories.map(category => (
                        <Link to={`/menu/category/${category.slug}`}
                              key={category.id}
                              className={classNames(styles.menuItem, {[styles.active]: category.id === activeCategory?.id})}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuScrollBar;