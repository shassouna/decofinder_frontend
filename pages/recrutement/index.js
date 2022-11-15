
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function Recrutement() {

    const [activeIndex, setActiveIndex] = useState(8)

    return (
        <>
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
                                        <div className={activeIndex === 8 ? "tab-pane fade active show" : "tab-pane fade "} >
                                            <div className="card">
                                                <div className="card-header mb-20">
                                                    <h1 className="mb-10">DECOFINDER RECRUTE</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Distrimart</h2>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <p>Fondé en 1994, Distrimart propose un ensemble de services aux entreprises de la décoration et de l'habitat et édite les sites correspondants :</p>
                                                        <ul>
                                                            <li>Decofinder.com « le salon en ligne de la décoration et de l'ameublement »</li>
                                                            <li>Agendadecodesign.com « l'agenda en ligne des manifestations de la déco et du design »</li>
                                                            <li>DecoProfiles.com « le spécialiste de l'e-mailing ciblé déco »</li>
                                                            <li>Finexport.eu « toutes les aides économiques pour les entreprise de la déco »</li>
                                                            <li>Decoprivate.com (en construction) « les ventes privées ciblées déco »</li>
                                                        </ul>
                                                        <p>Vous êtes motivé pour travailler dans une entreprise leader dans son secteur, nous vous proposons de venir partager notre enthousiasme et nos valeurs.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Candidatures spontanées</h2>
                                                        <p className="mb-20">Distrimart offre en permanence de nouvelles opportunités. N'hesitez pas à nous faire parvenir votre candidature et à nous faire part de vos motivations à : <a>recrutement@distrimart.fr</a></p>
                                                        <div className="mb-20">
                                                            <label className="rec-label" htmlFor="offre1">  Commercial conseil Finexport - Novembre 2022</label>
                                                            <input className="rec-offre" name="rec-offre" type="checkbox" id="offre1" />
                                                            <div className="rec-offre_content">
                                                            <div className="rec-offre_content_details">
                                                                <p>
                                                                <strong>Type de contrat :</strong> CDI
                                                                <br />
                                                                <strong>Temps de travail :</strong> Durée légale
                                                                <br />
                                                                <strong>Profil principal :</strong> Commercial
                                                                <br />
                                                                </p>
                                                                <p>
                                                                <strong>PRÉSENTATION SOCIÉTÉ</strong>
                                                                <br /> Fondé en 1994, Distrimart propose un ensemble de services aux entreprises de la décoration et de l'habitat et édite les sites correspondants : Decofinder.com, Agendadecodesign.com, DecoProfiles.com, AnticFinder.com, Finexport.eu, Decoprivate.com <em>(en construction)</em>
                                                                </p>
                                                                <p>
                                                                <strong>DESCRIPTION DE LA MISSION</strong>
                                                                <br /> Finexport est un département de Distrimart qui étudie l'éligibilité des entreprises françaises du secteur de la décoration et de l'ameublement aux aides financières ou fiscales existantes et leur propose de monter pour leur compte les dossiers correspondants.
                                                                <br /> Vous serez chargé de proposer à une base de données existante de PME-PMI de les accompagner dans l'identification de gisements d'économies en matière d'aides publiques et privées (subventions, crédits d'impôts, aides régionales...)
                                                                </p>
                                                                <p>
                                                                <strong>PROFIL</strong>
                                                                <br /> Issu(e) d'une formation Commerciale, ( juridique et comptable appréciés), vous justifiez d'une expérience significative d'au moins 2 ans dans la vente de services à forte valeur ajoutée auprès de décideurs importants de type DG/PDG/DAF.
                                                                <br /> Autonome, doté d'un bon sens relationnel, vous avez le goût du challenge, vous possédez une excellente culture économique, vous maîtrisez la négociation commerciale auprès d'interlocuteurs de haut niveau et vous assurez un reporting régulier de vos actions et résultats.
                                                                </p>
                                                                <p>
                                                                <strong>Localisation du poste à pouvoir :</strong> Levallois Perret
                                                                <br />
                                                                <strong>Niveau d'études min. requis :</strong> Bac+4/5
                                                                <br />
                                                                <strong>Diplôme :</strong> Ecole de commerce ou licence de droit , école de gestion de patrimoine
                                                                <br />
                                                                <strong>Niveau d'expérience min. requis :</strong> 2 ans
                                                                <br />
                                                                <strong>Rémunération :</strong> Salaire mensuel fixe + variable motivant sur objectif.
                                                                </p>
                                                                <p>Merci d'envoyer CV avec photo et lettre de motivation à l'adresse suivante <strong>en indiquant dans l'objet du mail Finex</strong> :
                                                                <a href="mailto:recrutement@distrimart.fr" title="Cliquez pour nous envoyer un message">recrutement@distrimart.fr</a>
                                                                </p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-20">
                                                            <label className="rec-label" htmlFor="offre2">Commercial bilingue allemand - Novembre 2022</label>
                                                            <input className="rec-offre" name="rec-offre" type="checkbox" id="offre2" />
                                                            <div className="rec-offre_content">
                                                            <div className="rec-offre_content_details">
                                                                <p>
                                                                <strong>Type de contrat :</strong> CDI
                                                                <br />
                                                                <strong>Temps de travail :</strong> Durée légale
                                                                <br />
                                                                <strong>Profil principal :</strong> commercial bilingue allemand
                                                                <br />
                                                                </p>
                                                                <p>
                                                                <strong>PRÉSENTATION SOCIÉTÉ</strong>
                                                                <br /> Fondé en 1994, Distrimart propose un ensemble de services aux entreprises de la décoration et de l'habitat et édite les sites correspondants : Decofinder.com, Agendadecodesign.com, DecoProfiles.com, AnticFinder.com, Finexport.eu, Decoprivate.com <em>(en construction)</em>
                                                                </p>
                                                                <p>
                                                                <strong>DSECRIPTION DE LA MISSION</strong>
                                                                <br /> Decofinder est le salon en ligne international de la décoration et de l'habitat et propose le référencement d'articles de décoration sur Internet.
                                                                <br /> Vous serez chargé(e) de vendre et de présenter cet outil à des entreprises germanophones
                                                                </p>
                                                                <p>
                                                                <strong>PROFIL</strong>
                                                                <br /> Issu(e) d'une formation commerciale, vous justifiez d'une expérience significative d'au moins 2 ans dans la vente de services à forte valeur ajoutée.
                                                                <br /> Autonome, doté(e) d'un bon sens relationnel, vous avez le goût du challenge, vous maîtrisez la négociation commerciale auprès d'interlocuteurs de haut niveau et vous assurez un reporting régulier de vos actions et résultats.
                                                                <br /> Vous êtes parfaitement bilingue allemand
                                                                </p>
                                                                <p>
                                                                <strong>Localisation du poste à pouvoir :</strong> Levallois Perret
                                                                <br />
                                                                <strong>Niveau d'études min. requis :</strong> Bac+2/3
                                                                <br />
                                                                <strong>Diplôme :</strong> Ecole de commerce ou équivalent
                                                                <br />
                                                                <strong>Niveau d'expérience min. requis :</strong> 2 ans
                                                                <br />
                                                                <strong>Rémunération :</strong> Salaire mensuel fixe + variable motivant sur objectif.
                                                                </p>
                                                                <p>Merci d'envoyer CV avec photo et lettre de motivation à l'adresse suivante <strong>en indiquant dans l'objet du mail DFDE</strong> :
                                                                <a href="mailto:recrutement@distrimart.fr" title="Cliquez pour nous envoyer un message">recrutement@distrimart.fr</a>
                                                                </p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-20">
                                                            <label className="rec-label" htmlFor="offre3"> Commercial bilingue anglais - Novembre 2022</label>
                                                            <input className="rec-offre" name="rec-offre" type="checkbox" id="offre3" defaultChecked />
                                                            <div className="rec-offre_content">
                                                            <div className="rec-offre_content_details">
                                                                <p>
                                                                <strong>Type de contrat :</strong> CDI
                                                                <br />
                                                                <strong>Temps de travail :</strong> Durée légale
                                                                <br />
                                                                <strong>Profil principal :</strong> commercial bilingue anglais
                                                                <br />
                                                                </p>
                                                                <p>
                                                                <strong>PRÉSENTATION SOCIÉTÉ</strong>
                                                                <br /> Fondé en 1994, Distrimart propose un ensemble de services aux entreprises de la décoration et de l'habitat et édite les sites correspondants : Decofinder.com, Agendadecodesign.com, DecoProfiles.com, AnticFinder.com, Finexport.eu, Decoprivate.com <em>(en construction)</em>
                                                                </p>
                                                                <p>
                                                                <strong>DSECRIPTION DE LA MISSION</strong>
                                                                <br /> Decofinder est le salon en ligne international de la décoration et de l'habitat et propose le référencement d'articles de décoration sur Internet.
                                                                <br /> Vous serez chargé(e) de vendre et de présenter cet outil à des entreprises anglophones
                                                                </p>
                                                                <p>
                                                                <strong>PROFIL</strong>
                                                                <br /> Issu(e) d'une formation commerciale, vous justifiez d'une expérience significative d'au moins 2 ans dans la vente de services à forte valeur ajoutée.
                                                                <br /> Autonome, doté(e) d'un bon sens relationnel, vous avez le goût du challenge, vous maîtrisez la négociation commerciale auprès d'interlocuteurs de haut niveau et vous assurez un reporting régulier de vos actions et résultats.
                                                                <br /> Vous êtes parfaitement bilingue anglais.
                                                                </p>
                                                                <p>
                                                                <strong>Localisation du poste à pouvoir :</strong> Levallois Perret
                                                                <br />
                                                                <strong>Niveau d'études min. requis :</strong> Bac+2/3
                                                                <br />
                                                                <strong>Diplôme :</strong> Ecole de commerce ou équivalent
                                                                <br />
                                                                <strong>Niveau d'expérience min. requis :</strong> 2 ans
                                                                <br />
                                                                <strong>Rémunération :</strong> Salaire mensuel fixe + variable motivant sur objectif.
                                                                </p>
                                                                <p>Merci d'envoyer CV avec photo et lettre de motivation à l'adresse suivante <strong>en indiquant dans l'objet du mail DFGB</strong> :
                                                                <a href="mailto:recrutement@distrimart.fr" title="Cliquez pour nous envoyer un message">recrutement@distrimart.fr</a>
                                                                </p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-20">
                                                            <label className="rec-label" htmlFor="offre4">Stage chef de publicité - Novembre 2022</label>
                                                            <input className="rec-offre" name="rec-offre" type="checkbox" id="offre4" />
                                                            <div className="rec-offre_content">
                                                            <div className="rec-offre_content_details">
                                                                <p>
                                                                <strong>Type de contrat :</strong> Stage pouvant déboucher sur un CDI
                                                                <br />
                                                                <strong>Temps de travail :</strong> Durée légale
                                                                <br />
                                                                <strong>Profil principal :</strong> commercial bilingue anglais
                                                                <br />
                                                                </p>
                                                                <p>
                                                                <strong>PRÉSENTATION SOCIÉTÉ</strong>
                                                                <br /> Fondé en 1994, Distrimart propose un ensemble de services aux entreprises de la décoration et de l'habitat et édite les sites correspondants : Decofinder.com, Agendadecodesign.com, DecoProfiles.com, AnticFinder.com, Finexport.eu, Decoprivate.com <em>(en construction)</em>
                                                                </p>
                                                                <p>
                                                                <strong>DSECRIPTION DE LA MISSION</strong>
                                                                <br /> Votre mission consiste à rechercher des annonceurs pour le Site Decofinder. A ce titre :
                                                                </p>
                                                                <ul>
                                                                <li>Vous élaborez les plans média : choix des supports, simulation de plan, évaluations performances...,</li>
                                                                <li>Vous assurez la confirmation des plans média et leur négociation,</li>
                                                                <li>Vous coordonnez avec le service technique la bonne mise en route des campagnes,</li>
                                                                <li>Vous établissez et vous maintenez des relations étroites avec les supports couramment utilisés,</li>
                                                                <li>Vous participez à la réalisation des documents de présentation (planning, note de synthèse, recommandations, études média...).</li>
                                                                </ul>
                                                                <p>
                                                                <strong>PROFIL</strong>
                                                                <br /> De formation supérieure, vous avez une bonne connaissance du secteur média et de la négociation d'espaces publicitaires. Vous avez une excellente vision stratégique des médias. De plus, l'approche marketing et plurimédias vous est familière. Votre excellent relationnel est évident, vous êtes doté(e) d'un excellent état d'esprit, vous aimez travailler en équipe. Autonome et organisé(e), vous êtes force de proposition et vous avez un réel sens du service client.
                                                                </p>
                                                                <p>
                                                                <strong>Localisation du poste à pouvoir :</strong> Levallois Perret
                                                                <br />
                                                                <strong>Niveau d'études min. requis :</strong> Bac+2/3
                                                                <br />
                                                                <strong>Diplôme :</strong> Ecole de commerce ou de publicité
                                                                <br />
                                                                <strong>Niveau d'expérience min. requis :</strong> 2 ans
                                                                <br />
                                                                <strong>Rémunération :</strong> Stage conventionné à hauteur de 450€ par mois.
                                                                </p>
                                                                <p>Merci d'envoyer CV avec photo et lettre de motivation à l'adresse suivante <strong>en indiquant dans l'objet du mail Pub</strong> :
                                                                <a href="mailto:recrutement@distrimart.fr" title="Cliquez pour nous envoyer un message">recrutement@distrimart.fr</a>
                                                                </p>
                                                            </div>
                                                            </div>
                                                        </div>
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
        </>
    )
}

export default Recrutement
