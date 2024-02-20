interface Product {
    id: number;
    name: string;
    slug: string;
    link: string;
    price: number;
    image?: string;
    description?: string;
    weight?: string;
    categories: number[];
}

export default Product;