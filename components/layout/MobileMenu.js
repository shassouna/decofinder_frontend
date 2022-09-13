import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../util/outsideClick";


const MobileMenu = ({ isToggled, toggleClick, menuHeaderData }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        menuHeaderData&&menuHeaderData.length>0&&
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/imgs/logoDF.jpg"
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Recherchez dans plus de 502 024 produits, entreprises ..."
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                {menuHeaderData.map(superunivers=>(
                                    <li
                                    className={
                                        isActive.key == 3
                                            ? "menu-item-has-children active"
                                            : "menu-item-has-children"
                                    }
                                >
                                    <span
                                        className="menu-expand"
                                        onClick={() => handleToggle(3)}
                                    >
                                        <i className="fi-rs-angle-small-down"></i>
                                    </span>
                                    <Link href="#">
                                        <a>Mega menu</a>
                                    </Link>
                                    <ul
                                        className={
                                            isActive.key == 3
                                                ? "dropdown"
                                                : "d-none"
                                        }
                                    >
                                        <li className="menu-item-has-children">
                                            <span className="menu-expand"></span>
                                            <Link href="#">
                                                <a>Women's Fashion</a>
                                            </Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>Dresses</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Blouses & Shirts
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Hoodies &
                                                            Sweatshirts
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>Women's Sets</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <span className="menu-expand"></span>
                                            <Link href="#">
                                                <a>Men's Fashion</a>
                                            </Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>Jackets</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Casual Faux
                                                            Leather
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Genuine Leather
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <span className="menu-expand"></span>
                                            <Link href="#">
                                                <a>Technology</a>
                                            </Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Gaming Laptops
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Ultraslim
                                                            Laptops
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>Tablets</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Laptop
                                                            Accessories
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-product-right">
                                                        <a>
                                                            Tablet
                                                            Accessories
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                ))} 
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <Link href="/page-contact">
                                    <a>17 rue Chartran, 92200, Neuilly sur Seine, France</a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#">
                                    <a>+33 (0)1 41 27 92 60</a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="/page-login-register">
                                    <a>contact@decofinder.com</a>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Suivez-nous</h5>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
