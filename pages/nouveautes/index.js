// import from components/layout
import Breadcrumb2 from "../../components/layout/Breadcrumb2"

// import from ecommerce/layout
import Nouveaute from "../../components/ecommerce/Nouveaute"
import Pagination from "../../components/ecommerce/Pagination"
import ShowSelect from "../../components/ecommerce/Filter/ShowSelect"
import SideFilter from "../../components/ecommerce/Filter/SideFilter"
import SideFilterPrice from "../../components/ecommerce/Filter/SideFilterPrice"

// import from next
import { useRouter } from "next/router"

// import from react
import { useEffect, useState } from "react"

// import libraries
import axios from "axios"

// compter le nombre de produits pour un filtre x 
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

// compter le nombre de produits pour le filtre prix
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

// trier un tableau de produits par ordre alphabétique selon une propriété  
const handleSortByAlphabet = (tab, lib1, lib2) => {
    tab.sort(function(a, b){
        if(a['attributes'][lib1]['data']['attributes'][lib2]< b['attributes'][lib1]['data']['attributes'][lib2]) { return -1; }
        if(a['attributes'][lib1]['data']['attributes'][lib2]> b['attributes'][lib1]['data']['attributes'][lib2]) { return 1; }
        return 0;
    })
    return tab
}

// trier un tableau de produis selon s'il est client ou pas client
const handleSortByClientOrNotClient = (tab, lib1, lib2) => {
    return tab.sort((a,b) => (a['attributes'][lib1]['data']['attributes'][lib2] > b['attributes'][lib1]['data']['attributes'][lib2]) ? -1 : ((b['attributes'][lib1]['data']['attributes'][lib2] > a['attributes'][lib1]['data']['attributes'][lib2]) ? 1 : 0))
}

