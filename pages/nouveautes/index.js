import Breadcrumb2 from "../../components/layout/Breadcrumb2"
import Layout from "../../components/layout/Layout"
import Nouveaute from "../../components/ecommerce/Nouveaute"
import Pagination from "../../components/ecommerce/Pagination"
import ShowSelect from "../../components/ecommerce/Filter/ShowSelect"
import SideFilter from "../../components/ecommerce/Filter/SideFilter"
import SideFilterPrice from "../../components/ecommerce/Filter/SideFilterPrice.js"
// My imports
import { useEffect, useState } from "react"

import axios from "axios"

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

const handleCountProductsOfEachPrice = (arr, prop, prices) => {

    const res = []
    for (let i=0; i<prices.length-1; i++){
        res.push({
            id : prices[i],
            item : [prices[i], prices[i+1]], 
            count : (arr.filter(element=>element['attributes']&&element['attributes'][prop]&&element['attributes'][prop]>prices[i]&&element['attributes'][prop]<prices[i+1])).length
        })
    }
    return(res) 
}

const ProductId = ({ produit_Props, nouveautes }) => {
   /* console.log(nouveautes.map(o=>o['attributes']['exposant'].data.id))
    //console.log(nouveautes.sort((a,b) => a['attributes']['CLIENT_ABONNEMENT_PAYANT']>b['attributes']['CLIENT_ABONNEMENT_PAYANT']).map(o=>o['attributes']['exposant'].data.id))
    console.log(nouveautes.sort((a,b) => (a['attributes'].typeprod['data']['attributes']['LIB_FR']> b['attributes'].typeprod['data']['attributes']['LIB_FR']) ? 1 : ((b['attributes'].typeprod['data']['attributes']['LIB_FR'] > a['attributes'].typeprod['data']['attributes']['LIB_FR']) ? -1 : 0)).map(o=>o['attributes']['exposant'].data.id))*/

    const [nouveautesState, setNouveautesState] = useState(nouveautes)
    const [limit, setLimit] = useState(nouveautes.length)
    const [pages, setPages]  = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const [minPrix, setMinPrix] =useState(produit_Props.minprix)
    const [maxPrix, setMaxPrix] =useState(produit_Props.maxprix)
    const [couleurs, setCouleurs] =useState(produit_Props.couleurs)
    const [motifs, setMotifs] = useState(produit_Props.motifs)
    const [styles, setStyles] = useState(produit_Props.styles)    
    const [designers, setDesigners] = useState(produit_Props.designers)
    const [marques, setMarques] = useState(produit_Props.marques)
    const [materiaux, setMateriaux] = useState(produit_Props.materiaux)
    const [prices, setPrices] = useState(produit_Props.prix)

    const [filterPrix, setFilterPrix] =useState([])
    const [filterCouleur, setFilterCouleur] =useState([])
    const [filterMotif, setFilterMotif] = useState([])
    const [filterStyle, setFilterStyle] = useState([])    
    const [filterDesigner, setFilterDesigner] = useState([])
    const [filterMarque, setFilterMarque] = useState([])
    const [filterMateriau, setFilterMateriau] = useState([])
    const [filterPrice, setFilterPrice] = useState([])

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

        // Filtrage des nouveautées 
        /*if(filterPrix.length>0){
            if(minPrix==filterPrix[0] && maxPrix==filterPrix[1]){
                nouveautesFiltered = [...nouveautes]
            } else {
                nouveautesFiltered=nouveautesFiltered.filter(nouveaute => parseFloat(nouveaute['attributes']['TARIF_PUB'])>=filterPrix[0] && parseFloat(nouveaute['attributes']['TARIF_PUB'])<=filterPrix[1])
            }
        }*/
        if(filterPrice.length>0){
            console.log(filterPrice)
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
        setNouveautesState([...nouveautesFiltered])

        // Annuler les filtres de pagination et de limit de nouveautées affichés 
        setLimit(nouveautesFiltered.length)    
        
        console.log(nouveautesFiltered)

    },[filterPrix, filterCouleur, filterMotif, filterStyle, filterDesigner, filterMarque, filterMateriau, filterPrice])

    const handleFilter = (filterKey, value) => {
        /*if(filterKey=="prix"){
            setFilterPrix(value)
        }*/
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

    const next = () => {
        /*let nouveautesLocal = [...nouveautesState]
        setNouveautesState(nouveautesLocal.slice((currentPage + 1)*limit-limit, (currentPage + 1)*limit))*/
        setCurrentPage((currentPage )=>currentPage + 1)
    }

    const prev = () => {
        /*let nouveautesLocal = [...nouveautesState]
        setNouveautesState(nouveautesLocal.slice((currentPage - 1)*limit-limit, (currentPage - 1)*limit))*/
        setCurrentPage((currentPage)=>currentPage - 1)
    }

    const handleActive = (item) => {
        /*let nouveautesLocal = [...nouveautesState]
        setNouveautesState(nouveautesLocal.slice(item*limit-limit, item*limit))*/
        setCurrentPage(item)
    }

    const selectChange = (e) => {
        //setNouveautesState([...nouveautes])
        setLimit(Number(e.target.value))
        setCurrentPage(1)
    }

    return (
        produit_Props &&
        <>
            <Breadcrumb2 
                title='Toutes les nouveautés'             
                />
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row flex-row">
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                            {  /* 
                                maxPrix>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Prix</label>
                                        <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <PriceRangeSlider 
                                            min={minPrix} 
                                            max={maxPrix}
                                            filterKey='prix'
                                            handleFilter={handleFilter}
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div> 
                          */}   
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


export async function getStaticProps (context) {
    
    // import qs
    const qs = require('qs')

    // variables 
    const produit_Props = {marques:[], prix:[], minprix:0, maxprix:0, designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}

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
            NOUVEAUTE : { $eq: "1" } 
        }

    }, 
    {
        encodeValuesOnly: true, // prettify URL
    })
    
    const NouveauteRes = await axios.get(`http://localhost:1337/api/produits/?${query}`)

    // side filter begin 
    NouveauteRes.data.data.forEach(produit => {
        produit_Props.marques.push(produit)
        produit_Props.designers.push(produit)
        produit_Props.prix.push(produit)
        produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
        produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
        produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
        produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)
    })

    // count number of products for each filter characteristic begin 
    produit_Props.marques=handleCountProductsOfEachFilter(produit_Props.marques,'MARQUE')
    produit_Props.designers=handleCountProductsOfEachFilter(produit_Props.designers,'DESIGNER')
    produit_Props.prix=handleCountProductsOfEachPrice(produit_Props.prix, 'TARIF_PUB', [0,150,350,500,750,1000,2000,1000000])
    produit_Props.styles=handleCountProductsOfEachFilter(produit_Props.styles,'LIB_FR')
    produit_Props.couleurs=handleCountProductsOfEachFilter(produit_Props.couleurs,'LIB_FR')              
    produit_Props.motifs=handleCountProductsOfEachFilter(produit_Props.motifs,'LIB_FR')
    produit_Props.materiaux=handleCountProductsOfEachFilter(produit_Props.materiaux,'LIB_FR')
    // count number of products for each filter characteristic end 
    // side filter end
    
    // get max and min price
    produit_Props.maxprix = Math.max(...NouveauteRes.data.data.map(o => o.attributes.TARIF_PUB))
    produit_Props.minprix = Math.min(...NouveauteRes.data.data.map(o => o.attributes.TARIF_PUB))

    // sort nouveautes    

    return {
        props: {
            nouveautes : NouveauteRes.data.data,
            produit_Props : produit_Props
        }
    }
}


export default ProductId