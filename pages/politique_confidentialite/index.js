
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function PolitiqueConfidentialite() {

    const [activeIndex, setActiveIndex] = useState(19)

    return (
            <div className="page-content pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 m-auto">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="dashboard-menu">
                                        <LeftSideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="tab-content account dashboard-content pl-50">
                                        <div className="tab-pane fade active show">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h1>POLITIQUE DE CONFIDENTIALITÉ</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; 1.Collecte des données personnelles</h2>
                                                        <p className="mb-15">Lorsque vous utilisez Decofinder, nous collectons certaines données personnelles que vous nous communiquez, provenant de tiers et, ce, automatiquement. Notamment via le navigateur et les cookies.</p>
                                                        <h3 className="mb-15">Données personnelles fournies par vos soins.</h3>
                                                        <p>Nous recueillons les données que vous nous communiquez, notamment les données personnelles liées à votre compte et à votre profil, le contenu que vous publiez sur notre Plateforme, les informations concernant vos achats, vos communications, et les données que vous nous communiquez dans le cadre d'enquêtes ou de concours.</p>
                                                        <p className="mb-15">Communications. Lors de vos échanges par email avec nos équipes ou celles de nos exposants via la plateforme Decofinder, une copie de vos échanges est conservée par Decofinder.</p>
                                                        <h3 className="mb-15">Données personnelles collectées automatiquement</h3>
                                                        <p className="mb-15">Decofinder peut être amené à collecter des données relatives à votre utilisation de la Plateforme telle que l’historique de recherche et la consultation des pages du site. Nous le faisons dans l’objectif d’améliorer la pertinence et la navigabilité du site.</p>
                                                        <h3 className="mb-15">Cookies et autres technologies de suivi.</h3>
                                                        <p>Dans le cadre de votre utilisation de Decofinder, nous déposons des Cookies pour recueillir des données relatives à vos consultations et vos interactions. Veuillez consulter la Politique d'utilisation des Cookies de Decofinder pour plus d'informations</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; 2.Utilisation des données personnelles</h2>
                                                        <p>Decofinder utilise les données collectées pour alimenter, développer et personnaliser sa Plateforme et pour échanger des messages avec vous concernant sa Plateforme.</p>
                                                        <p>Cela permet entre autre d’adapter le contenu de notre site et personnaliser votre navigation.</p>
                                                        <p>Les messages échangés sur la plateforme peuvent être utilisés pour améliorer le fonctionnement de nos outils ainsi que leurs performances.</p>
                                                        <p>Decofinder pourra utiliser certains Cookies, les informations de vos appareils, et vos adresses IP afin de vous identifier.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; 3.Partage de vos données personnelles</h2>
                                                        <p className="mb-15">Decofinder ne réalise pas de location ni de vente de vos coordonnées de contact.</p>
                                                        <h3 className="mb-15">Annonceurs et réseaux publicitaires.</h3>
                                                        <p>Decofinder utilise des réseaux publicitaires et des entreprises similaires pour diffuser des annonces publicitaires sur des sites tiers et l'aider dans l'évaluation de l'efficacité de nos campagnes.</p>
                                                        <p>Decofinder peut collaborer avec des partenaires publicitaires pour diffuser des annonces sur sa Plateforme. Pour cela nous pouvons être amenés à communiquer certaines données avec ces prestataires mais, à l'exception d'informations hachées ou d'identifiants d'appareil, nous ne divulguons pas votre nom, vos coordonnées ou d'autres données personnelles.</p>
                                                        <p>Les entreprises faisant de la publicité sur notre Plateforme peuvent également utiliser des Cookies ou des technologies similaires pour suivre vos activités sur notre Plateforme.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; 4.Protection des données personnelles</h2>
                                                        <p>Nous appliquons les mesures appropriées pour prévenir la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction de vos données personnelles, en tenant compte des risques inhérents au traitement et de la nature des données personnelles.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; 5.Mises à jour de la Politique de confidentialité</h2>
                                                        <p>Decofinder peut modifier la présente Politique de confidentialité régulièrement. Notre utilisation des données personnelles vous concernant sera régie par la version la plus récente de cette Politique de confidentialité. Si nous apportons des changements substantiels à notre Politique de confidentialité, nous vous informerons de ces modifications par email ou en publiant un avis sur notre Site.</p>
                                                        <p>En continuant à consulter ou à utiliser notre Plateforme après l'entrée en vigueur de ces modifications, vous êtes soumis à cette version modifiée de la Politique de confidentialité.</p>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <RightSideBar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           )
        }

export default PolitiqueConfidentialite
