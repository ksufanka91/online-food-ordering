import {FC} from "react";
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import Product from "@/app/models/Product";
import Card from "@/components/content/Card/Card";
import MainTitle from "@/components/UI/MainTitle/MainTitle";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./ProductSlider.module.scss";

type Props = {
    products: Product[];
    title?: string;
}

const ProductSlider: FC<Props> = ({products, title}) => {
    const params: SwiperProps = {
        modules: [Pagination],
        spaceBetween: 16,
        slidesPerView: 4,
        pagination: {clickable: true},
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }
    }

    return (
        <div className={styles.productSlider}>
            <div className="container-lg">
                {title && (
                    <div className="container">
                        <MainTitle title={title}/>
                    </div>
                )}

                <Swiper {...params}>
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <Card product={product} className={styles.productItem}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductSlider;
