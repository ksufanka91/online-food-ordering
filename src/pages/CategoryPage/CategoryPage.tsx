import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {useEffect} from "react";
import {fetchCategories} from "@/app/features/categories/categoriesSlice";
import {fetchProducts} from "@/app/features/catalog/catalogSlice";
import Contacts from "@/components/content/Contacts/Contacts";
import MenuScrollBar from "@/components/content/MenuScrollBar/MenuScrollBar";
import MainTitle from "@/components/UI/MainTitle/MainTitle";
import Card from "@/components/content/Card/Card";
import Category from "@/app/models/Category";
import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {
    const {slug} = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const categories = useAppSelector(state => {
        return state.category.categories;
    });

    const products = useAppSelector(state => {
        return state.catalog.products;
    });

    let category: Category | null = null;
    if (categories.length > 0) {
        category = categories.find(category => category.slug === slug) || null;
    }

    return (
        <div>
            <MenuScrollBar activeCategory={category}/>

            {category && (
                <>
                    <div className="container-lg">
                        <MainTitle title={category.name}/>
                        <div className={styles.products}>
                            {products
                                .filter(item => item.categories.includes(category?.id || 0))
                                .map(card => <Card key={card.id} product={card}/>)}
                        </div>
                    </div>
                </>
            )}
            <Contacts showAboutUs={false}/>
        </div>
    );
};

export default CategoryPage;
