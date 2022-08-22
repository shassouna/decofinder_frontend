import { connect } from "react-redux";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity
} from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import ProductTab from "../elements/ProductTab";
import RelatedSlider from "../sliders/RelatedProducts";
import ThumbSlider from "../sliders/Thumb";

// My imports 
import Image from "next/image"

const ProductDetails = ({
    product,
    addToCompare,
    addToCart,
    addToWishlist,
    quickView,
    produit
}) => { 
    console.log(produit)

    const handleCart = (product) => {
        addToCart(product);
        toast("Product added to Cart !");
    };

    const handleCompare = (product) => {
        addToCompare(product);
        toast("Added to Compare list !");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast("Added to Wishlist !");
    }

    return (
        produit&&
        <>
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50  mt-30">
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                        <div className="detail-gallery">
                                            <span className="zoom-icon">
                                                <i className="fi-rs-search"></i>
                                            </span>

                                            <div className="product-image-slider">
                                                <ThumbSlider product={product} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12" style={{backgroundColor:"#FAFAFB"}}>
                                        <div className="detail-info  pr-30 pl-30">
                                            <div className="detail-info-header">
                                                <Image
                                                style={{backgroundColor:"gray", borderRadius:"4.5px"}}
                                                src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                                width={160}
                                                height={130}>
                                                </Image>
                                                <button className="detail-info-header-button">Suivre</button>
                                            </div>
                                            <h2 className="title-detail">
                                                {produit['data']['attributes'].typeprod&&
                                                produit['data']['attributes'].typeprod['data']['attributes']['LIB_FR'].split("-").join(" ")} 
                                                {produit['data']['attributes']['TITRE_FR']&& " - " + produit['data']['attributes']['TITRE_FR']}
                                            </h2>

                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price  text-brand">{produit['TARIF_PUB']&&"$"+produit['TARIF_PUB']}</span>
                                                    <span>
                                                        <span className="old-price font-md ml-15">{!produit['TARIF_PUB']&&"Le prix sur le site du vendeur"}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="produitButtonsContainer">
                                                <a target="_blank" href={"#"}>
                                                <button style={{width:'100%'}} className="produitButtonsContainerButton"><i className="fi-rs-shopping-cart mr-5"></i>SITE WEB</button>
                                                </a>
                                                <a href={"#"}>
                                                <button style={{width:'100%'}} className="produitButtonsContainerButton"><i className="fi-rs-shopping-cart mr-5"></i>QUESTION / DEVIS</button>
                                                </a>
                                                <a href={"#"}>
                                                <button style={{width:'100%'}} className="produitButtonsContainerButton"><i className="fi-rs-shopping-cart mr-5"></i>POINTS DE VENTE</button>
                                                </a>
                                                <a href={"#"}>
                                                <button style={{width:'100%'}} className="produitButtonsContainerButton"><i className="fi-rs-shopping-cart mr-5"></i>METTRE EN FAVORIS</button>
                                                </a>
                                            </div>
                                            <div className="mobile-social-icon">
                                                <a target="_blank" href="https://www.facebook.com/decofinder">
                                                    <Image
                                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                                        alt=""
                                                        width={100}
                                                        height={100}
                                                        className="mobile-social-icon-item"
                                                    />
                                                </a>
                                                <a target="_blank" href="https://twitter.com/decofinder">
                                                    <Image
                                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                                        alt=""
                                                        width={100}
                                                        height={100}
                                                        className="mobile-social-icon-item"
                                                    />
                                                </a>
                                                <a target="_blank" href="https://www.instagram.com/decofinder/">
                                                    <Image
                                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                                        alt=""
                                                        width={100}
                                                        height={100}
                                                        className="mobile-social-icon-item"
                                                    />
                                                </a>
                                                <a target="_blank" href="https://www.pinterest.fr/decofinder/">
                                                    <Image
                                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                                        alt=""
                                                        width={100}
                                                        height={100}
                                                        className="mobile-social-icon-item"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12" style={{backgroundColor:"#FAFAFB", marginTop:"50px"}}>
                                        <div className="detail-info  pr-30 pl-30">
                                            <h2 className="title-detail" style={{ marginTop:"20px",fontWeight: 700, fontSize: '24px', lineHeight: '32px'}}>Acheter en ligne</h2>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginRight:"10px", marginLeft:"10px"}}>
                                            {
                                            produit['data']['attributes'].lienrevendeurproduits['data'].map(val=>{
                                                return (
                                                    <a target="_blank" href={val["URL_PAGE"]}>
                                                        <button style={{width:"100%"}} className="button button-add-to-cart">
                                                        <p>{val['attributes']['nom_exposant']}</p>
                                                        <div><i className="fi-rs-shopping-cart mr-5"></i></div>
                                                        </button>
                                                    </a> 
                                                )
                                            })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {quickView ? null : (
                                    <>
                                        <ProductTab produit={produit}/>
                                        <div className="row mt-60">
                                            <div className="col-12" style={{display:"flex", justifyContent:"center"}}>
                                                <h3 className="section-title style-1 mb-30">{produit['data']['attributes']['exposant']['data']['attributes']['NOM']}</h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products position-relative">
                                                    <RelatedSlider 
                                                    produits={produit['data']['attributes']['exposant']['data']['attributes']['produits']['data']}
                                                    //exposant={exposant}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
});

const mapDispatchToProps = {
    addToCompare,
    addToWishlist,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
