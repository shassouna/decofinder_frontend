
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function FaqAcheteur() {

    const [activeIndex, setActiveIndex] = useState(13)

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
                                        <div className={activeIndex === 13 ? "tab-pane fade active show" : "tab-pane fade "} >
                                            <div className="card">
                                                <div className="card-header mb-20">
                                                    <h1 className="mb-10">LES QUESTIONS DES UTILISATEURS</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Comment faire pour acheter un produit qui m'intéresse ?</h2>
                                                        <p>Cliquez sur le produit qui vous intéresse dans Decofinder. Vous accédez en temps réel aux informations relatives au produit sélectionné. Si le produit est en vente sur Decofinder vous pouvez cliquer sur Acheter en ligne pour acheter le produit sur le site du fabricant ou de l'un de ses revendeurs.</p>
                                                        <p>Vous souhaitez plus d'informations ? Cliquez sur Contact pour lui adresser un mail qui comportera le visuel du produit sélectionné. Utilisez le commentaire du formulaire pour affiner votre demande.</p>
                                                        <p>Vous pouvez également accéder au site du fabricant en cliquant sur Site web.</p>
                                                        <p>Cliquez sur Points de vente pour accéder à la liste des points de vente du produit.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Puis-je obtenir les documentations de plusieurs fabricants d'un coup ?</h2>
                                                        <p>Oui, réalisez une sélection de produits (en cliquant sur liste d'envies) puis cliquez en haut de l'écran sur "Demander la documentation". Remplissez une seule fois le formulaire. Chaque fabricant des produits sélectionnés recevra votre demande avec la photo des produits qui le concernent. Ce service est gratuit.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Utile pour l'entreprise</h2>
                                                        <p>Parce qu'il est le pont entre l'offre et la demande, Decofinder est un véritable outil marketing pour les professionnels de la décoration. Exposer ses produits là où les clients les cherchent génère de nombreuses propositions d'affaire.</p>
                                                        <p>Decofinder fait connaitre vos produits et votre entreprise à des millions d'internautes (3 millions en 2012) du monde entier (45% sont à l'export). Ces visiteurs sont des pros pour 28%. Les particuliers (72%) sont fortement CSP+, ciblés déco, et surtout en phase active d'acquisition. C'est l'assurance d'une plus grande notoriété et d'un chiffre d'affaire additionnel. <Link href="#">En savoir plus</Link></p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Comment faire quand un fabricant ne vend pas aux particuliers ?</h2>
                                                        <p>Demandez-lui la liste de ses revendeurs si elle ne figure pas déjà sur sa page-partenaire.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Les prix ne figurent pas systématiquement pourquoi ?</h2>
                                                        <p>Nous les incitons, sans pouvoir les contraindre, à communiquer les prix publics conseillés même lorsqu'ils ne vendent qu'à des distributeurs.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Le fabricant n'est pas français</h2>
                                                        <p>Le rôle de Decofinder est de représenter l'offre produit la plus complète, tous pays confondus. Contacter le fabricant par mail, fax ou téléphone : il dispose peut-être d'un revendeur en France et aussi d'un service export.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; J'ai rempli un formulaire : mes données personnelles sont-elles communiquées ?</h2>
                                                        <p>Oui mais aux seuls fabricants auxquels vous vous êtes adressés et aux partenaires de Decofinder si vous l'avez autorisé.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Je n'ai pas trouvé le produit que je recherchais, Decofinder peut-il m'aider à le trouver ?</h2>
                                                        <p>Oui, précisez nous par mail le produit recherché, nous ferons le reste !</p>
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

export default FaqAcheteur
