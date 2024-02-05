import Product from "@/app/models/Product";

interface Category {
    name: string;
    link: string;
    products?: Product[];
}

export default Category;