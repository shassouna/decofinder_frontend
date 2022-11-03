
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
                                                                <img
                                                                    src="/assets/imgs/blog/author-2.png"
                                                                    alt=""
                                                                />
                                                                <Link href="#"><a
                                                                    
                                                                    className="font-heading text-brand"
                                                                >
                                                                    Sienna
                                                                </a></Link>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="d-flex justify-content-between mb-10">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="font-xs text-muted">
                                                                            December
                                                                            4, 2021
                                                                            at 3:12
                                                                            pm{" "}
                                                                        </span>
                                                                    </div>

                                                                </div>
                                                                <p className="mb-10">
                                                                Grâce à Decofinder nous observons un excellent référencement de notre site sur les principaux moteurs de recherche européens. Par ailleurs, France Astruc a une connaissance approfondie du marché de la décoration et de ses acteurs.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex mb-30">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <img
                                                                    src="/assets/imgs/blog/author-3.png"
                                                                    alt=""
                                                                />
                                                                <Link href="#"><a
                                                                    
                                                                    className="font-heading text-brand"
                                                                >
                                                                    Brenna
                                                                </a></Link>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="d-flex justify-content-between mb-10">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="font-xs text-muted">
                                                                            December
                                                                            4, 2021
                                                                            at 3:12
                                                                            pm{" "}
                                                                        </span>
                                                                    </div>

                                                                </div>
                                                                <p className="mb-10">
                                                                    Ce que j'apprécie en premier lieu c'est que Décofinder est le site le mieux référencé non seulement dans la décoration, mais pour tout l'habitat en général. Ainsi, chaque fois que je recherche quoi que ce soit dans ce domaine, je retourne sur Decofinder où je suis certain de trouver soit le fabricant idéal, soit au moins des pistes de recherches. Merci et bravo pour le seul site complet et sérieux de la profession.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-comment justify-content-between d-flex">
                                                        <div className="user justify-content-between d-flex">
                                                            <div className="thumb text-center">
                                                                <img
                                                                    src="/assets/imgs/blog/author-4.png"
                                                                    alt=""
                                                                />
                                                                <Link href="#"><a
                                                                    
                                                                    className="font-heading text-brand"
                                                                >
                                                                    Gemma
                                                                </a></Link>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="d-flex justify-content-between mb-10">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="font-xs text-muted">
                                                                            December
                                                                            4, 2021
                                                                            at 3:12
                                                                            pm{" "}
                                                                        </span>
                                                                    </div>

                                                                </div>
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
                                                            <div className="desc">
                                                                <div className="d-flex justify-content-between mb-10">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="font-xs text-muted">
                                                                            December
                                                                            4, 2021
                                                                            at 3:12
                                                                            pm{" "}
                                                                        </span>
                                                                    </div>

                                                                </div>
                                                                <p className="mb-10">
                                                                    Je suis designer et fabricant de mobilier urbain et de mobilier de décoration à Calais. Contacté en octobre 2003 par le Service commercial de Decofinder et convaincu de l'utilité de ce service, je suis devenu client en novembre de la même année. Quelques semaines après mon inscription, j'ai reçu un appel d'un paysagiste américain qui, en tapant les mots clefs «Bacs d'Orangerie» sur Google, est arrivé sur le site Decofinder puis sur ma page partenaire. Je lui ai expédié 6 Bacs d'Orangerie destinés à une de ses clientes de Caroline du Nord. Depuis, j'ai non seulement des demandes d'informations et contacts réguliers mais cela a surtout généré des ventes additionnelles que je n'aurais jamais réalisées autrement. Ce paysagiste américain est devenu mon agent au USA.
                                                                </p>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="d-flex justify-content-between mb-10">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="font-xs text-muted">
                                                                            December
                                                                            4, 2021
                                                                            at 3:12
                                                                            pm{" "}
                                                                        </span>
                                                                    </div>

                                                                </div>
                                                                <p className="mb-10">
                                                                    Remerciements pour la vente ferme d'une commode et l'attente d'en concrétiser une deuxième.
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
