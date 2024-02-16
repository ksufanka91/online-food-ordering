import Hero from "@/components/content/Hero/Hero";
import Contacts from "@/components/content/Contacts/Contacts";
import {useEffect} from "react";
import {fetchProducts} from "@/app/features/catalog/catalogSlice";
import {fetchCategories} from "@/app/features/categories/categoriesSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import ProductSlider from "@/components/content/ProductSlider/ProductSlider";
import MenuScrollBar from "@/components/content/MenuScrollBar/MenuScrollBar";

const HomePage = () => {

    const dispatch = useAppDispatch();

    const products = useAppSelector(state => {
        return state.catalog.products;
    });

    const loadingProducts = useAppSelector(state => {
        return state.catalog.loading;
    });

    const categories = useAppSelector(state => {
        return state.category.categories;
    });

    const loadingCategories = useAppSelector(state => {
        return state.category.loading;
    });

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);


    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <>
            <Hero/>
            {loadingProducts && 'load data'}
            <MenuScrollBar/>

            {!loadingCategories && categories.filter(category => category.showOnHomePage)
                .map(category => <ProductSlider title={category.name} products={products} key={category.id}/>)
            }

            <Contacts showAboutUs={true}/>
        </>
    );
};

export default HomePage;