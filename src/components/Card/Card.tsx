import {Link} from "react-router-dom";
import Product from "@/app/models/Product";
import {FC} from "react";

type Props = {
    product: Product
}

const Card: FC<Props> = ({product}) => {
    return (
        <div>
            <Link to={'/'}>{product.name}</Link>
        </div>
    );
};

export default Card;