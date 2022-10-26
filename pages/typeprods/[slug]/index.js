// import from components/Filter
import SideFilterLinks from "../../../components/ecommerce/Filter/SideFilterLinks"
import SideFilter from "../../../components/ecommerce/Filter/SideFilter"
import SideFilterPrice from "../../../components/ecommerce/Filter/SideFilterPrice"
// import from components/layout
import Breadcrumb2 from "../../../components/layout/Breadcrumb2"

// import from components/ecommerce
import SingleTypeProduct from "../../../components/ecommerce/SingleProductCopy"
import SingleProduct from "../../../components/ecommerce/SingleProduct"

// import from next
import { useRouter } from "next/router"

// import from react
import { useState, useEffect } from "react"

// import from libraries
import axios from "axios"

// Compter le nombre de produits pour un filtre x 
const handleCountProductsOfEachFilter = (arr, prop) => {
    const res = []
    for (const element of arr) {
        if(element&&element['attributes']&&element['attributes'][prop]){
            if (res.find(e=>e.item['attributes'][prop]==element['attributes'][prop])) {
                res.find(e=>e.item['attributes'][prop]==element['attributes'][prop]).count += 1
            } else {
                res.push({item:element, count:1})
            }
        }
    }
    return(res) 
}

// Compter le nombre de produits pour le filtre prix
const handleCountProductsOfEachPrice = (arr, prop, prices) => {
    let res = []
    for (let i=0; i<prices.length-1; i++){
        res.push({
            id : prices[i],
            item : [prices[i], prices[i+1]], 
            count : (arr.filter(element=>element['attributes']&&element['attributes'][prop]&&element['attributes'][prop]>prices[i]&&element['attributes'][prop]<prices[i+1])).length
        })
    }
    res = res.filter(e=>e.count>0)
    return(res) 
}

// Trier un tableau de produis selon s'il est client ou pas client
const handleSortByClientOrNotClient = (tab, lib1, lib2) => {
    return tab.sort((a,b) => (a['attributes'][lib1]['data']['attributes'][lib2] > b['attributes'][lib1]['data']['attributes'][lib2]) ? -1 : ((b['attributes'][lib1]['data']['attributes'][lib2] > a['attributes'][lib1]['data']['attributes'][lib2]) ? 1 : 0))
}

