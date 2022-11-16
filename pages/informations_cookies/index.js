
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function InformationsCookies() {

    const [activeIndex, setActiveIndex] = useState(18)

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
                                                <div className="card-header mb-20">
                                                    <h1>INFORMATIONS SUR LES COOKIES</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Qu'est-ce qu'un cookie ?</h2>
                                                        <p>Les cookies sont de petits fichiers texte qui sont installés sur votre ordinateur ou votre périphérique lorsque vous visitez nos sites Web.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Finalité des cookies</h2>
                                                        <p>Nous utilisons les cookies afin de rendre vos visites et vos achats sur nos sites plus efficaces. Les cookies nous permettent également d'améliorer la navigation sur nos sites et de comprendre vos comportements d'achat.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Notre utilisation des cookies</h2>
                                                        <p>Nous utilisons les cookies pour :</p>
                                                        <ul>
                                                            <li>Mémoriser vos informations de connexion.</li>
                                                            <li>Vous identifier lorsque vous vous connectez à nos sites Web.</li>
                                                            <li>Mémoriser les produits que vous avez placés dans votre panier lorsque vous visitez des pages différentes lors d'une session de navigation, que vous accédez à la page de paiement ou que vous mettez fin à votre session avant d'avoir finalisé votre achat.</li>
                                                            <li>Réunir des informations pouvant nous aider à vous adresser des publicités adaptées à vos intérêts.</li>
                                                            <li>Mémoriser vos préférences de navigation telles que votre langue, la taille de la police, la présentation de la page ou les couleurs préférées. Le tout pour vous permettre de parcourir notre site plus rapidement et plus facilement.</li>
                                                            <li>Collecter des informations analytiques pour, par exemple, compter le nombre de visiteurs sur nos sites Web et identifier les pages de nos sites que vous visitez le plus souvent. Nous utilisons les données d'analyse que nous collectons à des fins marketing et de planification des ressources.</li>
                                                            <li>Déterminer si nos clients et visiteurs s'adaptent facilement aux modifications que nous pouvons apporter à nos sites Web.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Informations collectées grâce aux cookies</h2>
                                                        <p>Les cookies nous aident à recueillir des renseignements sur la façon dont vous utilisez notre site Web, mais nous ne conservons aucune information permettant de vous identifier personnellement dans les données de nos cookies vous concernant. Nous enregistrons uniquement un identifiant de session unique qui nous aidera à retrouver un profil d'utilisateur ainsi que vos préférences lors de votre prochaine visite.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Types de cookies</h2>
                                                        <p>Cookies de session - Les cookies de ce type sont temporairement stockés sur votre ordinateur ou votre périphérique pendant une session de navigation. Ils sont effacés de votre ordinateur ou de votre périphérique à la fin de la session de navigation.</p>
                                                        <p>Cookies permanents - Les cookies de ce type demeurent plus longtemps sur votre ordinateur. Les cookies permanents nous aident à vous reconnaître lorsque nous devons savoir qui vous êtes pour plus d'une session de navigation.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Gestion des cookies</h2>
                                                        <p>Le menu de la plupart des navigateurs comporte des options vous permettant de gérer vos cookies en réglant ou en configurant vos paramètres de cookies. Généralement, le navigateur vous offre la possibilité :</p>
                                                        <ul>
                                                            <li>d'afficher vos cookies .</li>
                                                            <li>d'autoriser les cookies .</li>
                                                            <li>de désactiver tous les cookies, ou uniquement des cookies précis .</li>
                                                            <li>de désactiver tous les cookies lorsque vous fermez votre navigateur .</li>
                                                            <li>de bloquer les cookies .</li>
                                                            <li>d'être informé lorsque vous recevez un cookie.</li>
                                                        </ul>
                                                        <p>Veuillez noter que si vous choisissez de bloquer nos cookies, certaines des fonctionnalités de nos sites Web seront désactivées (notamment des services tels que le panier d'achat, la gestion ou la personnalisation des commandes) et votre navigation risque également d'en être affectée. Si vous configurez les options de votre navigateur pour supprimer tous les cookies, vos préférences de navigation seront effacées à la fermeture de votre navigateur.</p>
                                                        <p>Veuillez noter qu'à moins que vous n'ayez réglé les paramètres de votre navigateur de façon à refuser les cookies, notre système émettra des cookies dès que vous vous rendrez sur l'un de nos sites.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Informations supplémentaires sur les cookies</h2>
                                                        <p>Pour en savoir plus sur les cookies, nous vous invitons à consulter les pages suivantes :</p>
                                                        <ul>
                                                            <li>www.allaboutcookies.org</li>
                                                            <li>http://www.cnil.fr/vos-libertes/vos-traces/les-cookies/</li>
                                                            <li>www.international-chamber.co.uk/our-expertise/digitaleconomy</li>
                                                        </ul>
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

export default InformationsCookies