const Nouveautes = ({ produit_Props, nouveautes, filtersInitail }) => {

    // ----------------------------------------------------Routers Début----------------------------------------------------
    const router = useRouter()
    // ----------------------------------------------------Routers Fin----------------------------------------------------
    
    // ----------------------------------------------------States Begin----------------------------------------------------
    // Liste des nouveautés 
    const [nouveautesState, setNouveautesState] = useState([])

    // Nombre Maximum des nouveautés à afficher
    const [limit, setLimit] = useState(nouveautes.length)

    // Nombre de page de pagination 
    const [pages, setPages]  = useState([])

    // La page actuelle sur laquelle on se trouve
    const [currentPage, setCurrentPage] = useState(1)

    // Liste des filtres proposés à la gauche de la page 
    const [couleurs, setCouleurs] =useState([])
    const [motifs, setMotifs] = useState([])
    const [styles, setStyles] = useState([])    
    const [designers, setDesigners] = useState([])
    const [marques, setMarques] = useState([])
    const [materiaux, setMateriaux] = useState([])
    const [prices, setPrices] = useState([])

    // Les filtres actuelles choisi par l'utilisateur 
    const [filterPrice, setFilterPrice] = useState([])
    const [filterCouleur, setFilterCouleur] =useState([])
    const [filterMotif, setFilterMotif] = useState([])
    const [filterStyle, setFilterStyle] = useState([]) 
    const [filterMateriau, setFilterMateriau] = useState([])   
    const [filterDesigner, setFilterDesigner] = useState([])
    const [filterMarque, setFilterMarque] = useState([])
    // ----------------------------------------------------States Fin----------------------------------------------------

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
        for (let i=1; i<nouveautesState.length/limit+1;i++){
            tab.push(i)
        }
        setPages(tab)
    },[limit])

    useEffect(()=>{

        // Initialiser les nouveautées à filtrer
        const nouveautesFiltered = [...nouveautes]

        // Filtrage des nouveautés 
        if(filterPrice.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute => parseFloat(nouveaute['attributes']['TARIF_PUB'])>=filterPrice[0] && parseFloat(nouveaute['attributes']['TARIF_PUB'])<=filterPrice[1])
        }
        if(filterCouleur.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>nouveaute['attributes']['couleur']['data']&&filterCouleur.includes(nouveaute['attributes']['couleur']['data']['id']))
        }
        if(filterMotif.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>nouveaute['attributes']['motif']['data']&&filterMotif.includes(nouveaute['attributes']['motif']['data']['id']))
        }
        if(filterStyle.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>nouveaute['attributes']['style']['data']&&filterStyle.includes(nouveaute['attributes']['style']['data']['id']))
        }
        if(filterMateriau.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>nouveaute['attributes']['materiau']['data']&&filterMateriau.includes(nouveaute['attributes']['materiau']['data']['id']))
        }
        if(filterDesigner.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>filterDesigner.includes(nouveaute['id']))
        }  
        if(filterMarque.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>filterMarque.includes(nouveaute['id']))
        }     

        // Mettre à jour de la liste des nouveautés à afficher
        setNouveautesState([...nouveautesFiltered])

        // Mettre à jour le nombre des nouveautés maximum
        setLimit(nouveautesFiltered.length)    

        // Gestion du routeur 
        if(nouveautesFiltered.length != nouveautes.length){

            const obj ={...router.query}
            
            obj['prix']=filterPrice
            obj['couleur']=filterCouleur
            obj['motif']=filterMotif
            obj['style']=filterStyle
            obj['materiau']=filterMateriau
            obj['designer']=filterDesigner
            obj['marque']=filterMarque

            router.push(
                 'nouveautes',
                {query: {...obj}},
                {shallow : true}
            )
        }

    },[filterCouleur, filterMotif, filterStyle, filterDesigner, filterMarque, filterMateriau, filterPrice])
    // ----------------------------------------------------Effectes Fin----------------------------------------------------

    // ----------------------------------------------------Functions Début----------------------------------------------------
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
        <>
            <Breadcrumb2 
            title='Toutes les nouveautés'             
            />
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row">
                        <div className="col-lg-1-5 primary-sidebar sticky-sidebar">  
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
                            <div className="shop-product-fillter">
                                <div className="totall-product">
                                    <p>
                                        <strong className="text-brand">
                                            {nouveautesState.filter(x=> nouveautesState.indexOf(x) < limit).length}
                                        </strong>
                                        Nouveautés trouvés
                                    </p>
                                </div>
                                <div className="sort-by-product-area">
                                    <div className="sort-by-cover mr-10">
                                        <ShowSelect
                                            selectChange={selectChange}
                                            showLimit={nouveautesState.length}
                                            limitValue={limit}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row product-grid-3">
                            {
                            nouveautesState
                            .slice(currentPage*limit-limit, currentPage*limit)
                            .filter(x=>nouveautesState.slice(currentPage*limit-limit, currentPage*limit).indexOf(x) < limit).map((item, i) => (
                                <div
                                    className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                    key={item['id']}
                                >
                                    <Nouveaute item={item} key={item['id']}/>
                                    <p>{item.attributes['typeprod']['data']['attributes']['LIB_FR']}</p>
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
    let filteredNouveautes = []

    const query = qs.stringify({

        populate: [
            'exposant',
            'typeprod',
            'style',
            'ambiance',
            'couleur',
            'motif',
            'pay',
            'materiau',    
            'fabrication'
        ],
        filters: {
            NOUVEAUTE : { $eq : "1" },
            AUTORISATION : { $eq : "2"}
        }

    }, 
    {
        encodeValuesOnly: true, // prettify URL
    })
    
    const NouveauteRes = await axios.get(`http://localhost:1337/api/produits/?${query}`)

    // Création des filtres
    NouveauteRes.data.data.forEach(produit => {
        produit_Props.marques.push(produit)
        produit_Props.designers.push(produit)
        produit_Props.prix.push(produit)
        produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
        produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
        produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
        produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)
    })

    // Compter le nombre de produits pour chaque filtre
    produit_Props.marques=handleCountProductsOfEachFilter(produit_Props.marques,'MARQUE')
    produit_Props.designers=handleCountProductsOfEachFilter(produit_Props.designers,'DESIGNER')
    produit_Props.prix=handleCountProductsOfEachPrice(produit_Props.prix, 'TARIF_PUB', [0,150,350,500,750,1000,2000,1000000])
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
    filteredNouveautes = handleSortByClientOrNotClient(NouveauteRes.data.data, 'exposant', 'CLIENT_ABONNEMENT_PAYANT')
    
    // Ordonner les produits selon l'ordre alphabétique
    filteredNouveautes = handleSortByAlphabet(filteredNouveautes, 'typeprod', 'LIB_FR')
    
    return {
        props: {
            nouveautes : filteredNouveautes,
            produit_Props : produit_Props,
            filtersInitail : filters
        }
    }
}


export default Nouveautes
