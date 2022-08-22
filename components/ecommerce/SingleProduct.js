import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";

const SingleProduct = ({
    produit,
    addToCart
}) => {
    const handleCart = (product) => {
        addToCart(product);
        toast("Product added to Cart !");
    }

    return (
        <>
        {   /*
            produit && exposant && 
                <div className="product-cart-wrap mb-30" onMouseOver={handleShowDescription} onMouseLeave={handleHideDescription}>
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <Link
                                href={`/products/${produit["attributes"]["slug"]}`}
                                as={`/products/${produit["attributes"]["slug"]}`}
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
                        <div className="product-category">
                            <Link href={`/exposants/${exposant['attributes']["slug"]}`}>
                                <a>{exposant['attributes']['NOM']}</a>
                            </Link>
                        </div>
                        <h2>
                            <Link
                                href={`/produits/${produit["attributes"]["slug"]}`}
                                as={`/produits/${produit["attributes"]["slug"]}`}
                            >
                                <a>{produit['attributes']['TITRE_FR']}</a>
                            </Link>
                        </h2>
                        {showProductDescription &&
                            <div style={{visibilty:"hidden"}}>
                                <span className="font-small text-muted" dangerouslySetInnerHTML={{__html: produit['attributes']['DESC_FR'].split(" ").slice(0,12).join(" ")+" ...."}}>
                                </span>
                            </div>
                        }
                        <div className="product-card-bottom">
                            <div className="product-price">
                                <span>{produit['attributes']['TARIF_PUB']+" €"} </span>
                            </div>
                            <div className="add-cart">
                                <i className="fi-rs-heart fa-6"></i>
                            </div>
                        </div>
                    </div>
                </div>
                    */}
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link
                            href="#"
                            as={`#"`}
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
                    <div className="product-category">
                        <Link href="#">
                            <a>{"sdfsdfgsdgsdf"}</a>
                        </Link>
                    </div>
                    <h2>
                        <Link
                            href="#"
                            as={`#`}
                        >
                            <a>{"sdfsdfgsdgsdf"}</a>
                        </Link>
                    </h2>

                    <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                            <div
                                className="product-rating"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                            {" "}
                            ({"sdfsdfsdfsdfsdf"})
                        </span>
                    </div>

                    <div>
                        <span className="font-small text-muted">
                            By <Link href="/vendor/1"><a>NestFood</a></Link>
                        </span>
                    </div>

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>${"dfgd"} </span>
                            <span className="old-price">{'dfgdfg'}</span>
                        </div>
                        <div className="add-cart">
                            <a
                                className="add"
                                onClick={(e) => handleCart(product)}
                            >
                                <i className="fi-rs-shopping-cart mr-5"></i> Add
                            </a>
                        </div>
                    </div>
                    <div className="product-card-bottom">
                            <div className="product-price">
                                <span>{"sdfsdf"+" €"} </span>
                            </div>
                            <div className="add-cart">
                                <i className="fi-rs-heart fa-6"></i>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = {
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleProduct);
