import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <>
            <Link to='/'>Main</Link>
            <Link to='/promo'>Promo Page</Link>
            <Link to='/delivery'>Delivery Page</Link>
        </>
    );
};

export default Footer;