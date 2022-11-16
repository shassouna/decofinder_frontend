
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function ConditionGeneraleDeVente() {

    const [activeIndex, setActiveIndex] = useState(12)

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
                                        <div className="tab-pane fade active show">
                                            <div className="card">
                                                <div className="card-header mb-20">
                                                    <h1 className="mb-10">CONDITIONS GENERALES DE VENTE</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 1 - Champ d'application</h2>
                                                        <p>1.1 - La Société Distrimart SAS exploite l'enseigne commerciale " Decofinder " sur son site Internet accessible à l'adresse http//www.decofinder.com.</p>
                                                        <p>1.2 - La signature de l'ordre d'achat implique l'acceptation sans réserve des présentes conditions générales quelque soit le moyen ou le support d'achat reçu par Distrimart SAS.</p>
                                                        <p>1.3 - Les présentes conditions générales de vente s'appliquent aux annonceurs aussi bien qu'à leur mandataire éventuel.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 2 - Offres et tarifs</h2>
                                                        <p>2.1 - Les emplacements, formes et modalités d'affichage des insertions proposées ainsi que les prix y afférents sont ceux en vigueur au jour de l'offre faite par DISTRIMART SAS, tels que détaillés dans les documents intitulés " Tarif HT" et " Conditions techniques " disponible sur simple demande auprès de la société DISTRIMART SA ou le site http://www.decofinder.com</p>
                                                        <p>2.2 - Les tarifs ne comprennent pas les frais techniques tels que les éventuels frais de création et de réalisation des insertions, qui constituent une autre activité de la société DISTRIMART SAS.</p>
                                                        <p>2.3 - Les conditions tarifaires de l'offre faite par DISTRIMART SA à l'annonceur ont une durée de validité de 30 jours à compter de l'émission de l'offre.</p>
                                                        <p>2.4 - DISTRIMART SAS se réserve toutefois le droit de répercuter sans délai sur ses tarifs toute nouvelle taxe ou toute augmentation de taux des taxes existantes.</p>
                                                        <p>2.5 - Les présentes conditions générales de vente ainsi que les tarifs pratiqués par DISTRIMART SAS peuvent être modifiés à tout moment, sans préavis. Ces modifications seront sans incidence sur les contrats en cours et les offres soumises à une période de validité de 30 jours.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 3 - Prise d'effet de l'ordre d'achat - Tacite reconduction</h2>
                                                        <p>3.1 - Tout achat et réservation d'espace ne sera effectif que sous la double condition :</p>
                                                        <p>- de la réception par DISTRIMART SA de l'ordre d'achat dans le délai de validité de l'offre ; ce dernier, accessible et imprimable à partir du site http://www.decofinder.com/ doit être préalablement transmis à DISTRIMART SA, dûment revêtu des signatures et mentions obligatoires.</p>
                                                        <p>- de la confirmation consécutive par DISTRIMART SA par lettre, télécopie ou e-mail, de la disponibilité des emplacements sollicités ou, de la réception par l'annonceur de la facture correspondante.</p>
                                                        <p>3.2 - Le contrat est réputé conclu et définitif à la date de survenance de l'un des événements définis au dernier point de l'alinéa 3.1.</p>
                                                        <p>3.3 - Certains services de Decofinder sont renouvelables par tacite reconduction et sont résiliables avec préavis. Ces informations sont précisées sur le bon de commande.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 4 - Prescriptions relatives au message publicitaire</h2>
                                                        <p>4.1 - Les messages publicitaires ou visuels à placer devront être fournis au moins 3 jours avant la date de début de la campagne publicitaire en question.</p>
                                                        <p>4.2 - L'insertion doit être conforme aux prescriptions techniques requises par le document intitulé " conditions techniques", par le devis ou par l'ordre d'achat.</p>
                                                        <p>4.3 - Le non respect d'une des conditions précédemment énoncées dégage DISTRIMART SA de toute responsabilité en cas de dépassement de la date de mise en ligne initialement convenue.</p>
                                                        <p>4.4 - La non-fourniture dans les temps des documents numérisés à diffuser ne constitue pas une cause de résiliation du contrat. Cependant la campagne publicitaire stipulées sur ledit contrat se trouverait alors retardée d'autant de temps.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 5 - Responsabilité de l'annonceur</h2>
                                                        <p>5.1 - L'annonceur reconnaît être l'auteur unique et exclusif du texte, des dessins, images, son etc. ou, à défaut, détenir l'ensemble des droits nécessaires à leur utilisation et reproduction.</p>
                                                        <p>5.2 - L'annonceur certifie que les insertions sont conformes à l'ensemble des dispositions légales et réglementaires en vigueur.</p>
                                                        <p>5.3 - L'annonceur s'engage à garantir DISTRIMART SA de toutes condamnations et de tous frais judiciaires et extrajudiciaires que ce dernier pourrait supporter du fait du recours de tiers pour l'un des motifs visés aux alinéas précédents, et plus généralement du fait de la diffusion du message ou visuel.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 6 - Refus de diffusion</h2>
                                                        <p>6.1 - DISTRIMART SA se réserve la faculté de refuser toute publicité ou visuel qui se révélerait contraire à ses intérêts matériels ou moraux, qui constituerait une atteinte aux bonnes moeurs ou à l'Ordre Public, ou qui contreviendrait aux dispositions légales et réglementaires en vigueur.</p>
                                                        <p>6.2 - En aucun cas DISTRIMART SA ne pourra être tenu pour responsable du refus de diffuser un message publicitaire pour l'une des causes énoncées à l'alinéa précédent, ce refus ne pouvant ouvrir droit à quelques dommages-intérêts que ce soit pour l'annonceur.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 7 - Limitation de responsabilité</h2>
                                                        <p>7.1 - Tout retard, suspension ou annulation dans la diffusion de l'insertion du fait notamment de défaillances techniques inhérentes au fonctionnement du réseau Internet, extérieures à DISTRIMART SA et indépendantes de sa volonté, ne peut motiver un refus de paiement, même partiel, de la part de l'annonceur, ni ouvrir droit à une nouvelle insertion aux frais d'DISTRIMART SA ou à une indemnisation, sous quelque forme que ce soit, de l'annonceur.</p>
                                                        <p>7.2 - Tout retard, suspension ou annulation dans la diffusion de l'insertion ne pourra, éventuellement, ouvrir droit qu'au seul remboursement ou au non-recouvrement, total ou partiel, du prix de l'insertion.</p>
                                                        <p>7.3 - Sauf stipulation expresse DISTRIMART SA ne garantit pas l'absence d'annonces concurrentes, quelque soit leur nature, leur forme et leur emplacement. DISTRIMART SA exclut toute responsabilité de ce chef.</p>
                                                        <p>7.4 - De même, la responsabilité de la société DISTRIMART SA ne saurait être engagée du fait de l'apparition sur le site, postérieurement à la signature de l'ordre d'achat, de nouveaux espaces publicitaires quelque en soit l'emplacement, la nature, la forme et les caractéristiques.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 8 - Information de l'annonceur</h2>
                                                        <p>8.1 - DISTRIMART SA informera l'annonceur, par e-mail ou fax, de la première mise en ligne de l'insertion.</p>
                                                        <p>8.2 - Au cours de la campagne, DISTRIMART SA s'efforcera de mettre en ligne, à disposition de l'annonceur et accessible au moyen d'un mot de passe confidentiel un " Bilan de campagne " relatif aux conditions dans lesquelles la présente convention aura été exécutée sera adressé à l'annonceur dans le mois suivant la fin de la parution de l'insertion.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 9 - Manquements contractuels</h2>
                                                        <p>9.1 - L'annonceur ne pourra invoquer aucun manquement dans l'exécution du bon de commande ou des présentes conditions générales si ledit manquement n'a pas fait l'objet, en cours de campagne, d'une dénonciation expresse à DISTRIMART SA et d'une constatation conjointe par les parties.</p>
                                                        <p>9.2 - Le fait pour DISTRIMART SA de ne pas se prévaloir, à un moment donné, d'une des stipulations des présentes conditions générales, ne pourra être interprété comme une renonciation à faire valoir ultérieurement ladite stipulation.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 10 - Facturation et règlement</h2>
                                                        <p>10.1 - La facturation des prestations fournies par DISTRIMART SA est effectuée à réception du bon de commande de la campagne.</p>
                                                        <p>10.2 - Une remise de 15% sur les prix H.T. est consentie aux professionnels (régies, agences, etc. ...)</p>
                                                        <p>10.3 - A défaut d'un échéancier figurant dans le bon de commandees factures sont payables à réception.</p>
                                                        <p>10.4 - A défaut de règlement à cette date, DISTRIMART SA se réserve la faculté de suspendre la diffusion de l'insertion jusqu'à complet paiement, sans que cette suspension puisse constituer, notamment, une cause de responsabilité pour DISTRIMART SA, donner lieu à une révision du prix, ou encore ouvrir droit à une prorogation de diffusion ou à une nouvelle diffusion.</p>
                                                        <p>10.5 - Un intérêt moratoire conventionnel au taux mensuel de 0,75% sera dû à compter de la date d'exigibilité de la facture après mise en demeure préalable.</p>
                                                        <p className="mb-15">10.6 - L'envoi d'une lettre recommandée avec avis de réception valant mise en demeure ou l'introduction d'une procédure judiciaire entraînera l'exigibilité de plein droit d'une majoration de 15% du principal TTC restant dû, sans préjudice de la poursuite, suspension ou résiliation du contrat.</p>
                                                        <p>Cas particulier des prestations donnant lieu à une mensualisation et payées par prélèvement automatique.</p>
                                                        <p>La durée de l'abonnement est de 12 mois minimum et doit être obligatoirement effectuée par prélèvement automatique. Le non paiement d'une seule échéance entrainera la facturation des frais d'impayés (15€ HT) et le paiement intégral et immédiat des échéances restants dues, outre une pénalité de cinq cent euros et les intérêts moratoires prévus au 10-5 ci-dessus à compter de la date de rejet.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Article 11 - Clause d'attribution de compétence</h2>
                                                        <p>out litige pouvant survenir dans l'exécution ou l'interprétation du présent contrat sera porté exclusivement devant le Tribunal de Commerce de Nanterre.</p>
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

export default ConditionGeneraleDeVente
