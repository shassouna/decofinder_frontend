import Link from "next/link";

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
                            <a>{item['attributes']['LIB_FR']}</a>
                        </Link>
                    </h2>
                    {
                    item['attributes']['typeprods']&&
                    item['attributes']['typeprods']['data'].map(val=>(
                        <div className="product-rate-cover" key={val["id"]}>
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
