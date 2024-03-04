import {useAppSelector} from "@/app/hooks";
import MenuScrollBar from "@/components/content/MenuScrollBar/MenuScrollBar";
import MainTitle from "@/components/UI/MainTitle/MainTitle";
import Button from "@/components/UI/Button/Button";
import CartItem from "@/components/content/ProductInCart/CartItem";
import priceFormat from "@/utils/priceFormat";
import styles from "./CartPage.module.scss";

const CartPage = () => {
    const productsInCart = useAppSelector(state => {
        return state.cart.products;
    });

    const totalPrice = productsInCart.map(item => item.count * item.price).reduce((acc, curr) => acc + curr, 0);

    return (
        <>
            <MenuScrollBar/>

            <div className="container">
                <MainTitle title="Корзина"/>
                {productsInCart.length === 0 && <div>В корзине пока ничего нет</div>}

                <div className={styles.productsBox}>
                    <div>
                        {productsInCart.map(product => <CartItem product={product} key={product.id}/>)}
                    </div>
                </div>

                {productsInCart.length > 0 && (
                    <div className={styles.order}>
                        <div className={styles.price}>Итого: <span className={styles.totalPrice}>{priceFormat(totalPrice)}</span></div>
                        <Button href={"/notfound"} type={"link"} size={"big"}>Оформить заказ</Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;