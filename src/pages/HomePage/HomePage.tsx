import Hero from "@/components/content/Hero/Hero";
import Contacts from "@/components/content/Contacts/Contacts";
import Card from "@/components/Card/Card";
import {useEffect} from "react";
import {fetchProducts} from "@/app/features/catalog/catalogSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";

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

            {!loading && products.map(product => <Card key={product.id} product={product}/>)}

            <Contacts showAboutUs={true}/>
        </>
    );
};

export default HomePage;