
import React, { useState } from "react"

import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"

function Enregistrement (){

    
    const [activeIndex, setActiveIndex] = useState(10)

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
                                            <div className="card-header">
                                                <h5>1.COORDONNÉES</h5>
                                            </div>
                                            <div className="card-body">
                                                <form method="post" name="enq">
                                                    <div className="row">
                                                        <div className="form-group col-md-6">
                                                            <label>Marque <span className="required">*</span></label>
                                                            <input required className="form-control" name="marque" type="text" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Raison sociale <span className="required">*</span></label>
                                                            <input required className="form-control" name="raison_social" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Forme Juridique <span className="required">*</span></label>
                                                            <input required className="form-control" name="forme_juridique" type="text" placeholder="SA, SARL ..."/>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Vos activités <span className="required">*</span></label>
                                                            <select className="select-active">
                                                                <option value="">----------</option>
                                                                <option value="Agence de Design">Agence de Design</option>
                                                                <option value="Créateur Designer">Créateur Designer</option>
                                                                <option value="Studio de création">Studio de création</option>
                                                                <option value="Cuisiniste">Cuisiniste</option>
                                                                <option value="Editeur">Editeur</option>
                                                                <option value="Editeur - livres">Editeur - livres</option>
                                                                <option value="Editeur de Tissus">Editeur de Tissus</option>
                                                                <option value="Fabricant">Fabricant</option>
                                                                <option value="Orfèvre">Orfèvre</option>
                                                                <option value="Parfumeur">Parfumeur</option>
                                                                <option value="Passementier">Passementier</option>
                                                                <option value="Piscinier">Piscinier</option>
                                                                <option value="Porcelainier">Porcelainier</option>
                                                                <option value="Brodeur">Brodeur</option>
                                                                <option value="Plumassière">Plumassière</option>
                                                                <option value="Tapissier-Confection">Tapissier-Confection</option>
                                                                <option value="Tisserand">Tisserand</option>
                                                                <option value="Ebeniste-marqueteur">Ebeniste-marqueteur</option>
                                                                <option value="Laqueur Vernisseur">Laqueur Vernisseur</option>
                                                                <option value="Tourneur sur bois">Tourneur sur bois</option>
                                                                <option value="Armurier">Armurier</option>
                                                                <option value="Coutelier">Coutelier</option>
                                                                <option value="Passementier">Passementier</option>
                                                                <option value="Piscinier">Piscinier</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Adresse complète <span className="required">*</span></label>
                                                            <input required className="form-control" name="adresse_complète" type="text"/>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Adresse <span className="required">*</span></label>
                                                            <input required className="form-control" name="adresse" type="text"/>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Ville <span className="required">*</span></label>
                                                            <input required className="form-control" name="ville" type="text"/>
                                                        </div>  
                                                        <div className="form-group col-md-6">
                                                            <label>Code postale <span className="required">*</span></label>
                                                            <input required className="form-control" name="code_postale" type="text"/>
                                                        </div>    
                                                        <div className="form-group col-md-6">
                                                            <label>Pays <span className="required">*</span></label>
                                                            <select className="select-active">
                                                                <option value="">----------</option>
                                                                <option value="Agence de Design">Agence de Design</option>
                                                                <option value="Créateur Designer">Créateur Designer</option>
                                                                <option value="Studio de création">Studio de création</option>
                                                                <option value="Cuisiniste">Cuisiniste</option>
                                                                <option value="Editeur">Editeur</option>
                                                                <option value="Editeur - livres">Editeur - livres</option>
                                                                <option value="Editeur de Tissus">Editeur de Tissus</option>
                                                                <option value="Fabricant">Fabricant</option>
                                                                <option value="Orfèvre">Orfèvre</option>
                                                                <option value="Parfumeur">Parfumeur</option>
                                                                <option value="Passementier">Passementier</option>
                                                                <option value="Piscinier">Piscinier</option>
                                                                <option value="Porcelainier">Porcelainier</option>
                                                                <option value="Brodeur">Brodeur</option>
                                                                <option value="Plumassière">Plumassière</option>
                                                                <option value="Tapissier-Confection">Tapissier-Confection</option>
                                                                <option value="Tisserand">Tisserand</option>
                                                                <option value="Ebeniste-marqueteur">Ebeniste-marqueteur</option>
                                                                <option value="Laqueur Vernisseur">Laqueur Vernisseur</option>
                                                                <option value="Tourneur sur bois">Tourneur sur bois</option>
                                                                <option value="Armurier">Armurier</option>
                                                                <option value="Coutelier">Coutelier</option>
                                                                <option value="Passementier">Passementier</option>
                                                                <option value="Piscinier">Piscinier</option>
                                                            </select>
                                                        </div> 
                                                        <div className="form-group col-md-6">
                                                            <label>Téléphone <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="téléphone" type="text" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Fax <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="fax" type="text" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Email général <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="téléphone" type="email" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Site Web <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="siteweb" type="text" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Facebook <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="facebook" type="text" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Twitter <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="twitter" type="text" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Instagram
                                                                <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="instagram" type="text" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Pinterest <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="pinterst" type="pinterest" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Youtube <span className="required">*</span></label>
                                                            <input required="" className="form-control" name="youtube" type="text" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Save Change</button>
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