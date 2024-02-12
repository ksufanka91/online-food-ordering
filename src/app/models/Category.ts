import Product from "@/app/models/Product";

interface Category {
    id: number,
    name: string;
    link: string;
    showOnHomePage: boolean;
    products?: Product[];
}

export default Category;