const Typeproduit = ({ typeprod, categorie, produits, univers, categorie_typeprods_Props, produit_Props, categorie_typeprods, filtersInitail }) => {

    // ----------------------------------------------------Routers Début----------------------------------------------------
    const router = useRouter()
    // ----------------------------------------------------Routers Fin---------------------------------------------------- 

    // ----------------------------------------------------States Begin----------------------------------------------------
    // Nombre Maximum des catégories à afficher
    const [limit, setLimit] = useState(produits.length)

    // Nombre de page de pagination 
    const [pages, setPages]  = useState([])

    // La page actuelle sur laquelle on se trouve
    const [currentPage, setCurrentPage] = useState(1)

    // Controller l'affichage du filtre à gauche qui contient la liste des univers
    const [showTypeprods, setShowTypeprods] = useState(true)

    // Liste des produits
    const [produitsState, setProduitsState] = useState([])

    // Liste des filtres proposés à la gauche de la page 
    const [marques, setMarques] = useState([])
    const [prices, setPrices] = useState([])
    const [designers, setDesigners] = useState([])
    const [couleurs, setCouleurs] =useState([])
    const [motifs, setMotifs] = useState([])
    const [styles, setStyles] = useState([])    
    const [materiaux, setMateriaux] = useState([])

    // Les filtres actuelles choisi par l'utilisateur 
    const [filterPrice, setFilterPrice] = useState([])
    const [filterCouleur, setFilterCouleur] =useState([])
    const [filterMotif, setFilterMotif] = useState([])
    const [filterStyle, setFilterStyle] = useState([]) 
    const [filterMateriau, setFilterMateriau] = useState([])   
    const [filterDesigner, setFilterDesigner] = useState([])
    const [filterMarque, setFilterMarque] = useState([])    
    // ----------------------------------------------------States End----------------------------------------------------
    // ----------------------------------------------------Effectes Début----------------------------------------------------
    useEffect(()=>{

        // Mettre à jour l'apparence des filtres à gauche 
        let couleursLocal = [...produit_Props.couleurs]
        couleursLocal.filter(couleur=>filtersInitail.couleur.includes(couleur['item']['id'])?couleur['checked'] = true && couleur:null) 
        setCouleurs([...couleursLocal])

        let motifsLocal = [...produit_Props.motifs]
        motifsLocal.filter(motif=>filtersInitail.motif.includes(motif['item']['id'])?motif['checked'] = true && motif:null)
        setMotifs([...motifsLocal])
        
        let stylesLocal = [...produit_Props.styles]
        stylesLocal.filter(style=>filtersInitail.style.includes(style['item']['id'])?style['checked'] = true && style:null)
        setStyles([...stylesLocal])
        
        let designersLocal = [...produit_Props.designers]
        designersLocal.filter(designer=>filtersInitail.designer.includes(designer['item']['id'])?designer['checked'] = true && designer:null)
        setDesigners([...designersLocal])
       
        let materiauxLocal = [...produit_Props.materiaux]
        materiauxLocal.filter(materiau=>filtersInitail.materiau.includes(materiau['item']['id'])?materiau['checked'] = true && materiau:null)
        setMateriaux([...materiauxLocal])        
       
        let marquesLocal = [...produit_Props.marques]
        marquesLocal.filter(marque=>filtersInitail.marque.includes(marque['item']['id'])?marque['checked'] = true && marque:null)
        setMarques([...marquesLocal])
        
        let pricesLocal = [...produit_Props.prix]
        pricesLocal.filter(price=>filtersInitail.prix[0]==price.item[0] && filtersInitail.prix[1]==price.item[1] ? price['checked'] = true && price:null)
        setPrices([...pricesLocal])

        // Initialiser les filtres 
        setFilterCouleur(filtersInitail.couleur)
        setFilterMotif(filtersInitail.motif)
        setFilterStyle(filtersInitail.style)
        setFilterDesigner(filtersInitail.designer)
        setFilterMarque(filtersInitail.marque)
        setFilterMateriau(filtersInitail.materiau)
        setFilterPrice(filtersInitail.prix)

    },[]) 

    useEffect(()=>{

        // Initialiser les nouveautées à filtrer
        const produitsFiltered = [...produits]

        // Filtrage des nouveautés 
        if(filterPrice.length>0){
            produitsFiltered=produitsFiltered.filter(produit => parseFloat(produit['attributes']['TARIF_PUB'])>=filterPrice[0] && parseFloat(produit['attributes']['TARIF_PUB'])<=filterPrice[1])
        }
        if(filterCouleur.length>0){
            produitsFiltered=produitsFiltered.filter(produit=>produit['attributes']['couleur']['data']&&filterCouleur.includes(produit['attributes']['couleur']['data']['id']))
        }
        if(filterMotif.length>0){
            produitsFiltered=produitsFiltered.filter(produit=>produit['attributes']['motif']['data']&&filterMotif.includes(produit['attributes']['motif']['data']['id']))
        }
        if(filterStyle.length>0){
            produitsFiltered=produitsFiltered.filter(produit=>produit['attributes']['style']['data']&&filterStyle.includes(produit['attributes']['style']['data']['id']))
        }
        if(filterMateriau.length>0){
            produitsFiltered=produitsFiltered.filter(produit=>produit['attributes']['materiau']['data']&&filterMateriau.includes(produit['attributes']['materiau']['data']['id']))
        }
        if(filterDesigner.length>0){
            produitsFiltered=produitsFiltered.filter(produit=>filterDesigner.includes(produit['id']))
        }  
        if(filterMarque.length>0){
            produitsFiltered=produitsFiltered.filter(produit=>filterMarque.includes(produit['id']))
        }     

        // Mettre à jour de la liste des nouveautés à afficher
        setProduitsState([...produitsFiltered])

        // Mettre à jour le nombre des nouveautés maximum
        setLimit(produitsFiltered.length)    

        // Gestion du routeur 
        if(produitsFiltered.length != produits.length){

            const obj ={...router.query}
            
            obj['prix']=filterPrice
            obj['couleur']=filterCouleur
            obj['motif']=filterMotif
            obj['style']=filterStyle
            obj['materiau']=filterMateriau
            obj['designer']=filterDesigner
            obj['marque']=filterMarque

            router.push(
                {query: {...obj}},
                null, 
                {shallow : true}
            )
        }

    },[filterCouleur, filterMotif, filterStyle, filterDesigner, filterMarque, filterMateriau, filterPrice])
    // ----------------------------------------------------Effectes End----------------------------------------------------

    // Afficher toute la description du type produit en bas de la page 
    const handleShowAllDescription = (value) => {
        router.push('#universdescription')
    }

    // Link to Categorie page ou typeprod page 
    const handleLinkToAnotherPage = (filterKey, idTypeProd) => {
        if(filterKey=="typeprod"){
            router.push({
                pathname: `/typeprods/${idTypeProd}`,
                query: null,
                shallow : true
            })            
        }
    }

    // Mise à jour des filtres en prenant en compte ceux que l'utilisateur a choisi 
    const handleFilter = (filterKey, value) => {

        if(filterKey=="couleur"){
            setFilterCouleur(value)
        }
        else if(filterKey=="motif"){
            setFilterMotif(value)
        }
        else if(filterKey=="style"){
            setFilterStyle(value)
        }
        else if(filterKey=="designer"){
            setFilterDesigner(value)
        }
        else if(filterKey=="marque"){
            setFilterMarque(value)
        }
        else if(filterKey=="materiau"){
            setFilterMateriau(value)
        }
        else if(filterKey=="prix"){
            setFilterPrice(value)
        }
    }

    return (
        produit_Props &&
        <>
            <Breadcrumb2 
                title={'Type-produit : ' + typeprod['attributes']['LIB_FR'] + ' - ' + categorie['attributes']['LIB_FR'] + ' - ' + univers['attributes']['LIB']} 
                elements={[univers['attributes']['LIB'], categorie['attributes']['LIB_FR'], typeprod['attributes']['LIB_FR']]} 
                description={typeprod['attributes']['TEXTE_FR'].split(`\n`)[0] + typeprod['attributes']['TEXTE_FR'].split(`\n`)[1]}   
                handleShowAllDescription = {handleShowAllDescription}              
                />
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row flex-row">
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                            {
                                categorie_typeprods_Props.length> 0 &&
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
                                    {showTypeprods&&
                                    <SideFilterLinks 
                                    items={categorie_typeprods_Props} 
                                    prop='LIB_FR'
                                    filterKey='typeprod'
                                    handleLinkToAnotherPage = {handleLinkToAnotherPage}
                                    />
                                    }
                                </div>
                            }
                            {
                            marques.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Marques</label>
                                        <SideFilter 
                                        elements={marques}
                                        filterKey='marque'
                                        handleFilter={handleFilter}
                                        prop='MARQUE'/>
                                    </div>
                                </div> 
                            } 
                            {
                                prices.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Prix</label>
                                        <SideFilterPrice 
                                        elements={prices}
                                        filterKey='prix'
                                        handleFilter={handleFilter}
                                        prop='TARIF_PUB'/>
                                    </div>
                                </div> 
                            } 
                            {
                                designers.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Designers</label>
                                        <SideFilter 
                                        elements={designers}
                                        filterKey='designer'
                                        handleFilter={handleFilter}
                                        prop='DESIGNER'/>
                                    </div>
                                </div> 
                            }  
                            {
                                styles.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Styles</label>
                                        <SideFilter 
                                        elements={styles}
                                        filterKey='style'
                                        handleFilter={handleFilter}
                                        prop='LIB_FR'/>
                                    </div>
                                </div> 
                            }  
                            {
                                couleurs.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Couleurs</label>
                                        <SideFilter 
                                        elements={couleurs}
                                        filterKey='couleur'
                                        handleFilter={handleFilter}
                                        prop='LIB_FR'/>
                                    </div>
                                </div> 
                            }  
                            {
                                motifs.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Motifs</label>
                                        <SideFilter 
                                        elements={motifs}
                                        filterKey='motif'
                                        handleFilter={handleFilter}
                                        prop='LIB_FR'/>
                                    </div>
                                </div> 
                            }  
                            {
                                materiaux.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Materiaux</label>
                                        <SideFilter 
                                        elements={materiaux}
                                        filterKey='materiau'
                                        handleFilter={handleFilter}
                                        prop='LIB_FR'/>
                                    </div>
                                </div> 
                            }
                            </div>

                            <div className="col-lg-4-5">
                            <h2 style={{textAlign:'center'}}>Choisissez un produit dans le type-produit {typeprod['attributes']['LIB_FR']}</h2>
                                <br/>
                                <div className="row product-grid-3">
                                    {produitsState.map((item, i) => (
                                        <div
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                            key={i}
                                        >
                                            <SingleProduct 
                                            item={item} 
                                            typeprod={typeprod} 
                                            baseUrl="produits"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <br/><br/> 
                                <div className="col-lg-2-3">
                                    <h2 style={{textAlign:'center'}}>Produits associés</h2>
                                    <br/>
                                    <div className="row product-grid-3">
                                        {categorie_typeprods.map((item, i) => (
                                            <div
                                                className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                                key={item['id']}
                                            >
                                                <SingleTypeProduct item={item} key={item['id']} baseUrl="typeprods" />
                                            </div>
                                        ))}
                                    </div>
                                </div> 
                                <div id="universdescription"></div>
                                <div className="row product-grid-3">
                                <div id="universdescription"></div>
                                    <div className="container">
                                        <p dangerouslySetInnerHTML={{__html: typeprod['attributes']['TEXTE_FR']}} className="mt-25"></p>  
                                    </div>
                                </div>
                            </div> 
                        </div>                                            
                    </div>
                </section>
        </>
    )
}

export async function getServerSideProps (context) { 
    
    // Import qs
    const qs = require('qs')

    // Variables 
    let categorie_typeprods_Props = []
    const produit_Props = {marques:[], prix:[], designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}
    let filters = {marque:[], prix:[], designer:[], style:[], couleur:[], motif:[], materiau:[]}
    let filteredProduits  = []
 
    // Typeprod begin 
    const query = qs.stringify({
        populate: [
            'category.rayondetail',
            'category.typeprods.produits',
            'produits.exposant',
            'typeprods_has.produits',
            'produits.style',
            'produits.ambiance',
            'produits.couleur',
            'produits.motif',
            'produits.pay',
            'produits.materiau',    
            'produits.fabrication'    
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const typeprodRes = await axios.get(`http://localhost:1337/api/typeprods/${context.params.slug}?${query}`)

    // Compter le nombre de produits pour chaque typeprod 
    typeprodRes.data.data.attributes.category.data.attributes.typeprods.data.forEach(typeprod => {
        categorie_typeprods_Props.push({item : typeprod , count : typeprod.attributes.produits.data.length})
    })

    // Création des filtres
    typeprodRes.data.data.attributes.produits.data.forEach(produit => {
        produit_Props.marques.push(produit)
        produit_Props.prix.push(produit)
        produit_Props.designers.push(produit)
        produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
        produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
        produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
        produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)
    })

    // Compter le nombre de produits pour chaque filtre 
    produit_Props.marques=handleCountProductsOfEachFilter(produit_Props.marques,'MARQUE')
    produit_Props.prix=handleCountProductsOfEachPrice(produit_Props.prix,'TARIF_PUB', [0,150,350,500,750,1000,2000,1000000])
    produit_Props.designers=handleCountProductsOfEachFilter(produit_Props.designers,'DESIGNER')
    produit_Props.styles=handleCountProductsOfEachFilter(produit_Props.styles,'LIB_FR')
    produit_Props.couleurs=handleCountProductsOfEachFilter(produit_Props.couleurs,'LIB_FR')              
    produit_Props.motifs=handleCountProductsOfEachFilter(produit_Props.motifs,'LIB_FR')
    produit_Props.materiaux=handleCountProductsOfEachFilter(produit_Props.materiaux,'LIB_FR')

    // Recupérer la liste des filtres a partir de l'url 
    if(context.query.marque){
        filters.marque = typeof context.query.marque == 'string' ? [parseInt(context.query.marque)] : context.query.marque.map(element=>parseInt(element))
    }
    if(context.query.designer){
        filters.designer = typeof context.query.designer == 'string' ? [parseInt(context.query.designer)] : context.query.designer.map(element=>parseInt(element))
    }
    if(context.query.prix){
        filters.prix = typeof context.query.prix == 'string' ? [parseInt(context.query.prix)] : context.query.prix.map(element=>parseInt(element))
    }
    if(context.query.style){
        filters.style = typeof context.query.style == 'string' ? [parseInt(context.query.style)] : context.query.style.map(element=>parseInt(element))
    }
    if(context.query.couleur){
        filters.couleur = typeof context.query.couleur == 'string' ? [parseInt(context.query.couleur)] : context.query.couleur.map(element=>parseInt(element))
    }
    if(context.query.motif){
        filters.motif = typeof context.query.motif == 'string' ? [parseInt(context.query.motif)] : context.query.motif.map(element=>parseInt(element))
    }
    if(context.query.materiau){
        filters.materiau = typeof context.query.materiau == 'string' ? [parseInt(context.query.materiau)] : context.query.materiau.map(element=>parseInt(element))
    }

    // Ordonner les produits selon leur Status (client ou pas client)
    filteredProduits= handleSortByClientOrNotClient(typeprodRes.data.data.attributes.produits.data, 'exposant', 'CLIENT_ABONNEMENT_PAYANT')
    
    console.log(typeprodRes.data.data.attributes.typeprods_has.data)

    return {
        props: {
            produit_Props : produit_Props,
            typeprod : typeprodRes.data.data,  
            categorie : typeprodRes.data.data.attributes.category.data,
            produits : filteredProduits,
            univers : typeprodRes.data.data.attributes.category.data.attributes.rayondetail.data,
            categorie_typeprods_Props : categorie_typeprods_Props,
            categorie_typeprods : typeprodRes.data.data.attributes.typeprods_has.data,
            filtersInitail : filters
        }
    }
}

export default Typeproduit
