import React from "react"
import Link from "next/link"

const Footer = () => {
    
    return (
        <>
            <footer className="main">
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <Link href="/"><a>
                                            <img
                                                src="/assets/imgs/logoDF.jpg"
                                                alt="logo"
                                            />
                                        </a>
                                        </Link>
                                    </div>
                                    <ul className="contact-infor">
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-location.svg"
                                                alt=""
                                            />
                                            <strong>Addresse : </strong>{" "}
                                            <span>
                                            17 rue Chartran,
                                            92200, 
                                            Neuilly sur Seine,
                                            France
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt=""
                                            />
                                            <strong>Appelez nous : </strong>
                                            <span>+33 (0)1 41 27 92 60</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt=""
                                            />
                                            <strong>Email : </strong>
                                            <span>
                                            contact@decofinder.com
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-clock.svg"
                                                alt=""
                                            />
                                            <strong>Heures : </strong>
                                            <span>
                                            du lundi au vendredi
                                            de 9h30 à 18h00
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp ml-20"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">A PROPOS</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                    <Link href="/presentation"><a>- A propos</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/qui_sommes_nous"><a>- L'équipe</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/audience"><a>- Audience et Visitorat</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/revuedepresse"><a>- Revue de presse</a></Link>
                                    </li>
                                    <li>
                                    <a href="/assets/pdf/ow.pdf">- Sondage Opinion Way</a>
                                    </li>
                                    <li>
                                    <Link href="/contacts"><a>- Contact</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/recrutement"><a>- Recrutement</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/mentions_legales"><a>- Mentions légales</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp ml-20"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">EXPOSER</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                    <Link href="/utile_exposant"><a>- Utile pour l'exposant</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/testimoniaux_exposants"><a>- Témoignage exposant</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/faq_exposant"><a>- FAQ Exposant</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/conditions_generales_de_vente"><a>- Conditions générales de vente</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp ml-20"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">VENDRE</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                    <Link href="la_marketplace"><a>- Vendre plus grâce à Decofinder</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp ml-20"
                                data-wow-delay=".4s"
                            >
                                <h4 className="widget-title ">ACHETER</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                    <Link href="/utile_acheteur"><a>- Utile pour l'acheteur</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/testimoniaux_acheteurs"><a>- Témoignages acheteurs</a></Link>
                                    </li>
                                    <li>
                                    <Link href="/faq_acheteur"><a>- FAQ Acheteurs</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                &copy 2000-2022 Distrimart SAS - Déclaration CNIL n1064213
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <span> Tél : +33 1 41 27 92 60</span>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <span>Fax : +33 1 47 39 89 39</span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6 className="mt-10">Suivez-nous</h6>
                                <a target="_blank" href="https://www.facebook.com/decofinder">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a target="_blank" href="https://twitter.com/decofinder">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/decofinder/">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a target="_blank" href="https://www.pinterest.fr/decofinder/">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
