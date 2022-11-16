
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function TestimoniauxExposants() {

    const [activeIndex, setActiveIndex] = useState(3)

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
                                    <div className="row mb-50">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                                                    <h2 className="mb-10">L'acheteur face à son besoin</h2>   
                                                    <p className="mb-10"> Je cherchais depuis longtemps <strong>des pots de jardin :</strong></p>  
                                                    <p>Je ne savais pas ce que je pouvais acheter.</p>  
                                                    <p>J'ignorais le nom des fabricants, ce qui me rendait la tâche pratiquement impossible.</p>                      
                                                </div>
                                                <div className="col-md-6" style={{display:'flex', justifyContent:'center'}}>
                                                    <img src="/assets/imgs/visage_1.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h2 className="mb-10">Analyse et réponses</h2> 
                                            <p className="mb-10">Le secteur de la décoration se caractérise par un très grand nombre d'entreprises (plusieurs dizaines de milliers), proposant au total plusieurs millions de produits.</p>
                                            <p className="mb-10">Conséquence de cette "atomisation" de l'offre, la notoriété spontanée des entreprises du secteur est faible : 9 fois sur 10 l'acheteur ne connait pas le nom des fabricants, l'a oublié ou ne l'associe pas aux produits qu'il recherche.</p>
                                            <p>L'acheteur a cependant conscience qu'il existe sur le marché de nombreux produits susceptibles de l'intéresser.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-10">Je voulais, le plus vite possible, et comme tout le monde:</p>
                                            <p className="mb-10">Voir en premier lieu tous les produits que je pouvais acheter.</p>
                                            <p className="mb-10">Connaitre le nom des fabricants que j'ignorais.</p>
                                            <p className="mb-10">Savoir où je pouvais acheter les produits qui m'intéressent.</p>
                                            <p className="mb-10">Eviter de courir à gauche ou à droite.</p>
                                            <p className="mb-10">Ne me déplacer qu'à coup sûr.</p>
                                            <p className="mb-10"> J'ai essayé Google...</p>
                                            <div className="row mb-10">
                                                <div className="col-md-6" style={{display:'flex', justifyContent:'center'}}>
                                                    <p>Google m'a annoncé 2 300 000 pages...</p>
                                                </div>
                                                <div className="col-md-6" style={{display:'flex', justifyContent:'end'}}>
                                                    <img src="/assets/imgs/visage_2.jpg" alt="" />
                                                </div>
                                            </div>  
                                            <p className="mb-10">J'ai ouvert la premiere et je suis tombé sur le rapport annuel d'un groupe qui fabrique ce produit. Après 7mn, j'ai vu de nombreux produits qui ne correspondaient pas à ma demande, et un seul correspondant... mais il ne me plaisait pas.</p>
                                            <p className="mb-10">Le deuxième site ouvert, était celui d'un antiquaire.</p>  
                                            <p className="mb-10">Le troisième était une page perso d'un collectionneur.</p>                
                                            <p className="mb-10">Au quatrième rang, j'ai cliqué sur la page "pots de jardins" de Decofinder..</p>
                                            <p className="mb-10">J'ai pu immédiatement voir, réunis sur 5 pages, 125 pots de jardin, de tous styles.</p>
                                            <p className="mb-10">Rien d'autre que les produits que je recherchais. Enfin!</p>
                                            <p className="mb-10">J'ai zoomé sur ceux qui me plaisaient.</p>
                                            <p className="mb-10">Le nom de leur fabricant apparaissant clairement sous chaque photo, j'ai obtenu d'un clic leurs coordonnées et la liste de leurs revendeurs.</p>
                                            <p className="mb-40">Un autre clic et j'ai visité leur site.</p>
                                            <p className="mb-10">Mon problème étant résolu rapidement, j'en ai profité pour rechercher un autre produit dont mes parents avaient besoin.</p>
                                            <p className="mb-10">Pour obtenir les documentations des produits sélectionnés (de quatre fabricants différents), je n'ai eu qu'un seul formulaire à remplir. J'ai également transmis par mail à mes parents les pages conseil indexées par Decofinder.</p>
                                            <p className="mb-10">Ayant comme projet l'an prochain d'installer une cheminée et n'y connaissant rien, j'ai consulté le dossier spécial du Decofinder.</p>
                                            <p className="mb-10">Je pourrais y retourner avec mon mari pour discuter des nombreux modèles et accessoires ...J'ai mis Decofinder dans mes favoris.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-10">En réalité, l'acheteur n'achètera que lorsqu'il aura le sentiment qu'il a fait le "tour du marché" des produits recherchés et que, rassuré, il peut se décider en toute connaissance de cause.</p> 
                                            <p className="mb-10">Si 2 acheteurs de la décoration sur 3 utilisent déja Internet pour préparer leurs achats, c'est qu'il est le SEUL media leur permettant d'obtenir des informations au moment même où ils en ont besoin.</p>
                                            <p className="mb-10">L'acheteur d'aujourd'hui ne comprendrait pas que les fabricants ne lui présentent pas leurs produits à ce moment précis.</p>
                                            <p className="mb-10">Encore faut-il que la réponse soit adaptée aux besoins de l'acheteur...</p>
                                            <p className="mb-10">L'acheteur ne souhaite pas :</p>
                                            <p className="mb-10">Qu'on lui propose des baignoires, des sèche-serviettes ou de la faience murale...alors qu'il a tapé le mot clef "applique de salle de bain"...</p>
                                            <p className="mb-10">Perdre du temps à chercher au fin fond de chaque site le produit désiré, ni avoir besoin de s'adapter aux multiples ergonomies des sites des fabricants.</p>
                                            <p className="mb-10">Avoir à remplir des dizaines de formulaires de demande de documentation.</p>
                                            <p className="mb-10">Qu'on lui impose la présentation d' une entreprise qui n'aurait pas le bon produit.</p>
                                            <p className="mb-10">Voir toujours les mêmes produits sur plusieurs sites.</p>
                                            <p className="mb-10">Ce qu'il veut :</p>
                                            <p className="mb-10">Une réponse rapide, pertinente, exhaustive, et , s'agissant d'un produit à forte valeur décorative, VISUELLE en premier lieu.</p>
                                            <p className="mb-10">Dans un deuxième temps seulement, il souhaite obtenir des informations d'ordre techniques, tarifaire, et pouvoir contacter le fabricant ou ses revendeurs.</p>
                                            <div className="col-md-12" style={{display:'flex', justifyContent:'center'}}>
                                                <img src="/assets/imgs/visage_3.jpg" alt="" />
                                            </div>
                                            <p className="mb-10">Ce qu'il aime :</p>
                                            <p className="mb-10">Un seul site pour accéder à des centaines de milliers de produits, à des dizaines de millers d'entreprises à des millers d'articles rédactionnels classés.</p>
                                            <p className="mb-10">Une ergonomie fonctionnelle et très vite familière.</p>
                                            <p className="mb-10">Une offre-produits riche, de toutes origines et de tous styles, autorisant des choix originaux.</p>
                                            <div className="col-md-12" style={{display:'flex', justifyContent:'center'}}>
                                                <img src="/assets/imgs/visage_4.jpg" alt="" />
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

export default TestimoniauxExposants
