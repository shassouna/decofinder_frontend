import Link from "next/link";

const SingleProduct = ({
    item
}) => {

    return (
        <>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link
                            href="/products/[slug]"
                            as={`/products/sfsd`}
                        >
                            <a>
                                <img
                                    className="default-img"
                                    src={"/assets/imgs/shop/product-1-1.jpg"}
                                    alt=""
                                />
                                <img
                                    className="hover-img"
                                    src={"/assets/imgs/shop/product-1-1.jpg"}
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="product-content-wrap">
                    <h2>
                        <Link
                            href="/products/[slug]"
                            as={`/products/dfsdfsf`}
                        >
                            <a>{item['attributes']['LIB_FR']}</a>
                        </Link>
                    </h2>
                    {
                    item['attributes']['typeprods']&&
                    item['attributes']['typeprods']['data'].map(val=>(
                        <div className="product-rate-cover">
                            {val['attributes']['LIB_FR']}
                        </div>
                    ))
                    }
                    <br/>
                    <div className="product-card-bottom">
                        <div className="add-cart">
                            <a
                                className="add"
                                onClick={(e) => handleCart(product)}
                            >
                             Tous les produits
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
