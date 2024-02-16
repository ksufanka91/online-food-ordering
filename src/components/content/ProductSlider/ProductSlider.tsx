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
        // centerPadding: "50px",
        slidesToShow: 4,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
        ]
    };

    return (
        <div className={styles.productSlider}>
            <div className="container-lg">
                <div className="container">
                    <h2 className={styles.title}>{title}</h2>
                </div>

                <Slider {...settings} className={styles.slider}>
                    {products.map(product => (
                        <Card key={product.id} product={product} className={styles.productItem}/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductSlider;
