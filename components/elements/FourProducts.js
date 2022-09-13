import React from "react"
import Link from "next/link"

const Banner5 = ({fourProducts}) => {
    return (
        fourProducts&&
        <>
            <div className="col-lg-3 col-md-6">
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay="0d"
                >
                    <img src="/assets/imgs/banner/banner-1.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            {fourProducts.selection["attributes"]["TITRE_FR"]}
                        </h4>
                        <h4>
                            {fourProducts.asaisir["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                        </h4>
                    </div>
                    <Link href="/products"><a className="btn btn-xs">                            
                            Toutes les sélections du Jury <i className="fi-rs-arrow-small-right"></i>
                    </a></Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay=".2s"
                >
                    <img src="/assets/imgs/banner/banner-2.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            {fourProducts.coupdecoeur["attributes"]["TITRE_FR"]}
                        </h4>
                        <h4>
                            {fourProducts.asaisir["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                        </h4>
                    </div>
                    <Link href="/products"><a className="btn btn-xs">
                            Tous les coups de coeur <i className="fi-rs-arrow-small-right"></i>
                    </a></Link>
                </div>
            </div>
            <div className="col-lg-3 d-md-none d-lg-flex">
                <div
                    className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".4s"
                >
                    <img src="/assets/imgs/banner/banner-3.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            {fourProducts.achatenligne["attributes"]["TITRE_FR"]}
                        </h4>
                        <h4>
                            {fourProducts.achatenligne["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                        </h4>
                    </div>
                    <Link href="/products"><a className="btn btn-xs">
                            Tous les achats en ligne <i className="fi-rs-arrow-small-right"></i>
                    </a></Link>
                </div>
            </div>
            <div className="col-lg-3 d-md-none d-lg-flex">
                <div
                    className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".4s"
                >
                    <img src="/assets/imgs/banner/banner-3.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            {fourProducts.asaisir["attributes"]["TITRE_FR"]}
                        </h4>
                        <h4>
                            {fourProducts.asaisir["attributes"].typeprod.data["attributes"]["LIB_FR"]}
                        </h4>
                    </div>
                    <Link href="/products"><a className="btn btn-xs">
                            Toutes les promotions <i className="fi-rs-arrow-small-right"></i>
                    </a></Link>
                </div>
            </div>
        </>
    );
};

export default Banner5;
