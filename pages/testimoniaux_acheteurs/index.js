
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function TestimoniauxAcheteurs() {

    const [activeIndex, setActiveIndex] = useState(6)

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
                                        <div className="comments-area">
                                            <h1 className="mb-10">DECOFINDER : TÉMOIGNAGES UTILISATEURS</h1>
                                                <div className="comment-list">
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                    Mlle Michaud Elsa 80230 St Valery sur Somme, Boutique de décoration
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Je tenais à remercier et surtout à féliciter l'équipe de Décofinder pour la création de ce site (le plus facile et le plus convivial d'utilisation pour effectuer des recherches parmi tous ceux que j'ai essayé d'utiliser).
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Myrène Stroup Service Auteuil Promotion 75116 Paris
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Je tiens particulièrement à vous remercier pour votre accueil téléphonique, votre service, la clarté de votre site, l'aide que vous nous fournissez au travers de la conception de votre site, l'aspect attractif de vos pages.
                                                                </p>
                                                                <p className="mb-10">
                                                                Vous nous aidez réellement et si cela ne tenait qu'à moi, je vous reconnaîtrais d'utilité publique.
                                                                </p>
                                                                <p className="mb-10">
                                                                Je vous souhaite une bonne continuation et surtout une très longue vie.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Barbara Prod’homme 4, villa Georges Sand 75016 Paris
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                J’ai découvert votre site et je suis enthousiasmée, c'est le premier qui me soit vraiment utile.Il manque encore quelques prix, c'est dommage Je ne peux m'empêcher de vous faire part du bonheur que j'ai eu à parcourir votre site, que je trouve très intelligemment construit.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                M Vahanian Julien 16 rue COPERNIC 75116
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Superbe site et très pratique! J'y ai trouvé, à vitesse grand V, la majeure partie de l'ameublement de mon premier appartement: canapé, douche, stores vénitiens, chaises, table, baignoire, lit...les systèmes d'orientation de decofinder.com sont très bien conçus et on tombe rapidement sur les marques des produits recherchés. Alors, grâce aux liens hypertextes vers ces marques, on peut effectuer un deuxième niveau de recherche plus fin, et trouver les points de distribution les plus proches. En bref, Decofinder fait très efficacement ce qu'on attend de lui. Bravo!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Anonyme
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Super beau site surtout pour nous les étudiants de décoration intérieure. Peut-être ajouter plus de lampes mais a part ça c'est génial!!!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Anonyme
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Bravo! Que du bon, les fiches conseils sont sérieuses et documentées. J'ai trouvé des conseils précieux sur l'installation de ma piscine hors sol. Continuez comme ça...
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                M Veyre Pierre 74940 Annecy-le-Vieux
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Votre site est un très bon outil de recherche, très complet. C'est excellent.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                M Marcaire Franck 75010 Paris
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Je profite de cet espace pour vous féliciter pour le choix et la qualité des produits présentés, ainsi que l'ergonomie du site.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                M Colin Directeur Commercial 38920
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Excellent site qui a de très nombreux articles. Les points forts sont le classement très pertinent, la possibilité de passer d'un article à une gamme ou d'un article à une collection d'un designer donné.Un bémol : l'absence des prix sur de nombreux articles.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Mme Noiret Isabelle styliste-création de vêtements 75015
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Allez-vous faire l'équivalent de Decofinder dans le secteur de la mode féminine?Une styliste intéressée par l'efficacité commerciale de Decofinder.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Mlle Grattepain Isabelle Directrice Commerciale 14113 Cricqueboeuf
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                j'ai reçu des mails du fournisseur Mathy-by-bols qui se trouve en Belgique et que je n'aurais jamais trouvé sans vous.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                M Roy Michel photographe Colombes
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Votre site est riche en informations, merci d'exister.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Responsable d'une boutique
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Votre site est formidable !!! Etant responsable d'un magasin de luminaires, ma collègue et moi-même sommes sans cesse à la recherche de nouveaux fournisseurs et vraiment nous tenons à vous féliciter... Merci encore et bonne journée.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <a className="font-heading text-brand">
                                                                Mlle Veronique Skrotzky attachée de presse
                                                                </a>
                                                            </div>
                                                            <div className="desc">
                                                                <p className="mb-10">
                                                                Touchez à rien c'est parfait ! Pour ce Que je recherchais, c'était excellent.
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

export default TestimoniauxAcheteurs
