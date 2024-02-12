import Hero from "@/components/content/Hero/Hero";
import Contacts from "@/components/content/Contacts/Contacts";
import {useEffect} from "react";
import {fetchProducts} from "@/app/features/catalog/catalogSlice";
import {fetchCategories} from "@/app/features/categories/categoriesSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import ProductSlider from "@/components/content/ProductSlider/ProductSlider";

const HomePage = () => {

    const dispatch = useAppDispatch();

    const [products, loading, categories] = useAppSelector(state => {
        return [
            state.catalog.products,
            state.catalog.loading,
            state.category.categories,
        ];
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
            {loading && 'load data'}

            {!loading && categories.filter(category => category.showOnHomePage)
                .map(category => <ProductSlider title={category.name} products={products} key={category.id}/>)
            }

            <Contacts showAboutUs={true}/>
        </>
    );
};

export default HomePage;