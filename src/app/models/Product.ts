interface Product {
    id: number;
    name: string;
    slug: string;
    link: string;
    price: number;
    proteins: number,
    fats: number,
    carbohydrates: number,
    kilocalories: number,
    categories: number[];
    image?: string;
    description?: string;
    weight?: string;
}

export default Product;