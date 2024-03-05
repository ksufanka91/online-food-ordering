import {createHashRouter} from "react-router-dom";
import Layout from "../components/layout/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";
import PromoPage from "../pages/PromoPage/PromoPage"
import ProductPage from "../pages/ProductPage/ProductPage";
import Error404Page from "../pages/Error404Page/Error404Page";
import CartPage from "@/pages/CartPage/CartPage";
import CategoryPage from "@/pages/CategoryPage/CategoryPage";

const router = createHashRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {path: '', Component: HomePage},
            {path: 'cart', Component: CartPage},
            {path: 'delivery', Component: DeliveryPage},
            {path: 'promo', Component: PromoPage},
            {path: 'menu/:slug', Component: ProductPage},
            {path: 'menu/category/:slug', Component: CategoryPage},
            {path: 'notfound', Component: Error404Page}
        ]
    }
])

export default router;
