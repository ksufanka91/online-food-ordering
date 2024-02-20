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
    proteins: number,
    fats: number,
    carbohydrates: number,
    kilocalories: number,
}

export default Product;