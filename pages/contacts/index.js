
import React, { useState } from "react"

import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function Enregistrement (){

    
    const [activeIndex, setActiveIndex] = useState(16)

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
                                    <div className="tab-pane fade active show" >
                                        <div className="card">
                                            <h1 className="ml-10 mb-25 mt-10">CONTACTS</h1>
                                            <div className="card-header">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <div className="text-center d-none d-xl-block">
                                                            <div className="hotline d-lg-inline-flex">
                                                                <span><strong>Tél : </strong>+33 1 41 27 92 60</span>
                                                            </div>
                                                            <div className="hotline d-lg-inline-flex">
                                                                <span><strong>Fax : </strong>+33 1 47 39 89 39</span>
                                                            </div>
                                                            <div>
                                                                <span>(coût d'un appel normal)</span>
                                                                <br/>
                                                                <span>du lundi au vendredi</span>
                                                                <br/>
                                                                <span>de 9h30 à 18h00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4 text-center">
                                                        <span><strong>Email : </strong>contact@decofinder.com</span>                                                    
                                                    </div>
                                                    <div className="form-group col-md-4 text-center">
                                                        <span><strong>Adresse : </strong></span>
                                                            <span>17 rue Chartran</span>
                                                            <br/>
                                                            <span>92200 Neuilly sur Seine</span>
                                                            <br/>
                                                            <span>France</span>                                                   
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <form method="post" name="enq">
                                                    <div className="row">
                                                    <div className="form-group col-md-6">
                                                            <label>Service <span className="required mb-10">*</span></label>
                                                            <select className="select-active mb-20">
                                                                <option value="">---Sélectionnez un service---</option>
                                                                <option value="Chargés de clientèle">Chargés de clientèle</option>
                                                                <option value="Directeur général">Directeur général</option>
                                                                <option value="Support technique">Support technique</option>
                                                                <option value="Rédactrice en chef">Rédactrice en chef</option>
                                                                <option value="Directeur commercial">Directeur commercial</option>
                                                                <option value="Comptabilité">Comptabilité</option>
                                                                <option value="Directeur marketplace">Directeur marketplace</option>
                                                            </select>
                                                        </div> 
                                                        <div className="form-group col-md-12">
                                                            <label>Message<span className="required">*</span></label>
                                                            <textarea required name="message" type="text"/>
                                                        </div>
                                                        <div className="form-group col-md-12 mb-40">
                                                            <label>Votre email<span className="required">*</span></label>
                                                            <input required className="form-control" name="raison_social" type="email"/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Valider</button>
                                                        </div>
                                                    </div>
                                                </form>
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

export default Enregistrement