import { useRouter } from "next/router";
import { useState } from "react";
import CategoryProduct from "../../../components/ecommerce/Filter/CategoryProduct";
import QuickView from "../../../components/ecommerce/QuickView";
import SingleTypeProduct from "../../../components/ecommerce/SingleProductCopy";
import SingleProduct from "../../../components/ecommerce/SingleProduct";
import Breadcrumb2 from "../../../components/layout/Breadcrumb2";
import Layout from "../../../components/layout/Layout";

// My imports 
import axios from 'axios'

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

const Products = ({ univers, categories, univers_categories_Props, produit_Props, superunivers, categories_Props, produits_univers }) => {

    const router = useRouter()

    const [showUnivers, setShowUnivers] = useState(true)
    const [showCategories, setShowCategories] = useState(true)
    const [showMarques, setShowMarques] = useState(true)
    const [showPrix, setShowPrix] = useState(true)   
    const [showDesigners, setShowDesigners] = useState(true)
    const [showStyles, setShowStyles] = useState(true)
    const [showCouleurs, setShowCouleurs] = useState(true)
    const [showMotifs, setShowMotifs] = useState(true)
    const [showMateriaux, setShowMateriaux] = useState(true)

    const handleShowAllDescription = (value) => {
        router.push('#universdescription')
    }

    const handleFilter = (filterKey, value, idUnivers) => {

        if(filterKey=="univers"){
            router.push({
                pathname: `/univers/${idUnivers}`,
                query: null
            })            
        }
        else if(filterKey=="categorie"){
            router.push({
                pathname: `/categories/${idUnivers}`,
                query: null
            })            
        }
        else {
        const obj ={...router.query}
        obj[filterKey]=value
        delete obj.slug
        router.push({
            pathname: `/univers/${router.query.slug}`,
            query: {...obj}
        })
        }
        
    }

    return (
        univers&&
        <>
            <Layout noBreadcrumb="d-none">
               <Breadcrumb2 
                    title='Univers' 
                    elements={[superunivers['attributes']['LIB'], univers['attributes']['LIB']]} 
                    description={univers['attributes']['DOSSIER_TEXTE'].split(`\n`)[0]+univers['attributes']['DOSSIER_TEXTE'].split(`\n`)[1]} 
                    handleShowAllDescription = {handleShowAllDescription}             
                />
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row flex-row">
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                                {
                                    categories_Props.length>0&&   
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Dans l'univers : {univers['attributes']['LIB']}
                                            </h5>
                                            {!showCategories&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowCategories(!showCategories)}/>}
                                            {showCategories&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowCategories(!showCategories)}/>}
                                        </div>
                                        {showCategories&&
                                        <CategoryProduct 
                                        items={categories_Props} 
                                        prop='LIB_FR'
                                        filterKey='categorie'
                                        handleFilter = {handleFilter}
                                        />}
                                    </div>
                                }
                                {
                                    univers_categories_Props.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                A voir aussi dans : {univers['attributes']['superuniversdetail']['data']['attributes']['LIB']}
                                            </h5>
                                            {!showUnivers&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowUnivers(!showUnivers)}/>}
                                            {showUnivers&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowUnivers(!showUnivers)}/>}
                                        </div>
                                        {showUnivers&&
                                        <CategoryProduct 
                                        items={univers_categories_Props} 
                                        prop='LIB'
                                        filterKey='univers'
                                        handleFilter = {handleFilter}
                                        />}
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
                                        {showMarques&&
                                        <CategoryProduct 
                                        items={produit_Props.marques} 
                                        prop='MARQUE'
                                        filterKey='marque'
                                        handleFilter = {handleFilter}
                                        />}
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
                                        {showPrix&&
                                        <CategoryProduct items={produit_Props.prix} 
                                        prop='TARIF_PUB'
                                        filterKey='prix'
                                        handleFilter = {handleFilter}
                                        />}
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
                                        {showDesigners&&
                                        <CategoryProduct 
                                        items={produit_Props.designers} 
                                        prop='DESIGNER'
                                        filterKey='designer'
                                        handleFilter = {handleFilter}
                                        />}
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
                                        {showStyles&&
                                        <CategoryProduct 
                                        items={produit_Props.styles} 
                                        prop='LIB_FR'
                                        filterKey='style'
                                        handleFilter = {handleFilter}
                                        />}
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
                                        {showCouleurs&&
                                        <CategoryProduct 
                                        items={produit_Props.couleurs} 
                                        prop='LIB_FR'
                                        filterKey='couleur'
                                        handleFilter = {handleFilter}
                                        />}
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
                                        {showMotifs&&
                                        <CategoryProduct 
                                        items={produit_Props.motifs} 
                                        prop='LIB_FR'
                                        filterKey='motif'
                                        handleFilter = {handleFilter}/>}
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
                                        {showMateriaux&&
                                        <CategoryProduct 
                                        items={produit_Props.materiaux} 
                                        prop='LIB_FR'
                                        filterKey='materiau'
                                        handleFilter = {handleFilter}/>}
                                    </div>   
                                }
                            </div>

                            <div className="col-lg-4-5">
                                <h2 style={{textAlign:'center'}}>Découvrez toutes les categories de l'univers {univers['attributes']['LIB']}</h2>
                                <br/>
                                <div className="row product-grid-3">
                                    {categories.map((item) => (
                                    <div
                                        className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                        key={item["id"]}
                                    >
                                        <SingleTypeProduct key={item["id"]} item={item} baseUrl='categories'/>
                                    </div>
                                    ))}
                                    <div id="universdescription"></div>
                                    <div className="row product-grid-3">
                                        <div className="container">
                                            <p dangerouslySetInnerHTML={{__html: univers['attributes']['DOSSIER_TEXTE']}} className="mt-25"></p>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4-5">
                                    <br/><br/>
                                    {
                                    produits_univers.length > 0 &&
                                    <h2 style={{textAlign:'center'}}>Découvrez tous les produits de l'univers {univers['attributes']['LIB']}</h2>
                                    }
                                    {
                                    produits_univers.length == 0 &&
                                    <h2 style={{textAlign:'center'}}>Aucun produit trouvé</h2>
                                    }
                                    <br/>
                                    <div className="row product-grid-3">
                                        {produits_univers.map((item) => (
                                            <div
                                                key={item["id"]}
                                                className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                            >
                                                <SingleProduct key={item["id"]} item={item} baseUrl='produits'/>
                                            </div>
                                        ))}
                                    </div>
                                </div> 
                            </div>                          
                        </div>
                    </div>
                </section>
                <QuickView />
            </Layout>
        </>
    )
}

