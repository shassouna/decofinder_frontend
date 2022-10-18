import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Search from "../ecommerce/Search";

const Header = ({
    toggleClick,
    menuHeaderData
}) => {

    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    //    console.log(res.data.data[2]['attributes']['rayondetails']["data"][0]['attributes']['categories']['data'])

    return (
        menuHeaderData&&menuHeaderData.length>0&&
        <>
            <header className="header-area header-style-1 header-height-2">
                <div 
                style={{height:"120px", backgroundColor:"#fcfcfc", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <img src="/assets/imgs/jpg.jpg"/>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block"
                style={{ marginLeft:"15%", marginRight:"15%"}}>
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/logoDF.jpg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <Link href="/inspirations">
                                                <a>
                                                    <span className="lable ml-0">
                                                    Inspirations
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/mag">
                                                <a>
                                                <span className="lable">
                                                Le MAG
                                                </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/nouveautes">
                                                <a>
                                                    <span className="lable">
                                                    Nouveautés
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-wishlist">
                                                <a>
                                                    <i className="fi fi-rs-heart mr-10"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/logoDF.jpg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">

                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                        {
                                         menuHeaderData.map(superunivers_univers_categorie=>
                                         superunivers_univers_categorie["attributes"]['CLE_LANG']=="0"&&
                                           (
                                           <li key={superunivers_univers_categorie["id"]} className="position-static">
                                                <Link href={`/superunivers/${superunivers_univers_categorie["attributes"]["slug"]}`}>
                                                    <a>
                                                        {superunivers_univers_categorie["attributes"]["LIB"]}
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                {
                                                superunivers_univers_categorie["attributes"]["rayondetails"]["data"].map(categorie_univers=>(
                                                    <li key={categorie_univers["id"]} className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href={`/univers/${categorie_univers["attributes"]["slug"]}`}>
                                                            <a key={categorie_univers["id"]}
                                                                className="menu-title"
                                                            >
                                                                {categorie_univers["attributes"]["LIB"]}
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                        {
                                                        categorie_univers["attributes"]["categories"]["data"].map(categorie=>(
                                                            categorie["attributes"]['CLE_TYPE_PROD']==categorie["attributes"]['CLE_TYPE_PROD_CATEGORIE']&&
                                                            <li key ={categorie["id"]}>
                                                                <Link href={`/univers/${categorie}`}>
                                                                    <a>
                                                                    {categorie["attributes"]['CLE_TYPE_PROD_CATEGORIE']}
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        ))
                                                        }
                                                        </ul>
                                                    </li>
                                                ))
                                                }  
                                                </ul>
                                            </li>
                                           )
                                         )   
                                        }
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
