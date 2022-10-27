// import from components/Filter
import SideFilterLinks from "../../../components/ecommerce/Filter/SideFilterLinks"
import SideFilter from "../../../components/ecommerce/Filter/SideFilter"
import SideFilterPrice from "../../../components/ecommerce/Filter/SideFilterPrice"

// import from components/layout
import Breadcrumb2 from "../../../components/layout/Breadcrumb2"

// import from components/ecommerce
import SingleTypeProduct from "../../../components/ecommerce/SingleProductCopy"
import SingleProduct from "../../../components/ecommerce/SingleProduct"
import Pagination from "../../../components/ecommerce/Pagination"
import ShowSelect from "../../../components/ecommerce/Filter/ShowSelect"

// import from components/elementes
import Description from "../../../components/elements/Description"

// import from next
import { useRouter } from "next/router"
import Link from "next/link"

// import from react
import { useState, useEffect } from "react"

// import libraries
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

// Trier un tableau de produits par ordre alphabétique selon une propriété  
const handleSortByAlphabet = (tab, lib1, lib2) => {
    tab.sort(function(a, b){
        if(a['attributes'][lib1]['data']['attributes'][lib2]< b['attributes'][lib1]['data']['attributes'][lib2]) { return -1 }
        if(a['attributes'][lib1]['data']['attributes'][lib2]> b['attributes'][lib1]['data']['attributes'][lib2]) { return 1 }
        return 0
    })
    return tab
}

// Trier un tableau de produis selon s'il est client ou pas client
const handleSortByClientOrNotClient = (tab, lib1, lib2) => {
    return tab.sort((a,b) => (a['attributes'][lib1]['data']['attributes'][lib2] > b['attributes'][lib1]['data']['attributes'][lib2]) ? -1 : ((b['attributes'][lib1]['data']['attributes'][lib2] > a['attributes'][lib1]['data']['attributes'][lib2]) ? 1 : 0))
}

