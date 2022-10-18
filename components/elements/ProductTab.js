/*import React, { useState } from "react";

const ProductTab = ({produit}) => {

    const [activeIndex, setActiveIndex] = useState(1)

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        produit&&
        <div className="product-info">
            <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                     <li className="nav-item">
                        <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} id="Description-tab" data-bs-toggle="tab" onClick={() => handleOnClick(1)}>
                            Description
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 2 ? "nav-link active" : "nav-link"} id="Additional-info-tab" data-bs-toggle="tab" onClick={() => handleOnClick(2)}>
                            Caractéristiques
                        </a>
                    </li>
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="Description">
                        <div className="">
                            {produit['attributes']['DESC_FR']&&<h4 className="mt-30">{produit['attributes']['TITRE_FR']}</h4>}
                            <p>{produit['attributes']['DESC_FR']}</p>
                            <hr className="wp-block-separator is-style-dots" />
                        </div>
                    </div>

                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="Additional-info">

                        <table className="font-md">
                            <tbody>
                                {produit['attributes']['MODELES']&&
                                <tr className="stand-up">
                                    <th>Modèle</th>
                                    <td>
                                        <p>{produit['attributes']['MODELES']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['COLLECTION']&&
                                <tr className="stand-up">
                                    <th>Collection</th>
                                    <td>
                                        <p>{produit['attributes']['COLLECTION']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes'].pay['data']&&produit['attributes'].pay['data']['attributes']['LIB_FR']&&
                                 <tr className="stand-up">
                                    <th>Origine</th>
                                    <td>
                                        <p>{produit['attributes'].pay['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                 </tr>   
                                }
                                {
                                produit['attributes']['REFERENCE_FABRICANT']&&
                                <tr className="folded-wo-wheels">
                                    <th>Ref.Fab</th>
                                    <td>
                                        <p>{produit['attributes']['REFERENCE_FABRICANT']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['REFERENCE_FABRICANT']&&
                                <tr className="folded-wo-wheels">
                                    <th>Réf.Rev</th>
                                    <td>
                                        <p>{produit['attributes']['REFERENCE_FABRICANT']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['EAN']&&
                                <tr className="folded-w-wheels">
                                    <th>EAN</th>
                                    <td>
                                        <p>{produit['attributes']['EAN']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['DIMENSIONS']&&
                                <tr className="door-pass-through">
                                    <th>Dimensions</th>
                                    <td>
                                        <p>{produit['attributes']['DIMENSIONS']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['DIMENSIONS']&&
                                <tr className="door-pass-through">
                                    <th>Année</th>
                                    <td>
                                        <p>{produit['attributes']['DIMENSIONS']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes']['DESIGNER']&&
                                <tr className="door-pass-through">
                                    <th>Designer</th>
                                    <td>
                                        <p>{produit['attributes']['DESIGNER']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].couleur&&produit['attributes'].couleur['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Couleur</th>
                                    <td>
                                        <p>{produit['attributes'].couleur['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].materiau&&produit['attributes'].materiau['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Mat. 1</th>
                                    <td>
                                        <p>{produit['attributes'].materiau['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].motif&&produit['attributes'].motif['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Motif</th>
                                    <td>
                                        <p>{produit['attributes'].motif['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].fabrication&&produit['attributes'].fabrication['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Fabrication</th>
                                    <td>
                                        <p>{produit['attributes'].fabrication['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].style&&produit['attributes'].style['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Style</th>
                                    <td>
                                        <p>{produit['attributes'].style['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes']['DESIGNER']&&
                                <tr className="door-pass-through">
                                    <th>Marque</th>
                                    <td>
                                        <p>{produit['attributes']['DESIGNER']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].ambiance&&produit['attributes'].ambiance['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Ambiance</th>
                                    <td>
                                        <p>{produit['attributes'].ambiance['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTab;*/
