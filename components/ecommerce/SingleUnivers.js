import Link from "next/link"

const SingleProduct = ({
    item,
    baseUrl
}) => {

    return (
        <>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link
                            href={`/${baseUrl}/${item['id']}`}
                            as={`/${baseUrl}/${item['id']}`}
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
                            href={`/${baseUrl}/${item['id']}`}
                            as={`/${baseUrl}/${item['id']}`}
                        >
                            <a>{item['attributes']['LIB']}</a>
                        </Link>
                    </h2>             
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
