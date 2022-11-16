
import Link from "next/link"
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function APropos() {

    const [activeIndex, setActiveIndex] = useState(11)

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
                                                    <h1 className="mb-10">VENDRE GRACE A DECOFINDER</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Concept</h2>
                                                        <p>Vous proposez à la vente tous vos produits et accédez instantanément à une audience ciblée importante dont la majorité (67%) est en phase d'acquisition ou de recherche active (source Opinion Way)</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand mb-20">&#x25cf; Fonctionnement</h2>
                                                        <div className="row">
                                                            <div className="col-lg-4 mb-lg-0 mb-25"><p>Vous mettez vos produits en vente</p></div>
                                                            <div className="col-lg-4 mb-lg-0 mb-25"><p>Votre logo s'affiche sur le zoom de produits que vous revendez avec un lien vers votre E-shop</p></div>
                                                            <div className="col-lg-4 mb-lg-0 mb-25"><p>Le client achète sur votre E-shop</p></div>
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

export default APropos
