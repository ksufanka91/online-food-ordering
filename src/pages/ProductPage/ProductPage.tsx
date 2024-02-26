import {useEffect} from "react";
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {fetchProducts} from "@/app/features/catalog/catalogSlice";
import MenuScrollBar from "@/components/content/MenuScrollBar/MenuScrollBar";
import Contacts from "@/components/content/Contacts/Contacts";
import ProductCard from "@/components/content/ProductCard/ProductCard";
import Product from "@/app/models/Product";
import styles from "./ProductPage.module.scss";
import MainTitle from "@/components/UI/MainTitle/MainTitle";
import ProductSlider from "@/components/content/ProductSlider/ProductSlider";


const ProductPage = () => {
    const {slug} = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const products = useAppSelector(state => {
        return state.catalog.products;
    });

    let product: Product | null = null;
    if (products.length > 0) {
        product = products.find(product => product.slug === slug) || null;
    }

    return (
        <div className={styles.productPage}>
            <MenuScrollBar/>

            <div className="container">
                {product && <ProductCard product={product}/>}

                <MainTitle title="С этим товаром покупают"/>
            </div>

            <div className="container-lg">
                <ProductSlider products={products}/>
            </div>

            <Contacts showAboutUs={false}/>
        </div>
    );
};

export default ProductPage;