export default Products

export async function getServerSideProps (context) {

    // import qs
    const qs = require('qs')

    // get filters
    let obj =  {...context.query}
    delete obj.slug
    const filters = {...obj}

    // variables
    const produit_Props = {marques:[], prix:[], designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}
    let univers_categories_Props = []
    let categories_Props = []
    let produits_univers = []
    let produits_univers_filtered = []
    let produits_univers_filtered_ids = []
    let categories_filtered = []

    // query univers begin 
    const query = qs.stringify({
        populate: [
            'superuniversdetail.rayondetails.categories.typeprods.produits',
            'categories.typeprods.produits.style',
            'categories.typeprods.produits.ambiance',
            'categories.typeprods.produits.couleur',
            'categories.typeprods.produits.motif',
            'categories.typeprods.produits.pay',
            'categories.typeprods.produits.materiau',    
            'categories.typeprods.produits.fabrication',
            'categories.typeprods.produits.exposant'   
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const universRes = await axios.get(`http://localhost:1337/api/rayondetails/${context.params.slug}?${query}`)
    // query univers end

    // count number of products for each univers of superunivers begin 
    universRes.data.data.attributes.superuniversdetail.data.attributes.rayondetails.data.forEach(univers => {
        let count = 0
        univers.attributes.categories.data.forEach(categorie => {
           categorie.attributes.typeprods.data.forEach(typeprod => {
              typeprod.attributes.produits.data.forEach(produit => {
                count+=1
              })
           })
        })
        univers_categories_Props.push({item : univers , count : count})
    })
    // count number of products for each univers of superunivers end

    // side filters begin
    universRes.data.data.attributes.categories.data.forEach(categorie => {
        let count = 0
        categorie.attributes.typeprods.data.forEach(typeprod => {
            typeprod.attributes.produits.data.forEach(produit => {
                produit_Props.marques.push(produit)
                produit_Props.prix.push(produit)
                produit_Props.designers.push(produit)
                produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
                produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
                produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
                produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)

                // count number of products begin
                count+=1
                // count number of products end

                // get all products of univers begin
                produits_univers.push(produit)
                // get all products of univers end
            })
        })

        // count number of products for each categorie of univers begin 
        categories_Props.push({item : categorie , count : count})
        // count number of products for each categorie of univers end

    })
    // side filters end

    // count number of products for each filter characteristic begin 
    produit_Props.marques=countElements(produit_Props.marques,'MARQUE')
    produit_Props.prix=countElements(produit_Props.prix,'TARIF_PUB')
    produit_Props.designers=countElements(produit_Props.designers,'DESIGNER')
    produit_Props.styles=countElements(produit_Props.styles,'LIB_FR')
    produit_Props.couleurs=countElements(produit_Props.couleurs,'LIB_FR')              
    produit_Props.motifs=countElements(produit_Props.motifs,'LIB_FR')
    produit_Props.materiaux=countElements(produit_Props.materiaux,'LIB_FR')
    // count number of products for each filter characteristic end 
    // side filter end

    // filter products of category begin
    produits_univers_filtered = [...produits_univers]
    
    for (let filterKey in filters){
        if (filterKey == "couleur" || filterKey == "materiau" || filterKey == "style" || filterKey == "motif") {
            produits_univers_filtered = [...produits_univers_filtered].filter(produit=>produit.attributes[filterKey].data&&produit.attributes[filterKey].data.attributes["LIB_FR"] == filters[filterKey])
        }
        else if (filterKey == "marque") {
            produits_univers_filtered = [...produits_univers_filtered].filter(produit=>produit.attributes["MARQUE"] == filters[filterKey])
        }
        else if (filterKey == "designer") {
            produits_univers_filtered = [...produits_univers_filtered].filter(produit=>produit.attributes["DESIGNER"] == filters[filterKey])
        }
        else if (filterKey == "prix") {
            produits_univers_filtered = [...produits_univers_filtered].filter(produit=>produit.attributes["TARIF_PUB"] == filters[filterKey])
        }
    }
    // filter products of category end

    // filter categories of univers begin
    produits_univers_filtered_ids = produits_univers_filtered.map(produit=>produit.id)

    //categories_filtered = [...universRes.data.data.attributes.categories.data]
    universRes.data.data.attributes.categories.data.forEach(categorie=> {
        categorie.attributes.typeprods.data.forEach(typeprod => {
            if(typeprod.attributes.produits.data.find(produit=>produits_univers_filtered_ids.includes(produit["id"]))){
                if(!categories_filtered.find(element=>element.id==categorie.id)){
                    categories_filtered.push(categorie)
                }
            }  
        })
    })
    // filter categories of univers end
    
    return {
        props: {
            univers : universRes.data.data,
            categories : categories_filtered,
            univers_categories : universRes.data.data.attributes.superuniversdetail.data.attributes.rayondetails.data,
            produit_Props : produit_Props,
            univers_categories_Props : univers_categories_Props,
            superunivers : universRes.data.data.attributes.superuniversdetail.data,
            categories_Props : categories_Props,
            produits_univers : produits_univers_filtered
        }
      }
}
