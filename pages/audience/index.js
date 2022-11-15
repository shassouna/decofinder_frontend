
import React, { useState } from "react"

import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function NewComponent (){

    
    const [activeIndex, setActiveIndex] = useState(7)

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
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="audience-grid-container">
                                                <div className="audience-grid-double-item">
                                                    <div className="audience-grid-item-number audience-grid-item-percentage">
                                                    30%
                                                    </div>
                                                    <div>
                                                    de professionnels<br />soit 1 000 000 de visiteurs pros / an 
                                                    </div>
                                                </div>
                                                <div className="audience-grid-double-item audience-white-background">
                                                    <div className="audience-grid-item-number audience-grid-item-percentage">
                                                    45%
                                                    </div>
                                                    <div>
                                                    de visiteurs à l'international<br />soit 1 350 000 de visiteurs étrangers / an
                                                    </div>
                                                </div>
                                                <div className="audience-grid-double-item">
                                                    <div className="audience-grid-item-number audience-grid-item-percentage">
                                                    8%
                                                    </div>
                                                    <div>
                                                    des visiteurs achètent immédiatement<br /> après avoir consulté Decofinder <br />soit 240 000 acheteurs/an (Opinion Way)
                                                    </div>
                                                </div>
                                                <div className="audience-grid-triple-item">
                                                    <div className="audience-grid-item-number audience-grid-item-percentage">
                                                    6
                                                    </div>
                                                    <div className="audience-grid-item-unit">
                                                    millions
                                                    </div>
                                                    <div className="audience-grid-item-text">
                                                    de recherches de coordonnées d'exposants
                                                    </div>
                                                </div>
                                                <div className="audience-grid-triple-item">
                                                    <div className="audience-grid-item-number">
                                                    3
                                                    </div>
                                                    <div className="audience-grid-item-unit">
                                                    millions
                                                    </div>
                                                    <div className="audience-grid-item-text">
                                                    de redirections vers les sites des exposants
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="audience-grid-container">
                                                <div className="audience-grid-triple-item">
                                                    <div className="audience-grid-item-number">
                                                    10
                                                    </div>
                                                    <div className="audience-grid-item-unit">
                                                    millions
                                                    </div>
                                                    <div className="audience-grid-item-text">
                                                    de pages vues
                                                    </div>
                                                </div>
                                                <div className="audience-grid-triple-item audience-white-background">
                                                    <div className="audience-grid-item-number">
                                                    8,2
                                                    </div>
                                                    <div className="audience-grid-item-unit">
                                                    mille
                                                    </div>
                                                    <div className="audience-grid-item-text">
                                                    visites / jour (Sources XITI pro)
                                                    </div>
                                                </div>
                                                <div className="audience-grid-triple-item ">
                                                    <div className="audience-grid-item-number">
                                                    3
                                                    </div>
                                                    <div className="audience-grid-item-unit">
                                                    millions
                                                    </div>
                                                    <div className="audience-grid-item-text">
                                                    visites / an
                                                    </div>
                                                </div>
                                                <div className="audience-grid-triple-item audience-white-background">
                                                    <div className="audience-grid-item-number">
                                                    4
                                                    </div>
                                                    <div className="audience-grid-item-unit">
                                                    minutes
                                                    </div>
                                                    <div className="audience-grid-item-text">
                                                    durée moyenne d'une visite
                                                    </div>
                                                </div>
                                                <div className="audience-grid-triple-item">
                                                    <div className="audience-grid-item-number">
                                                    6
                                                    </div>
                                                    <div className="audience-grid-item-unit">
                                                    pages
                                                    </div>
                                                    <div className="audience-grid-item-text">
                                                    vues / visite sign.
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

export default NewComponent