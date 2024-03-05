import Product from "@/app/models/Product";

interface Category {
    id: number,
    name: string;
    slug: string,
    showOnHomePage: boolean;
    products?: Product[];
}

export default Category;
