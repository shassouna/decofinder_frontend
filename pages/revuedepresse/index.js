
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function RevueDePresse() {

    const [activeIndex, setActiveIndex] = useState(4)

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
                                <div className="tab-content account dashboard-content">
                                    <div className="tab-pane fade active show">
                                        <div className="col-lg-12 col-md-12 col-12 col-sm-6">
                                            <div className="mb-20 ml-5">
                                                <h1 className="mb-10">LE WEB ET LA PRESSE EN PARLENT</h1>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>On peut maintenant trouver la table ou la vaisselle de ses rêves sur internet grâce au DecoFinder.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>DecoFinder, tout le marché de la Déco.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Vous cherchez une table basse en chêne, entre 300 et 1 500 Euros ? Cliquez et la photo des produits correspondants apparaît. Cliquez encore, cette fois, vous obtenez les coordonnées du fabricant, les distributeurs.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>DecoFinder, le premier site de décoration avec un tour complet du marché, véritable outil d'information et de documentation.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>DecoFinder est le premier site regroupant l'offre la plus complète du marché de la décoration, du cadeau, des arts de la table et de l'ameublement. A découvrir.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>DecoFinder, tout le marché de la Déco."</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>LE PLUS MEGA DES SITES DECO</p>
                                                            <p>Difficile de résister à la tentation: presque tous les créateurs (les connus et les moins connus) y sont...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Site complet sur la décoration proposant une recherche de produits par budget, un forum et des infos sur les produits et techniques de décoration. Ainsi que des adresses d'entreprises spécialisées et la possibilité de demander le catalogue de celles-ci.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Si vous êtes amateur de déco, venez fouiner sur ce site, qui référence un nombre faramineux de produits. Impossible d'en ressortir bredouille.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Les grandes tendances du design, l’histoire du mobilier et des styles à travers les âges, les bonnes affaires du moment… Un site essentiel pour tous les amoureux de la décoration d’intérieur, qui dispose d’une impressionnante base de données d’objets.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">    
                                                            <p>C'est LE site de la déco par excellence.</p>                 
                                                            <p>Vous cherchez un carrelage style Art nouveau ou contemporain, un tissu pour votre canapé ou des rideaux, une poterie italienne ? De la présentation des salons professionnels aux dernières tendances de la déco, DecoFinder est incollable sur tout ce qui concerne la maison. Il dispose d'une vaste base de données, avec 35 000 entreprises - par ordre alphabétique et par catégorie - des milliers de produits accessibles par rayon, couleur, style, prix, matériau... Une sélection impressionnante, des informations précieuses.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Faites votre shopping virtuel pour Noel :</p>
                                                            <p>Il fédère des marchands en ligne spécialisés dans la décoration. De nombreuses idées de cadeaux sont à y pêcher.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>L'ordinateur vous refait tout le décor :</p>
                                                            <p>Certains sites non commerçants, comme "DecoFinder", prodiguent quand à eux moult conseils et fonctionnent essentiellement comme une base de données indiquant les bonnes adresses internet par type de produit recherché. Merveille de l'interactivité : certaines d'entre elles débouchent sur des vendeurs proposant des produits d'aménagement (rideaux, canapés...) entièrement sur-mesure.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>DecoFinder, le web qui permet aux fabricants et distributeurs de se faire connaître dans le monde entier. Résolument pratique.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Si vous avez envie de changer d'intérieur, une seule adresse : DecoFinder et sa puissante base de données.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Le hasard ne place pas toujours sur notre route l'objet de nos rêves et pourtant, il existe. Pour le découvrir, DecoFinder offre un parcours différent et unique. Ce système ouvre la plus vaste vitrine d'exposition pour dénicher rapidement l'objet de décoration que vous recherchez ou que vous n'imaginiez même pas exister ! Le tour complet du marché tout en images. Pour le fabricant, c'est la certitude que ses produits seront vus.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>DecoFinder est un portail dédié à la décoration. Il vous permet ainsi d'utiliser un annuaire répertoriant 35 000 adresses de professionnels de l'ameublement et de la décoration, de découvrir son salon virtuel où sont exposés des centaines de milliers de produits classés par univers et d'accéder à une base de données, ainsi qu'à des dossiers thématiques et des liens. Vous pourrez par exemple choisir votre future table basse parmi un grand choix de styles, de matériaux et une gamme de prix étendue, sans avoir besoin de courir les boutiques !</p>
                                                            <p>A noter : Ce site est un moteur de recherche multicritères pour trouver aussi bien un artisan, une entreprise que le matériel pour réaliser vous-même vos aménagements.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Plus de 100 000 références d'objets, représentant 35 000 entreprises...</p>
                                                            <p>DecoFinder est plus un salon qu'une boutique. Besoin d'un canapé, d'objets de jardin, de luminaires, etc. ? Le site présente un maximum de produits selon le critère de recherche, pour faire le tour du sujet le plus rapidement possible. Si un acheteur choisit un produit, sa commande arrive directement au fournisseur. Il peut également consulter la gamme de la marque qu'il préfère.</p>
                                                            <p>Un site très pratique et bien fourni.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>DecoFinder.com est un portail de la décoration qui vous propose tout d'abord un annuaire répertoriant 35 000 adresses de fabricants, artisans, importateurs, distributeurs, architectes d'intérieur, agenceurs... du secteur de l'ameublement et de la décoration. Ensuite vous trouverez dans un salon virtuel près de 100 000 produits pour la maison, classés par univers : mobilier, luminaires, arts de la table, salle de bain, cuisine, bureau, objets décoratifs, etc. Sans oublier des centaines d'articles, un agenda des manifestations de ce secteur, des dossiers thématiques, une liste de liens sélectionnés, etc.</p>
                                                            <p>Un site incroyablement riche en informations. Incontournable !"</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Le moteur de recherche de la décoration : plus de 100 000 objets avec (presque) tous les créateurs.</p>                                      
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>L'annuaire de DecoFinder permet de trouver les entreprises du secteur de la décoration et de l'ameublement : fabricants, artisans, distributeurs, architectes d'intérieur, etc. Un salon virtuel rassemble des produits classés par univers : mobilier, luminaires, arts de la table, salle de bain, cuisine, objets décoratifs, etc. Le site comporte également une base de connaissance, un agenda et des dossiers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Plusieurs milliers de produits entreprises de décoration, arts de la table, design... Fiches pratiques sur l'entretien, les styles, les matériaux...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Service en ligne de la décoration, des arts de la table, du design et de l’ameublement. Plus de 100 000 produits sont recensés. Un moteur de recherche précis vous permettra de trouver l’objet de vos désirs.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Une base de données de produits de décoration et d'objets d'intérieur. A visiter surtout pour la section "La déco de A à Z", une sorte de petite encyclopédie en ligne de la décoration intérieure.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Le service en ligne du secteur de la décoration, des arts de la table, du design et de l'ameublement. Boutique virtuelle composée de 38 Univers (luminaires, jardin, mobilier, tissus/rideaux etc.). Elle offre la possibilité de choisir le type de produit, le matériau de fabrication, le style ainsi que la couleur. A la fin de cette sélection, le site renvoit vers les exposants, informe du prix, de la livraison ou de l'adresse des revendeurs. Egalement la rubrique : déco de A à Z.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Un autre annuaire vient de se munir d'une adresse distincte. Et non pas un annuaire généraliste comme il en existe tant sur le Web : DecoFinder est dédié exclusivement à la décoration. Un annuaire répertoriant 35 000 adresses de fabricants, artisans, importateurs, distributeurs, architectes d'intérieur, agenceurs et autres artisans des secteurs de l'ameublement et de la décoration. Avec le salon virtuel, il s'agit de plus de 200 000 produits de décoration qui sont accessibles.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Portail de plusieurs magasins de décoration, désigners, architectes d'intérieur, artisans, salons professionnels. Recherche par produit ou par entreprise. Tout un abécédaire de la décoration, des senteurs au batik, de la porcelaine aux maisons de Haute-Savoie ou encore l'Art Déco. Commande en ligne possible.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vendor-wrap mb-5 style-2">
                                                <div className="vendor-img-action-wrap">
                                                    <div className="vendor-img">
                                                        <a>
                                                            <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="vendor-content-wrap d-flex justify-content-center align-items-center">
                                                    <div>
                                                        <div className="vendor-info">                     
                                                            <p>Showroom de la decoration, du design, de l'ameublement et des arts de la table.Des milliers de produits et d'entreprises, des rubriques pratiques, techniques et historiques.</p>
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
    )
}

export default RevueDePresse
