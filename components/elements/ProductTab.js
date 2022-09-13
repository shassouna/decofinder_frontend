import React, { useState } from "react";

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
                            {produit['data']['attributes']['DESC_FR']&&<h4 className="mt-30">{produit['data']['attributes']['TITRE_FR']}</h4>}
                            <p>{produit['data']['attributes']['DESC_FR']}</p>
                            <hr className="wp-block-separator is-style-dots" />
                        </div>
                    </div>

                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="Additional-info">

                        <table className="font-md">
                            <tbody>
                                {produit['data']['attributes']['MODELES']&&
                                <tr className="stand-up">
                                    <th>Modèle</th>
                                    <td>
                                        <p>{produit['data']['attributes']['MODELES']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['data']['attributes']['COLLECTION']&&
                                <tr className="stand-up">
                                    <th>Collection</th>
                                    <td>
                                        <p>{produit['data']['attributes']['COLLECTION']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['data']['attributes'].pay['data']&&produit['data']['attributes'].pay['data']['attributes']['LIB_FR']&&
                                 <tr className="stand-up">
                                    <th>Origine</th>
                                    <td>
                                        <p>{produit['data']['attributes'].pay['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                 </tr>   
                                }
                                {
                                produit['data']['attributes']['REFERENCE_FABRICANT']&&
                                <tr className="folded-wo-wheels">
                                    <th>Ref.Fab</th>
                                    <td>
                                        <p>{produit['data']['attributes']['REFERENCE_FABRICANT']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['data']['attributes']['REFERENCE_FABRICANT']&&
                                <tr className="folded-wo-wheels">
                                    <th>Réf.Rev</th>
                                    <td>
                                        <p>{produit['data']['attributes']['REFERENCE_FABRICANT']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['data']['attributes']['EAN']&&
                                <tr className="folded-w-wheels">
                                    <th>EAN</th>
                                    <td>
                                        <p>{produit['data']['attributes']['EAN']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['data']['attributes']['DIMENSIONS']&&
                                <tr className="door-pass-through">
                                    <th>Dimensions</th>
                                    <td>
                                        <p>{produit['data']['attributes']['DIMENSIONS']}</p>
                                    </td>
                                </tr>
                                }
                                {
                                produit['data']['attributes']['DIMENSIONS']&&
                                <tr className="door-pass-through">
                                    <th>Année</th>
                                    <td>
                                        <p>{produit['data']['attributes']['DIMENSIONS']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes']['DESIGNER']&&
                                <tr className="door-pass-through">
                                    <th>Designer</th>
                                    <td>
                                        <p>{produit['data']['attributes']['DESIGNER']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes'].couleur&&produit['data']['attributes'].couleur['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Couleur</th>
                                    <td>
                                        <p>{produit['data']['attributes'].couleur['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes'].materiau&&produit['data']['attributes'].materiau['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Mat. 1</th>
                                    <td>
                                        <p>{produit['data']['attributes'].materiau['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes'].motif&&produit['data']['attributes'].motif['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Motif</th>
                                    <td>
                                        <p>{produit['data']['attributes'].motif['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes'].fabrication&&produit['data']['attributes'].fabrication['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Fabrication</th>
                                    <td>
                                        <p>{produit['data']['attributes'].fabrication['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes'].style&&produit['data']['attributes'].style['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Style</th>
                                    <td>
                                        <p>{produit['data']['attributes'].style['data']['attributes']['LIB_FR']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes']['DESIGNER']&&
                                <tr className="door-pass-through">
                                    <th>Marque</th>
                                    <td>
                                        <p>{produit['data']['attributes']['DESIGNER']}</p>
                                    </td>
                                </tr>
                                }
                                {produit['data']['attributes'].ambiance&&produit['data']['attributes'].ambiance['data']['attributes']['LIB_FR']&&
                                <tr className="door-pass-through">
                                    <th>Ambiance</th>
                                    <td>
                                        <p>{produit['data']['attributes'].ambiance['data']['attributes']['LIB_FR']}</p>
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

export default ProductTab;
