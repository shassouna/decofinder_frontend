import CategoryProduct from "../../components/ecommerce/Filter/CategoryProduct";
import Breadcrumb2 from "../../components/layout/Breadcrumb2";
import SingleTypeProduct from "../../components/ecommerce/SingleProductCopy";
import SingleProduct from "../../components/ecommerce/SingleProduct";
// My imports
import { useState } from "react"
import Layout from "../../components/layout/Layout";
import axios from "axios"

const countElements = (arr, prop) => {
    const res = []
    for (const element of arr) {
        if(element&&element['attributes']&&element['attributes'][prop]){
            if (res.find(e=>e.item['attributes'][prop]==element['attributes'][prop])) {
                res.find(e=>e.item['attributes'][prop]==element['attributes'][prop]).count += 1;
            } else {
                res.push({item:element, count:1})
            }
        }
    }
    return(res) 
}

const ProductId = ({ typeprod, categorie, produits, univers, categorie_typeprods_Props, produit_Props, categorie_typeprods }) => {

    const [showTypeprods, setShowTypeprods] = useState(true)
    const [showMarques, setShowMarques] = useState(true)
    const [showPrix, setShowPrix] = useState(false)   
    const [showDesigners, setShowDesigners] = useState(false)
    const [showStyles, setShowStyles] = useState(false)
    const [showCouleurs, setShowCouleurs] = useState(false)
    const [showMotifs, setShowMotifs] = useState(false)
    const [showMateriaux, setShowMateriaux] = useState(false)

    return (
        produit_Props &&
        <>
            <Layout noBreadcrumb="d-none">
            <Breadcrumb2 
                title='Type-produit' 
                elements={[univers['attributes']['LIB'], categorie['attributes']['LIB_FR'], typeprod['attributes']['LIB_FR']]} 
                description={typeprod['attributes']['TEXTE_FR']&&typeprod['attributes']['TEXTE_FR']}              
                />
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row flex-row">
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                            {
                                categorie_typeprods_Props.length>0&&
                                <div className="sidebar-widget widget-category-2 mb-15">
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <h5 className="style-1 mb-10">
                                            Dans la même categorie
                                        </h5>
                                        {!showTypeprods&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                        onClick={()=>setShowTypeprods(!showTypeprods)}/>}
                                        {showTypeprods&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                        onClick={()=>setShowTypeprods(!showTypeprods)}/>}
                                    </div>
                                    {showTypeprods&&<CategoryProduct items={categorie_typeprods_Props} prop='LIB_FR'/>}
                                </div>
                            }
                            {
                                produit_Props.marques.length>0&&
                                <div className="sidebar-widget widget-category-2 mb-15">
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <h5 className="style-1 mb-10">
                                            Marques
                                        </h5>
                                        {!showMarques&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                        onClick={()=>setShowMarques(!showMarques)}/>}
                                        {showMarques&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                        onClick={()=>setShowMarques(!showMarques)}/>}
                                    </div>
                                    {showMarques&&<CategoryProduct items={produit_Props.marques} prop='MARQUE'/>}
                                </div>
                            }
                                {
                                    produit_Props.prix.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Prix
                                            </h5>
                                            {!showPrix&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowPrix(!showPrix)}/>}
                                            {showPrix&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowPrix(!showPrix)}/>}
                                        </div>
                                        {showPrix&&<CategoryProduct items={produit_Props.prix} prop='TARIF_PUB'/>}
                                    </div>  
                                }
                                {
                                    produit_Props.designers.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Designers
                                            </h5>
                                            {!showDesigners&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowDesigners(!showDesigners)}/>}
                                            {showDesigners&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowDesigners(!showDesigners)}/>}
                                        </div>
                                        {showDesigners&&<CategoryProduct items={produit_Props.designers} prop='DESIGNER'/>}
                                    </div>  
                                }
                                {
                                    produit_Props.styles.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Styles
                                            </h5>
                                            {!showStyles&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowStyles(!showStyles)}/>}
                                            {showStyles&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowStyles(!showStyles)}/>}
                                        </div>
                                        {showStyles&&<CategoryProduct items={produit_Props.styles} prop='LIB_FR'/>}
                                    </div>
                                }
                                {
                                    produit_Props.couleurs.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Couleurs
                                            </h5>
                                            {!showCouleurs&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowCouleurs(!showCouleurs)}/>}
                                            {showCouleurs&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowCouleurs(!showCouleurs)}/>}
                                        </div>
                                        {showCouleurs&&<CategoryProduct items={produit_Props.couleurs} prop='LIB_FR'/>}
                                    </div>
                                }
                                {
                                    produit_Props.motifs.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Motifs
                                            </h5>
                                            {!showMotifs&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowMotifs(!showMotifs)}/>}
                                            {showMotifs&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowMotifs(!showMotifs)}/>}
                                        </div>
                                        {showMotifs&&<CategoryProduct items={produit_Props.motifs} prop='LIB_FR'/>}
                                    </div>
                                }
                                {
                                    produit_Props.materiaux.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Materiaux
                                            </h5>
                                            {!showMateriaux&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowMateriaux(!showMateriaux)}/>}
                                            {showMateriaux&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowMateriaux(!showMateriaux)}/>}
                                        </div>
                                        {showMateriaux&&<CategoryProduct items={produit_Props.materiaux} prop='LIB_FR'/>}
                                    </div>   
                                }
                            </div>

                            <div className="col-lg-4-5">
                                <div className="row product-grid-3">
                                    {produits.map((item, i) => (
                                        <div
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                            key={i}
                                        >
                                            <SingleProduct item={item} typeprod={typeprod} />
                                        </div>
                                    ))}
                                </div>
                            </div> 
                        </div>
                        <br/><br/>                                            
                        <div className="col-lg-2-3">
                            <h2 style={{textAlign:'center'}}>Produits associés</h2>
                            <br/>
                            <div className="row product-grid-3">
                                {categorie_typeprods.map((item, i) => (
                                    <div
                                        className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                        key={i}
                                    >
                                        <SingleTypeProduct item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>  
                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {

    const paths = []

    return {
        paths:paths,
        fallback : true
    }
}

export async function getStaticProps (context) {

    const qs = require('qs')

    const query = qs.stringify({

        populate: [
            'category.rayondetail',
            'produits.exposant',
            'category.typeprods.produits',            
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const typeprodRes = await axios.get(`http://localhost:1337/api/typeprods/7277?${query}`)

    const produit_Props = {marques:[], prix:[], designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}

    typeprodRes.data.data.attributes.produits.data.forEach(produit => {
        produit_Props.marques.push(produit)
        produit_Props.prix.push(produit)
        produit_Props.designers.push(produit)
        produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
        produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
        produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
        produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)
    })

    produit_Props.marques=countElements(produit_Props.marques,'MARQUE')
    produit_Props.prix=countElements(produit_Props.prix,'TARIF_PUB')
    produit_Props.designers=countElements(produit_Props.designers,'DESIGNER')
    produit_Props.styles=countElements(produit_Props.styles,'LIB_FR')
    produit_Props.couleurs=countElements(produit_Props.couleurs,'LIB_FR')              
    produit_Props.motifs=countElements(produit_Props.motifs,'LIB_FR')
    produit_Props.materiaux=countElements(produit_Props.materiaux,'LIB_FR')

    let categorie_typeprods_Props = []

    typeprodRes.data.data.attributes.category.data.attributes.typeprods.data.forEach(typeprod => {
        let count = 0
        typeprod.attributes.produits.data.forEach(produit => {
        count+=1
        })
        categorie_typeprods_Props.push({item : typeprod , count : count})
    })

    return {
        props: {
            produit_Props : produit_Props,
            typeprod : typeprodRes.data.data,  
            categorie : typeprodRes.data.data.attributes.category.data,
            produits : typeprodRes.data.data.attributes.produits.data,
            univers : typeprodRes.data.data.attributes.category.data.attributes.rayondetail.data,
            categorie_typeprods_Props : categorie_typeprods_Props,
            categorie_typeprods : typeprodRes.data.data.attributes.category.data.attributes.typeprods.data.filter(element=>element.attributes.LIB_FR != typeprodRes.data.data.attributes.LIB_FR)
        }
    }
}


export default ProductId
