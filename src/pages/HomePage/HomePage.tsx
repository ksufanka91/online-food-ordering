import Hero from "@/components/content/Hero/Hero";
import Contacts from "@/components/content/Contacts/Contacts";
import {useEffect} from "react";
import {fetchProducts} from "@/app/features/catalog/catalogSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import ProductSlider from "@/components/content/ProductSlider/ProductSlider";

const HomePage = () => {

    const dispatch = useAppDispatch();

    const [products, loading] = useAppSelector(state => {
        return [
            state.catalog.products,
            state.catalog.loading,
        ];
    });

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>
            <Hero/>
            {loading && 'load data'}

            {/*{!loading && products.map(product => <Card key={product.id} product={product}/>)}*/}
            {!loading && <ProductSlider title={'test'} products={products}/>}
            {!loading && <ProductSlider title={'test2'} products={products}/>}
            {!loading && <ProductSlider title={'test3'} products={products}/>}

            <Contacts showAboutUs={true}/>
        </>
    );
};

export default HomePage;