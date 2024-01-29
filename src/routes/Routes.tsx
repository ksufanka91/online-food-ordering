import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";
import PromoPage from "../pages/PromoPage/PromoPage"
import ProductPage from "../pages/ProductPage/ProductPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {path: '', Component: HomePage},
            {path: 'delivery', Component: DeliveryPage},
            {path: 'promo', Component: PromoPage},
            {path: 'menu/:id', Component: ProductPage},
        ]
    }
])

export default router;