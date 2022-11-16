
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function MentionsLegales() {

    const [activeIndex, setActiveIndex] = useState(17)

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
                                                    <h1>MENTIONS LÉGALES</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Société</h2>
                                                        <p>Distrimart est une SAS au capital de 250 000 Euros ayant son siège social 17 rue Chartran 92200 Neuilly sur Seine FRANCE immatriculée au RCS de Nanterre sous le n° B 399 699 099 et représentée par Monsieur Yves MANCHEC en tant que Président Directeur Général.</p>
                                                        <p>Decofinder est une marque européenne déposée par Distrimart auprès de l'INPI. La mise en place de liens hypertextes par des tiers vers des pages, des images ou des documents diffusés sur des serveurs Decofinder pouvant de fait constituer une atteinte au droit d'auteur un acte relevant du parasitisme ou de la diffamation doivent faire l'objet d'une autorisation écrite préalable de Distrimart.</p>
                                                        <p>Le site www.decofinder.com est une oeuvre protégée en France par le Code de la Propriété Intellectuelle et à l'étranger par les conventions internationales sur le droit d'auteur.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Protection des données personnelles</h2>
                                                        <p>Conformément à l'article 34 de la loi « informatique et libertés » du 6 Janvier 1978 les visiteurs ou clients du site www.decofinder.com disposent à tout moment d'un droit d'accès de modification de rectification et de suppression des données qui les concernent.</p>
                                                        <p>Le traitement des informations nominatives et/ou personnelles par Distrimart sur le site www.decofinder.com a fait l'objet d'une déclaration à la CNIL sous le numéro 1064213.</p>
                                                        <p>La société Distrimart met tout en oeuvre pour protéger les données personnelles contre toute forme de perte, dommage ou altération, destruction, détournement, divulgation non autorisée.</p>
                                                        <p>Par ailleurs, Distrimart met en oeuvre des technologies type SSL pour tous les processus de paiement qui se font directement sur le site du CIC. Distrimart ne dispose donc à aucun moment des données bancaires du client et est amené à refuser toute transmission de ces données par courrier électronique' télécopie ou téléphone.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Lien avec les sites tiers</h2>
                                                        <p>Les informations ou commentaires pouvant figurer sur les sites tiers reliés directement ou indirectement aux sites édités par Distrimart ne sauraient engager sa responsabilité.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Données du Site</h2>
                                                        <p>Distrimart prend en compte les informations techniques de ses partenaires fournisseurs pour la description des Produits commercialisés sur www.decofinder.com.</p>
                                                        <p>Nous vous remercions de nous informer au travers de notre service client par courrier électronique de toute erreur manifeste.</p>
                                                        <p>Distrimart s'engage à faire ses meilleurs efforts pour corriger le plus rapidement possible les erreurs ou omissions après en avoir été informé.</p>
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

export default MentionsLegales
