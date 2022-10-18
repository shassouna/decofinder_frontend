import Link from "next/link"

const Inspiration = ({
    item,
    typeprod,
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
                            <a>{item['attributes']['exposant']['data']['attributes']['NOM']}</a>
                        </Link>
                    </h2>
                    {
                        typeprod &&
                        <div className="product-category">
                            <Link 
                                href={`/${baseUrl}/${item['id']}`} 
                                as={`/${baseUrl}/${item['id']}`}
                            >
                                <a>{typeprod['attributes']['LIB_FR']}</a>
                            </Link>
                        </div>
                    }

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>
                                {item['attributes']['TARIF_PUB']?item['attributes']['TARIF_PUB']+" €":'Prix sur demande'} 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inspiration;
