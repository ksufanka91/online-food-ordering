import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";
import PromoPage from "../pages/PromoPage/PromoPage"
import ProductPage from "../pages/ProductPage/ProductPage";
import Error404Page from "../pages/Error404Page/Error404Page";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {path: '', Component: HomePage},
            {path: 'delivery', Component: DeliveryPage},
            {path: 'promo', Component: PromoPage},
            {path: 'menu/:id', Component: ProductPage},
            {path: 'notfound', Component: Error404Page}
        ]
    }
])

export default router;