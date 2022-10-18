import Link from "next/link"
import Image from "next/image"
const Nouveautes = ({
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
                    <h2 className="product-card-bottom">
                        <Link
                            href={`/${baseUrl}/${item['id']}`}
                            as={`/${baseUrl}/${item['id']}`}
                        >
                            <div className="product-price">
                                <span><a>{item['attributes'].exposant['data']['attributes']['NOM']}</a></span>  
                            </div>                         
                        </Link>
                    </h2>
                    <h2>
                        <Link
                            href={`/${baseUrl}/${item['id']}`}
                            as={`/${baseUrl}/${item['id']}`}
                        >
                            <a>{item['attributes']['TITRE_FR']}</a>
                        </Link>
                    </h2>

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>
                                {item['attributes']['TARIF_PUB']?item['attributes']['TARIF_PUB']+" €":'Prix sur demande'} 
                            </span>
                        </div>
                        <div>                       
                            <Image
                                src="/assets/imgs/theme/heart.svg"
                                alt=""
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nouveautes;
