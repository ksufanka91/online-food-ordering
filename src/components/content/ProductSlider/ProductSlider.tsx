import Slider from "react-slick";
import {FC} from "react";
import Product from "@/app/models/Product";
import Card from "@/components/content/Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductSlider.module.scss";

type Props = {
    title: string;
    products: Product[]
}

const ProductSlider: FC<Props> = ({title, products}) => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        arrows: false,
    };

    return (
        <div className="container-lg">
            <h2>{title}</h2>

            <Slider {...settings} className={styles.slider}>
                {products.map(product => (
                    <Card key={product.id} product={product} className={styles.productItem}/>
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;
