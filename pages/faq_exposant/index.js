
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function FaqExposant() {

    const [activeIndex, setActiveIndex] = useState(14)

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
                                        <div className={activeIndex === 14 ? "tab-pane fade active show" : "tab-pane fade "} >
                                            <div className="card">
                                                <div className="card-header mb-20">
                                                    <h1 className="mb-10">LES QUESTIONS DES PROFESSIONNELS</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Quels sont les formats d'images que l'on peut insérer ?</h2>
                                                        <p>Format jpeg, gif ou tiff. Taille : hauteur ou largeur 600 pixels minimum</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Certains produits s'affichent en grand au milieu des recherches produits. Pourquoi ?</h2>
                                                        <p>Ce sont les emplacements Premiums. Contactez notre service commercial pour plus d'informations. Mail & téléphone.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Comment améliorer l'exposition de mes produits ?</h2>
                                                        <p>Renseigner tous les champs de description des produits (couleur, matériau, style, prix, etc.) permet aux internautes de les trouver plus facilement en utilisant les filtres.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Puis-je mettre les prix professionnels ?</h2>
                                                        <p>Demandez-lui la liste de ses revendeurs si elle ne figure pas déjà sur sa page-partenaire.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Les prix ne figurent pas systématiquement pourquoi ?</h2>
                                                        <p>Decofinder draine le plus large public ; les prix sont en conséquence des prix publics conseillés. C'est aussi sur la base de ce prix public qu'un professionnel jugera de la cherté d'un produit.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Faut-il indiquer les prix ?</h2>
                                                        <p>La réponse est OUI ! Le prix public conseillé ; si l'on peut comprendre que le fabricant laisse à ses distributeurs la liberté de fixer eux-mêmes leurs prix, il faut comprendre d'abord l'Internaute : l'absence de prix peut simplement le rebuter.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Quel est l'ordre d'apparition des produits ?</h2>
                                                        <p>Par ordre de prix décroissant, les produits sans indication de prix venant après.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Je souhaite mettre un produit en promotion. Comment le faire et est-ce payant ?</h2>
                                                        <p>Pour les adhérents de la Marketplace, ce service est gratuit. Dans le Decopro, allez dans l'onglet « produits », sélectionnez le produit à promouvoir, puis, dans le champ « promotion » entrez le nouveau prix et validez.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Je souhaite vendre mes produits mais je n'ai pas de site de vente en ligne. Comment faire ?</h2>
                                                        <p>Decofinder vous propose de vendre vos produits directement sur la Marketplace. Envoyez-nous un mail à e.commerce@decofinder.com pour avoir plus d'informations</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Puis-je faire paraître autant de communiqués de presse que je le souhaite ?</h2>
                                                        <p>Oui, nous vous conseillons d’utiliser fréquemment ce service qui bénéficie d'un emplacement sur la Une de Decofinder et qui apparaît aussi sur votre page partenaire.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Je n'ai pas le temps de rentrer mes produits, comment faire ?</h2>
                                                        <p>Vous avez la possibilité de charger vos produits en utilisant des flux. C'est un moyen simple et efficace de rentrer tous vos produits sur Decofinder.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Quelle est la durée du contrat de référencement des produits ?</h2>
                                                        <p>Tous nos contrats sont mensuels, avec une durée d'engagement minimum de 12 mois. Passé ce délai, vous pouvez résilier à tout moment avec un préavis de trois mois (tout mois commencé étant dû)</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Je ne vends qu'aux professionnels</h2>
                                                        <p>Plus de 50% de nos exposants sont dans ce cas. N'oubliez pas que c'est le consommateur final qui achète vos produits, même s'il s'adresse à l'un de vos dépositaires. Grâce à Decofinder, vous pouvez indiquer que vous ne vendez qu'aux distributeurs tout en publiant leur liste sur votre page partenaire. Ils apprécieront d'être contactés par les particuliers qui auront pu découvrir vos produits dans Decofinder.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; J'ai déjà un site, pourquoi faire paraître mes produits sur Decofinder ?</h2>
                                                        <p>Pour aller sur votre site, il faut vous connaître ou avoir la chance de vous trouver sur les premières pages des moteurs pour chacun de vos produits. Ce n'est peut-être pas le cas. Nous travaillons chaque jour le référencement de notre site, lequel est facilité par son audience et par sa popularité. De même qu'une brochure ne remplit pas la fonction des revues de décoration, votre entreprise bénéficiera de l'audience, du positionnement et des actions marketing de Decofinder.</p>
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

export default FaqExposant
