import CategoryProduct from "../../../components/ecommerce/Filter/CategoryProduct";
import Breadcrumb2 from "../../../components/layout/Breadcrumb2";
import SingleTypeProduct from "../../../components/ecommerce/SingleProductCopy";
import SingleProduct from "../../../components/ecommerce/SingleProduct";

// My imports
import { useRouter } from "next/router";
import { useState } from "react"
import Layout from "../../../components/layout/Layout";
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

const ProductId = ({ typeprods, produit_Props, typeprods_Props, categorie, univers, univers_categories_Props, produits_categorie }) => {

    const router = useRouter()
    
    const [showUnivers, setShowUnivers] = useState(true)
    const [showCategories, setShowCategories] = useState(true)
    const [showMarques, setShowMarques] = useState(true)
    const [showPrix, setShowPrix] = useState(false)   
    const [showDesigners, setShowDesigners] = useState(false)
    const [showStyles, setShowStyles] = useState(false)
    const [showCouleurs, setShowCouleurs] = useState(false)
    const [showMotifs, setShowMotifs] = useState(false)
    const [showMateriaux, setShowMateriaux] = useState(false)

    const handleFilter = (filterKey, value, idCategorie) => {

        if(filterKey=="categorie"){
            router.push({
                pathname: `/categories/${idCategorie}`,
                query: null
            })            
        }
        else {
        const obj ={...router.query}
        obj[filterKey]=value
        delete obj.slug
        router.push({
            pathname: `/categories/${router.query.slug}`,
            query: {...obj}
        })
        }
        
    }

    return (
        produit_Props &&
        <>
            <Layout noBreadcrumb="d-none">
                <Breadcrumb2 
                    title={'Catégorie ' + categorie['attributes']['LIB_FR'] + '-' + univers['attributes']['LIB']}
                    elements={[univers['attributes']['LIB'], categorie['attributes']['LIB_FR']]} 
                    description = {categorie['attributes']['TEXTE_FR'].split(`\n`)[0]+categorie['attributes']['TEXTE_FR'].split(`\n`)[1]}   
                />
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row flex-row">
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                                {
                                    univers_categories_Props.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                A voir aussi dans : {univers['attributes']['LIB']}
                                            </h5>
                                            {!showUnivers&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowUnivers(!showUnivers)}/>}
                                            {showUnivers&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowUnivers(!showUnivers)}/>}
                                        </div>
                                        {showUnivers&&
                                        <CategoryProduct 
                                        items={univers_categories_Props} 
                                        prop='LIB_FR'
                                        filterKey='categorie'
                                        handleFilter = {handleFilter}/>}
                                    </div>
                                }
                                {
                                    typeprods_Props.length>0&&
                                    <div className="sidebar-widget widget-category-2 mb-15">
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <h5 className="style-1 mb-10">
                                                Dans la catégorie : {categorie['attributes']['LIB_FR']}
                                            </h5>
                                            {!showCategories&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/down-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowCategories(!showCategories)}/>}
                                            {showCategories&&<img style={{width:'25px', height:'25px'}} src="/assets/imgs/theme/icons/up-arrow-svgrepo-com.svg"
                                            onClick={()=>setShowCategories(!showCategories)}/>}
                                        </div>
                                        {showCategories&&
                                        <CategoryProduct 
                                        items={typeprods_Props} 
                                        prop='LIB_FR'
                                        filterKey='typeprod'
                                        handleFilter = {handleFilter}/>}
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
                                        />
                                        }
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
                                        <CategoryProduct 
                                        items={produit_Props.prix} 
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
                                        handleFilter = {handleFilter}
                                        />}
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
                                        handleFilter = {handleFilter}
                                        />}
                                    </div>   
                                }
                            </div>

                            <div className="col-lg-4-5">
                                <h2 style={{textAlign:'center'}}>Choisissez un type-produit dans la catégorie {categorie['attributes']['LIB_FR']}</h2>
                                <br/>
                                <div className="row product-grid-3">
                                    {typeprods.map((item) => (
                                        <div
                                            key={item["id"]}
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                        >
                                            <SingleTypeProduct key={item["id"]} item={item} baseUrl='typeprods'/>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-4-5">
                                    <br/><br/>
                                    {
                                    produits_categorie.length > 0 &&
                                    <h2 style={{textAlign:'center'}}>Découvrez tous les produits de la catégorie {categorie['attributes']['LIB_FR']}</h2>
                                    }
                                    {
                                    produits_categorie.length == 0 &&
                                    <h2 style={{textAlign:'center'}}>Aucun produit trouvé</h2>
                                    }
                                    <br/>
                                    <div className="row product-grid-3">
                                        {produits_categorie.map((item) => (
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
            </Layout>
        </>
    )
}

export async function getServerSideProps (context) {

    // import qs
    const qs = require('qs')

    // get filters
    let obj =  {...context.query}
    delete obj.slug
    const filters = {...obj}

    // variables
    const produit_Props = {marques:[], prix:[], designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}
    let typeprods_Props = []
    let produits_categorie = []
    let univers_categories_Props = []
    let typeprods_filtered = []
    let produits_categorie_filtered = []
    let produits_categorie_filtered_ids = []

    // query categories begin 
    const query = qs.stringify({

        populate: [
            'rayondetail.categories.typeprods.produits',
            'typeprods.produits.exposant',
            'typeprods.produits.style',
            'typeprods.produits.ambiance',
            'typeprods.produits.couleur',
            'typeprods.produits.motif',
            'typeprods.produits.pay',
            'typeprods.produits.materiau',    
            'typeprods.produits.fabrication'
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const categorieRes = await axios.get(`http://localhost:1337/api/categories/${context.params.slug}?${query}`)
    // query categories end

    // count number of products for each category of univers begin 
    categorieRes.data.data.attributes.rayondetail.data.attributes.categories.data.forEach(categorie => {
        let count = 0
           categorie.attributes.typeprods.data.forEach(typeprod => {
              typeprod.attributes.produits.data.forEach(produit => {
                count+=1
              })
           })
        univers_categories_Props.push({item : categorie , count : count})
    })
    // count number of products for each category of univers end

    // side filters begin
    categorieRes.data.data.attributes.typeprods.data.forEach(typeprod => {
        let count = 0
        typeprod.attributes.produits.data.forEach(produit => {
            produit_Props.marques.push(produit)
            produit_Props.prix.push(produit)
            produit_Props.designers.push(produit)
            produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
            produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
            produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
            produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)  

            // count number of products of each category begin
            count+=1
            // count number of products of each category end

            // get all products of category begin
            produits_categorie.push(produit)
            // get all products of category end

        })

        // count number of products for each typeprod of category begin 
        typeprods_Props.push({item : typeprod , count : count}) 
                // count number of products for each typeprod of category end      
    })

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
    produits_categorie_filtered = [...produits_categorie]
    
    for (let filterKey in filters){
        if (filterKey == "couleur" || filterKey == "materiau" || filterKey == "style" || filterKey == "motif") {
            produits_categorie_filtered = [...produits_categorie_filtered].filter(produit=>produit.attributes[filterKey].data.attributes["LIB_FR"] == filters[filterKey])
        }
        else if (filterKey == "marque") {
            produits_categorie_filtered = [...produits_categorie_filtered].filter(produit=>produit.attributes["MARQUE"] == filters[filterKey])
        }
        else if (filterKey == "designer") {
            produits_categorie_filtered = [...produits_categorie_filtered].filter(produit=>produit.attributes["DESIGNER"] == filters[filterKey])
        }
        else if (filterKey == "prix") {
            produits_categorie_filtered = [...produits_categorie_filtered].filter(produit=>produit.attributes["TARIF_PUB"] == filters[filterKey])
        }
        else if (filterKey == "typeprod") {
            let typeprod = categorieRes.data.data.attributes.typeprods.data.find(typeprod => typeprod["attributes"]["LIB_FR"] = filters[filterKey])
            produits_categorie_filtered = typeprod.attributes.produits.data
        }
    }
    // filter products of category end

    // filter typeprods of category begin
    produits_categorie_filtered_ids = produits_categorie_filtered.map(produit=>produit.id)

    typeprods_filtered = [...categorieRes.data.data.attributes.typeprods.data]

    typeprods_filtered.forEach(typeprod => {
        if(typeprod.attributes.produits.data.find(produit=>produits_categorie_filtered_ids.includes(produit["id"]))){
            if(!typeprods_filtered.find(element=>element.id==typeprod.id)){
                typeprods_filtered.push(typeprod)
            }
        }
    })
    // filter typeprods of category end

    return {
        props: {
            produit_Props : produit_Props,
            typeprods : typeprods_filtered,  
            typeprods_Props : typeprods_Props,
            categorie : categorieRes.data.data,
            univers : categorieRes.data.data.attributes.rayondetail.data,
            univers_categories_Props : univers_categories_Props,
            produits_categorie : produits_categorie_filtered
        }
    }
}


export default ProductId
