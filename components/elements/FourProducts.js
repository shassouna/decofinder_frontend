import React from "react"
import Link from "next/link"

const Banner5 = ({fourProducts}) => {
    return (
        fourProducts&&
        <>
            <div className="col-lg-3 col-md-6">
                <Link href={`/produits/${fourProducts.selection["id"]}`}>
                    <div
                        className="banner-img wow animate__animated animate__fadeInUp"
                        data-wow-delay="0d"
                    >
                        <img src="/assets/imgs/banner/banner-1.png" alt="" />
                        <div>
                            <h6>
                                {fourProducts.selection["attributes"].exposant.data["attributes"]["NOM"]}
                            </h6>
                            <h5>
                                {fourProducts.selection["attributes"]["TITRE_FR"]}
                            </h5>
                            <h6>
                                {fourProducts.selection["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                            </h6>
                        </div> 
                    </div>
                </Link>
                <br/>
                <Link href="/jury">
                    <a className="btn btn-xs">Toutes les sélections du Jury <i className="fi-rs-arrow-small-right"></i></a>
                </Link>
            </div>
            <div className="col-lg-3 col-md-6">
                <Link href={`/produits/${fourProducts.coupdecoeur["id"]}`}>
                    <div
                        className="banner-img wow animate__animated animate__fadeInUp"
                        data-wow-delay=".2s"
                    >
                        <img src="/assets/imgs/banner/banner-2.png" alt="" />
                        <div>
                            <h6>
                                {fourProducts.coupdecoeur["attributes"].exposant.data["attributes"]["NOM"]}
                            </h6>
                            <h5>
                                {fourProducts.coupdecoeur["attributes"]["TITRE_FR"]}
                            </h5>
                            <h6>
                                {fourProducts.coupdecoeur["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                            </h6>
                        </div> 
                    </div>
                </Link>
                <br/>
                <Link href="/coeur">
                    <a className="btn btn-xs">Tous les coups de coeur <i className="fi-rs-arrow-small-right"></i></a>
                </Link>
            </div>
            <div className="col-lg-3 col-md-6">
                <Link href={`/produits/${fourProducts.achatenligne["id"]}`}>
                    <div
                        className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".4s"
                    >
                        <img src="/assets/imgs/banner/banner-3.png" alt="" />
                        <div>
                            <h6>
                                {fourProducts.achatenligne["attributes"].exposant.data["attributes"]["NOM"]}
                            </h6>
                            <h5>
                                {fourProducts.achatenligne["attributes"]["TITRE_FR"]}
                            </h5>
                            <h6>
                                {fourProducts.achatenligne["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                            </h6>
                        </div> 
                    </div>
                </Link>
                <br/>
                <Link href="/marketplace">
                        <a className="btn btn-xs">Tous les achats en ligne <i className="fi-rs-arrow-small-right"></i></a>
                </Link>
            </div>
            <div className="col-lg-3 col-md-6">
                <Link href={`/produits/${fourProducts.asaisir["id"]}`}>
                    <div
                        className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".4s"
                    >
                        <img src="/assets/imgs/banner/banner-3.png" alt="" />
                        <div>
                            <h6>
                                {fourProducts.asaisir["attributes"].exposant.data["attributes"]["NOM"]}
                            </h6>
                            <h5>
                                {fourProducts.asaisir["attributes"]["TITRE_FR"]}
                            </h5>
                            <h6>
                                {fourProducts.asaisir["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                            </h6>
                        </div> 
                    </div>
                </Link>
                <br/>
                <Link href="/promos">
                    <a className="btn btn-xs">Toutes les promotions <i className="fi-rs-arrow-small-right"></i></a>
                </Link>
            </div>
        </>
    );
};

export default Banner5;
