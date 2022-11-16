
import ImagesProduct from "../sliders/ImagesProduct";
import ProductTab from "../elements/ProductTab";
// My imports 
import Image from "next/image"

const ProductDetails = ({product, produit, setOpenClass}) => { 

    const handleShowPointsDeVentes = (event) => {
        event.preventDefault()
        setOpenClass(0)
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
                                                <ImagesProduct product={product} produit={produit} />
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
                                                {produit['attributes'].typeprod&&
                                                produit['attributes'].typeprod['data']['attributes']['LIB_FR'].split("-").join(" ")} 
                                                {produit['attributes']['TITRE_FR']&& " - " + produit['attributes']['TITRE_FR']}
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
                                                <a href={`${produit['attributes']['URL_PAGE']}`} target="_blank">
                                                    <button style={{width:'100%'}} className="produitButtonsContainerButton">
                                                    <Image
                                                        src="/assets/imgs/theme/globe.svg"
                                                        alt=""
                                                        width={18}
                                                        height={18}
                                                    />&nbsp;&nbsp;&nbsp;SITE WEB
                                                    </button>
                                                </a>
                                                <a href={"#"}>
                                                    <button style={{width:'100%'}} className="produitButtonsContainerButton">
                                                    <Image
                                                        src="/assets/imgs/theme/help-circle.svg"
                                                        alt=""
                                                        width={18}
                                                        height={18}
                                                    />&nbsp;&nbsp;&nbsp;QUESTION / DEVIS
                                                    </button>
                                                </a>
                                                <a href={"#"}>
                                                    <button style={{width:'100%'}} className="produitButtonsContainerButton"
                                                        onClick={handleShowPointsDeVentes}>
                                                    <Image
                                                        src="/assets/imgs/theme/map-pin.svg"
                                                        alt=""
                                                        width={18}
                                                        height={18}
                                                    />&nbsp;&nbsp;&nbsp;POINTS DE VENTE
                                                    </button>
                                                </a>
                                                <a href={"#"}>
                                                    <button style={{width:'100%'}} className="produitButtonsContainerButton">
                                                    <Image
                                                        src="/assets/imgs/theme/heart.svg"
                                                        alt=""
                                                        width={18}
                                                        height={18}
                                                    />&nbsp;&nbsp;&nbsp;METTRE EN FAVORIS
                                                    </button>
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
                                            produit['attributes'].lienrevendeurproduits['data'].map(val=>{
                                                return (
                                                    <a href={"#"}>
                                                        <button style={{width:'100%'}} className="produitButtonsContainerButton">
                                                        <Image
                                                            src="/assets/imgs/theme/icons/icon-cart.svg"
                                                            alt=""
                                                            width={18}
                                                            height={18}
                                                        />&nbsp;&nbsp;&nbsp;{val['attributes'].exposant['data']['attributes']['NOM']}
                                                        </button>
                                                    </a>
                                                )
                                            })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductTab produit={produit}/>
                    </div>
                </div>
            </section>
        </>
    );
};


export default ProductDetails