import React, { useState } from "react";
import Image from 'next/image'
const ProductTab = ({produit}) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="product-info">
            <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                    <li className="nav-item">
                        <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} id="Description-tab" data-bs-toggle="tab" onClick={() => handleOnClick(1)}>
                            Détails
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 2 ? "nav-link active" : "nav-link"} id="Additional-info-tab" data-bs-toggle="tab" onClick={() => handleOnClick(2)}>
                            Toutes les caractéristiques                       
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 3 ? "nav-link active" : "nav-link"} id="Reviews-tab" data-bs-toggle="tab" onClick={() => handleOnClick(3)}>
                            Liste de vendeurs
                        </a>
                    </li>
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="Description">
                        <div className="">
                            <h4 className="mt-30">Description</h4><br/>
                            <p>{produit['attributes']['DESC_FR']}</p>
                            <div>
                                <h4 className="mt-30">Caractéristiques</h4>
                                <ul className="product-more-infor mt-30">
                                    <li>
                                        <span>Origine</span> {produit['attributes'].pay['data']['attributes']['LIB_FR']}
                                    </li>
                                    <li>
                                        <span>Couleur</span> {produit['attributes'].couleur['data']['attributes']['LIB_FR']}
                                    </li>
                                    <li>
                                        <span>Style</span> {produit['attributes'].style['data']['attributes']['LIB_FR']}
                                    </li>
                                    <li>
                                        <span>Collection</span> {produit['attributes']['COLLECTION']}
                                    </li>
                                    <li>
                                        <span>Modèle</span> {produit['attributes']['MODELES']}
                                    </li>
                                    {/*<li>
                                        <span>Ref.Fab</span>{produit['attributes']['REFERENCE_FABRICANT']}
                                    </li>
                                    <li>
                                        <span>Ref.Rev</span>{produit['attributes']['REFERENCE_FABRICANT']}
                                    </li>
                                    <li>
                                        <span>EAN</span>{produit['attributes']['EAN']}
                                    </li>
                                    <li>
                                        <span>Dimensions</span>{produit['attributes']['DIMENSIONS']}
                                    </li>
                                    <li>
                                        <span>Année</span>{produit['attributes']['DATE_DEB_PRO']}
                                    </li>
                                    <li>
                                        <span>Designer</span>{produit['attributes']['DESIGNER']}
                                    </li>
                                    <li>
                                        <span>Mat.1</span>{produit['attributes'].materiau['data']['attributes']['LIB_FR']}
                                    </li>
                                    <li>
                                        <span>Motif</span>{produit['attributes'].motif['data']['attributes']['LIB_FR']}
                                    </li>
                                    <li>
                                        <span>Fabrication</span>{produit['attributes'].fabrication['data']['attributes']['LIB_FR']}
                                    </li>
                                    <li>
                                        <span>Marque</span>{produit['attributes']['MARQUE']}
                                    </li>
                                    <li>
                                        <span>Ambiance</span>{produit['attributes'].ambiance['data']['attributes']['LIB_FR']}
                                    </li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="Additional-info">
                        <table className="font-md">
                            <tbody>
                                {produit['attributes']['MODELES']&&
                                <tr className="stand-up">
                                    <th>Modèle</th>
                                    <td>
                                        <p>{produit['attributes']['MODELES']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['COLLECTION']&&
                                <tr className="stand-up">
                                    <th>Collection</th>
                                    <td>
                                        <p>{produit['attributes']['COLLECTION']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes'].pay['data']&&produit['attributes'].pay['data']['attributes']['LIB_FR']&&
                                 <tr className="stand-up">
                                    <th>Origine</th>
                                    <td>
                                        <p>{produit['attributes'].pay['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                 </tr>   
                                }
                                {
                                produit['attributes']['REFERENCE_FABRICANT']&&
                                <tr className="folded-wo-wheels">
                                    <th>Ref.Fab</th>
                                    <td>
                                        <p>{produit['attributes']['REFERENCE_FABRICANT']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['REFERENCE_FABRICANT']&&
                                <tr className="folded-wo-wheels">
                                    <th>Réf.Rev</th>
                                    <td>
                                        <p>{produit['attributes']['REFERENCE_FABRICANT']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['EAN']&&
                                <tr className="folded-w-wheels">
                                    <th>EAN</th>
                                    <td>
                                        <p>{produit['attributes']['EAN']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['DIMENSIONS']&&
                                <tr className="door-pass-through">
                                    <th>Dimensions</th>
                                    <td>
                                        <p>{produit['attributes']['DIMENSIONS']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['attributes']['DIMENSIONS']&&
                                <tr className="door-pass-through">
                                    <th>Année</th>
                                    <td>
                                        <p>{produit['attributes']['DIMENSIONS']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes']['DESIGNER']&&
                                <tr className="door-pass-through">
                                    <th>Designer</th>
                                    <td>
                                        <p>{produit['attributes']['DESIGNER']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].couleur&&produit['attributes'].couleur['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Couleur</th>
                                    <td>
                                        <p>{produit['attributes'].couleur['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].materiau&&produit['attributes'].materiau['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Mat. 1</th>
                                    <td>
                                        <p>{produit['attributes'].materiau['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].motif&&produit['attributes'].motif['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Motif</th>
                                    <td>
                                        <p>{produit['attributes'].motif['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].fabrication&&produit['attributes'].fabrication['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Fabrication</th>
                                    <td>
                                        <p>{produit['attributes'].fabrication['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].style&&produit['attributes'].style['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Style</th>
                                    <td>
                                        <p>{produit['attributes'].style['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes']['DESIGNER']&&
                                <tr className="door-pass-through">
                                    <th>Marque</th>
                                    <td>
                                        <p>{produit['attributes']['DESIGNER']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['attributes'].ambiance&&produit['attributes'].ambiance['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Ambiance</th>
                                    <td>
                                        <p>{produit['attributes'].ambiance['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className={activeIndex === 3 ? "tab-pane fade show active mt-20 ml-40" : "tab-pane fade mt-20 ml-40"} id="Reviews">
                        <ul className="contact-infor mt-20">
                        {
                        produit['attributes'].lienrevendeurproduits['data'].map(lienrevendeurproduit=>(
                        <>
                            <div className="vendor-logo d-flex mb-15">
                                <img src="/assets/imgs/vendor/vendor-18.svg" alt="" />
                                <div className="vendor-name ml-15 mt-10">
                                    <h6>
                                        <a href="vendor-details-2.html">{lienrevendeurproduit['attributes'].exposant['data']['attributes']['NOM']}</a>
                                    </h6>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <strong><Image
                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                /></strong> <span>Acheter en ligne</span>
                                </li>
                            </ul>
                            <br/>
                        </>
                        ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTab;