const Categorie = ({ typeprods, produit_Props, typeprods_Props, categorie, univers, univers_categories_Props, produits_categorie, filtersInitail, exposant, pays }) => {
console.log(pays)
    // ----------------------------------------------------Routers Début----------------------------------------------------
    const router = useRouter()
    // ----------------------------------------------------Routers Fin----------------------------------------------------  
    
    // ----------------------------------------------------States Begin----------------------------------------------------
    // Nombre Maximum des catégories à afficher
    const [limit, setLimit] = useState(produits_categorie.length)

    // Nombre de page de pagination 
    const [pages, setPages]  = useState([])

    // La page actuelle sur laquelle on se trouve
    const [currentPage, setCurrentPage] = useState(1)

    // Controller l'affichage du filtre à gauche qui contient la liste des univers
    const [showUnivers, setShowUnivers] = useState(true)
 
    // Controller l'affichage du filtre à gauche qui contient la liste des catégories   
    const [showCategories, setShowCategories] = useState(true)

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
        const tab = []
        for (let i=1; i<produitsState.length/limit+1;i++){
            tab.push(i)
        }
        setPages(tab)
    },[limit])

    useEffect(()=>{

        // Initialiser les nouveautées à filtrer
        const produitsFiltered = [...produits_categorie]

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

        // Mettre à jour la pagination
        setCurrentPage(1)   

        // Gestion du routeur 
        if(produitsFiltered.length != produits_categorie.length){

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
    // ----------------------------------------------------Effectes Fin----------------------------------------------------

    // ----------------------------------------------------Functions Début----------------------------------------------------
    // Afficher toute la description de la catégorie en bas de la page 
    const handleShowAllDescription = (value) => {
        router.push('#universdescription')
    }

    // Link to Categorie page ou typeprod page 
    const handleLinkToAnotherPage= (filterKey, idCategorie) => {

        if(filterKey=="categorie"){
            router.push({
                pathname: `/categories/${idCategorie}`,
                query: null
            })            
        }
        else if(filterKey=="typeprod"){
            router.push({
                pathname: `/typeprods/${idCategorie}`,
                query: null
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

    // Affichage de la page suivante (Gestion pagination)
    const next = () => {
        setCurrentPage((currentPage )=>currentPage + 1)
    }

    // Affichage de la page précédente (Gestion pagination)
    const prev = () => {
        setCurrentPage((currentPage)=>currentPage - 1)
    }

    // Affichage de la page choisi (Gestion pagination)
    const handleActive = (item) => {
        setCurrentPage(item)
    }

    // Mise à jour du nombre des produits affichés par page
    const selectChange = (e) => {
        setLimit(Number(e.target.value))
        setCurrentPage(1)
    }
    // ----------------------------------------------------Functions Fin----------------------------------------------------

    return (
        produit_Props &&
        <>
            <Breadcrumb2 
                title={'Catégorie ' + categorie['attributes']['LIB_FR'] + '-' + univers['attributes']['LIB']}
                elements={[univers['attributes']['LIB'], categorie['attributes']['LIB_FR']]} 
                description = {categorie['attributes']['TEXTE_FR'].split(`\n`)[0]+categorie['attributes']['TEXTE_FR'].split(`\n`)[1]}   
            />
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row">
                        <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                        <div className="mb-30 border-100">
                            <div className="vendor-info">

                                <h4 className="mb-5"><a className="text-heading">Coordonnées</a></h4>

                                <div className="ollow-social mb-20">
                                    <strong className="mb-15">{exposant['attributes']['ADRESSE']}</strong>
                                    <br/>
                                    <strong className="mb-15">{exposant['attributes']['CP']}</strong>
                                    <br/>
                                    <strong className="mb-15">{exposant['attributes']['VILLE']}</strong>
                                    <ul className="social-network">
                                        <li className="hover-up">
                                            <a href="#">
                                                <img src="/assets/imgs/theme/icons/social-tw.svg" alt="" />
                                            </a>
                                        </li>
                                        <li className="hover-up">
                                            <a href="#">
                                                <img src="/assets/imgs/theme/icons/social-fb.svg" alt="" />
                                            </a>
                                        </li>
                                        <li className="hover-up">
                                            <a href="#">
                                                <img src="/assets/imgs/theme/icons/social-insta.svg" alt="" />
                                            </a>
                                        </li>
                                        <li className="hover-up">
                                            <a href="#">
                                                <img src="/assets/imgs/theme/icons/social-pin.svg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="vendor-info">
                                    <ul className="ont-sm mb-20">
                                        <li><img className="mr-5" src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined, Utah 53127 United States</span></li>
                                        <li><img className="mr-5" src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                    </ul>
                                    <Link href="/vendor/1"><a className="btn btn-xs">Contact Seller <i className="i-rs-arrow-small-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
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
                                <SideFilterLinks 
                                items={univers_categories_Props} 
                                prop='LIB_FR'
                                filterKey='categorie'
                                handleLinkToAnotherPage = {handleLinkToAnotherPage}/>}
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
                                <SideFilterLinks 
                                items={typeprods_Props} 
                                prop='LIB_FR'
                                filterKey='typeprod'
                                handleLinkToAnotherPage = {handleLinkToAnotherPage}/>}
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
                            <h2>Choisissez un type-produit dans la catégorie {categorie['attributes']['LIB_FR']}</h2>
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
                            <div className="col-lg-5-5">
                                <br/><br/>
                                {
                                produitsState.length > 0 ?
                                <h2>Découvrez tous les produits de la catégorie {categorie['attributes']['LIB_FR']}</h2>
                                :<h2>Aucun produit trouvé</h2>  
                                }
                                <br/>
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>
                                            <strong className="text-brand">
                                                {produitsState.filter(x=> produitsState.indexOf(x) < limit).length}
                                            </strong>
                                            produits trouvés
                                        </p>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            <ShowSelect
                                                selectChange={selectChange}
                                                showLimit={produitsState.length}
                                                limitValue={limit}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-grid-3">
                                    {produitsState.slice(currentPage*limit-limit, currentPage*limit)
                                    .filter(x=>produitsState.slice(currentPage*limit-limit, currentPage*limit).indexOf(x) < limit).map((item, i) => ( 
                                        <div
                                            key={item["id"]}
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                        >
                                            <SingleProduct key={item["id"]} item={item} baseUrl='produits'/>
                                        </div>
                                    ))}
                                </div>
                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        <Pagination
                                            getPaginationGroup={pages}
                                            currentPage={currentPage}
                                            pages={pages}
                                            next={next}
                                            prev={prev}
                                            handleActive={handleActive}
                                        />
                                    </nav>
                                </div>
                            </div> 
                            {
                            categorie['attributes']['TEXTE_FR']&&
                            <>
                                <div id="universdescription"></div>
                                <div className="row product-grid-3">
                                    <div id="universdescription"></div>
                                        <div className="row product-grid-3">
                                            <Description description={categorie['attributes']['TEXTE_FR']}/>
                                        </div>
                                </div>
                            </>
                            }
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
    const produit_Props = {marques:[], prix:[], designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}
    let filters = {marque:[], prix:[], designer:[], style:[], couleur:[], motif:[], materiau:[]}
    let filteredProduits = []
    let typeprods_Props = []
    let produits_categorie = []
    let univers_categories_Props = []

    // Query categories 
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
            'typeprods.produits.fabrication',
            'typeprods.produits.typeprod',           
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const categorieRes = await axios.get(`http://localhost:1337/api/categories/${context.params.slug}?${query}`)

    // Compter le nombre de produits pour chaque catégorie
    categorieRes['data']['data']['attributes']['rayondetail']['data']['attributes']['categories']['data'].forEach(categorie => {
        let count = 0
        categorie['attributes']['typeprods']['data'].forEach(typeprod => {
            count += typeprod['attributes']['produits']['data'].length
        })
        univers_categories_Props.push({item : categorie , count : count})
    })

    // Création des filtres
    categorieRes['data']['data']['attributes']['typeprods']['data'].forEach(typeprod => {
        typeprod['attributes'].produits.data.forEach(produit => {
            produit_Props.marques.push(produit)
            produit_Props.prix.push(produit)
            produit_Props.designers.push(produit)
            produit['attributes']['style']&&produit_Props.styles.push(produit['attributes']['style'].data)
            produit['attributes']['couleur']&&produit_Props.couleurs.push(produit['attributes']['couleur'].data)
            produit['attributes']['motif']&&produit_Props.motifs.push(produit['attributes']['motif'].data)
            produit['attributes']['materiau']&&produit_Props.materiaux.push(produit['attributes']['materiau'].data)  

            // Recupérer tous les produits de la catégorie
            produits_categorie.push(produit)
        })

        typeprods_Props.push({item : typeprod , count : typeprod['attributes']['produits']['data'].length})    
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
    filteredProduits= handleSortByClientOrNotClient(produits_categorie, 'exposant', 'CLIENT_ABONNEMENT_PAYANT')
    
    // Ordonner les produits selon l'ordre alphabétique
    filteredProduits = handleSortByAlphabet(filteredProduits, 'typeprod', 'LIB_FR')

    // Query categories 
    const query2 = qs.stringify({

        populate: [
            'pay',         
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
    })

    const exposantRes = await axios.get(`http://localhost:1337/api/exposants/168?${query2}`)

    return {
        props: {
            produit_Props : produit_Props,
            typeprods : categorieRes.data.data.attributes.typeprods.data,  
            typeprods_Props : typeprods_Props,
            categorie : categorieRes.data.data,
            univers : categorieRes.data.data['attributes']['rayondetail'].data,
            univers_categories_Props : univers_categories_Props,
            produits_categorie : filteredProduits,
            filtersInitail : filters,

            exposant : exposantRes.data.data,
            pays : exposantRes.data.data.attributes.pay.data
        }
    }
}


export default Categorie
