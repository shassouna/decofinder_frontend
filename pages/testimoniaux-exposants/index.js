
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function TestimoniauxExposants() {

    const [activeIndex, setActiveIndex] = useState(5)

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
                                        <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade "} >
                                        <div className="comments-area">
                                            <h1 className="mb-10">DECOFINDER : TÉMOIGNAGES EXPOSANTS</h1>
                                                <div className="comment-list">
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Frédéric Almaviva, Atelier Almaviva
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Grâce à Decofinder nous observons un excellent référencement de notre site sur les principaux moteurs de recherche européens. Par ailleurs, France Astruc a une connaissance approfondie du marché de la décoration et de ses acteurs.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Marc Bonnet, Dirigeant, Sté Moissonnier
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Ce que j'apprécie en premier lieu c'est que Décofinder est le site le mieux référencé non seulement dans la décoration, mais pour tout l'habitat en général. Ainsi, chaque fois que je recherche quoi que ce soit dans ce domaine, je retourne sur Decofinder où je suis certain de trouver soit le fabricant idéal, soit au moins des pistes de recherches. Merci et bravo pour le seul site complet et sérieux de la profession.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Nathalie Beaussart, PDG,  Théo des Collines et Globe Trotter
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    D'abord hésitante, Decofinder a fini par me convaincre et je dois avouer aujourd'hui que j'adore prendre connaissance des demandes de renseignements qui m'arrivent de particuliers ou de professionnels en France mais aussi du Canada, de Suisse, etc... Demandes qui se sont concrétisées très vite.
                                                                </p>
                                                                <p className="mb-10">
                                                                    J'ai mis plus de 250 visuels, ce qui me fait 500 liens vers mes propres sites et, grâce aux statistiques, je vois bien que Decofinder m'apporte l'essentiel de mon visitorat.
                                                                </p>
                                                                <p className="mb-10">
                                                                    L'équipe de Decofinder est toujours à notre disposition de façon charmante et efficace.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Etienne Wacheux SARL 62231 Coquelles
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Je suis designer et fabricant de mobilier urbain et de mobilier de décoration à Calais. Contacté en octobre 2003 par le Service commercial de Decofinder et convaincu de l'utilité de ce service, je suis devenu client en novembre de la même année. Quelques semaines après mon inscription, j'ai reçu un appel d'un paysagiste américain qui, en tapant les mots clefs «Bacs d'Orangerie» sur Google, est arrivé sur le site Decofinder puis sur ma page partenaire. Je lui ai expédié 6 Bacs d'Orangerie destinés à une de ses clientes de Caroline du Nord. Depuis, j'ai non seulement des demandes d'informations et contacts réguliers mais cela a surtout généré des ventes additionnelles que je n'aurais jamais réalisées autrement. Ce paysagiste américain est devenu mon agent au USA.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Jean Decombredet  L'Isle sur la Sorgue
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Remerciements pour la vente ferme d'une commode et l'attente d'en concrétiser une deuxième.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Frédéric Cornali  Portes Reymond
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    J'ai parcouru votre site et les informations me concernant : C'est très bien fait, clair, bien présenté, l'accès à ses données est simple. Je vous remercie au nom de notre entreprise et je souhaite longue vie à votre site.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    D.Goros, importateur
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Les visiteurs du Decofinder qui visitent mon site sont des visiteurs très ciblés et intéressés.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Yannick Herriot, artisan d'art
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Ce client m'a dit qu'il ne m'aurait jamais trouvé sans Decofinder.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Pierre Lefers, gérant
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    J'ai commencé avec 10 produits. Mon premier client m'a payé 3 ans d'abonnement. J'en présente aujourd'hui 100 avec 200 liens vers mon site; Une part substantielle de mon trafic vient désormais de Decofinder c'est un must.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    M Dubois, fabricant
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    J'ai réservé la tête de gondole cache-radiateur : je suis en premier sur Google.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Melle Rinaldi, webmaster
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Bravo pour votre outil de mise à jour en ligne : c'est simple et efficace.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Angèle Hermann, responsable commercial
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Je n'y croyais pas trop : je dois avouer aujourd'hui que j'adore prendre connaissance des demandes de renseignements qui m'arrivent comme par enchantement.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Jean Pierre Menu
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Un journaliste de Ouest France m'a fait un article après avoir reçu le mailing Special Jardin du Decofinder.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Christophe Richard, chef de projets multimedias (Mobalpa)
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Je pense que Decofinder est un portail aujourd'hui bien installé dans le paysage internet Français, et qu'en tant que marque leader sur son secteur Mobalpa se devait de présenter ses produits sur ce portail. Decofinder nous permet d'obtenir une ligitimité sur l'architecture intérieure, la décoration, apsects qui font partie de notre métier mais qui ne sont pas forcément bien perçus dans l'image que l'on a d'un cuisiniste. C'est aussi l'opportunité d'améliorer notre notoriété sur les secteurs de la salle de bains et du rangement sur mesure, doma ines dans lesquels les conso mateurs ne pensent pas forcément a Mobalpa tout de suite.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Sylvie Viguie, Directrice du magasin St Louis
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                    Le premier contact avec Decofinder a été agréable, professionnel. La mise en place de notre maison et des ses produits sur le site a été aisée. Assistance assurée. Le suivi et la mise à jour des fiches produits sont trés faciles. Nous avons depuis 8 mois, eu de nombreux contacts, demandes de renseignements et ventes à des particuliers éloignés.
                                                                </p>
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

export default TestimoniauxExposants
