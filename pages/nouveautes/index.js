import CategoryProduct from "../../components/ecommerce/Filter/CategoryProduct"
import Breadcrumb2 from "../../components/layout/Breadcrumb2"
import Nouveaute from "../../components/ecommerce/Nouveaute"
import Pagination from "../../components/ecommerce/Pagination"
import ShowSelect from "../../components/ecommerce/Filter/ShowSelect"
import PriceRangeSlider from "../../components/ecommerce/Filter/PriceRangeSlider"
import VendorFilter from "../../components/ecommerce/Filter/VendorFilter"
// My imports
import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import axios from "axios"

const countElements = (arr, prop) => {
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

const ProductId = ({ produit_Props, nouveautes }) => {



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

    const [filterPrix, setFilterPrix] =useState([])
    const [filterCouleur, setFilterCouleur] =useState([])
    const [filterMotif, setFilterMotif] = useState([])
    const [filterStyle, setFilterStyle] = useState([])    
    const [filterDesigner, setFilterDesigner] = useState([])
    const [filterMarque, setFilterMarque] = useState([])

    useEffect(()=>{   
        const tab = []
        for (let i=1; i<nouveautesState.length/limit+1;i++){
            tab.push(i)
        }
        setPages(tab)
    },[limit])

    useEffect(()=>{
        // Annuler les filtres de pagination et de limit de nouveautées affichés 
        setLimit(nouveautes.length)

        // Initialiser les nouveautées à filtrer
        const nouveautesFiltered = [...nouveautes]

        // Filtrage des nouveautées 
        if(filterPrix.length>0){
            if(minPrix==filterPrix[0] && maxPrix==filterPrix[1]){
                nouveautesFiltered = [...nouveautes]
            } else {
                nouveautesFiltered=nouveautesFiltered.filter(nouveaute => parseFloat(nouveaute['attributes']['TARIF_PUB'])>=filterPrix[0] && parseFloat(nouveaute['attributes']['TARIF_PUB'])<=filterPrix[1])
            }
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
        if(filterDesigner.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>filterDesigner.includes(nouveaute['id']))
        }  
        if(filterMarque.length>0){
            nouveautesFiltered=nouveautesFiltered.filter(nouveaute=>filterMarque.includes(nouveaute['id']))
        }       
        setNouveautesState([...nouveautesFiltered])

    },[filterPrix, filterCouleur, filterMotif, filterStyle, filterDesigner, filterMarque])

    const handleFilter = (filterKey, value) => {
        if(filterKey=="prix"){
            setFilterPrix(value)
        }
        else if(filterKey=="couleur"){
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
            <Layout noBreadcrumb="d-none">
            <Breadcrumb2 
                title='Toutes les nouveautés'             
                />
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row flex-row">
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                            {   
                                produit_Props.maxprix &&
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
                            }   
                            {
                                produit_Props.marques.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Marques</label>
                                        <VendorFilter 
                                        elements={marques}
                                        filterKey='marque'
                                        handleFilter={handleFilter}
                                        prop='MARQUE'/>
                                    </div>
                                </div> 
                            }   
                            {
                                produit_Props.designers.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Designers</label>
                                        <VendorFilter 
                                        elements={designers}
                                        filterKey='designer'
                                        handleFilter={handleFilter}
                                        prop='DESIGNER'/>
                                    </div>
                                </div> 
                            }      
                            {
                                produit_Props.styles.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Styles</label>
                                        <VendorFilter 
                                        elements={styles}
                                        filterKey='style'
                                        handleFilter={handleFilter}
                                        prop='LIB_FR'/>
                                    </div>
                                </div> 
                            }  
                            {
                                produit_Props.couleurs.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Couleurs</label>
                                        <VendorFilter 
                                        elements={couleurs}
                                        filterKey='couleur'
                                        handleFilter={handleFilter}
                                        prop='LIB_FR'/>
                                    </div>
                                </div> 
                            }  
                            {
                                produit_Props.motifs.length>0&&
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Motifs</label>
                                        <VendorFilter 
                                        elements={motifs}
                                        filterKey='motif'
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
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-grid-3">
                                {
                                nouveautesState
                                .slice(currentPage*limit-limit, currentPage*limit)
                                .filter(x=>                                 nouveautesState
                                    .slice(currentPage*limit-limit, currentPage*limit).indexOf(x) < limit).map((item, i) => (
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
            </Layout>
        </>
    )
}


export async function getStaticProps (context) {
    
    // import qs
    const qs = require('qs')

    // variables 
    const produit_Props = {marques:[], minprix:0, maxprix:0, designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}

    const query = qs.stringify({

        populate: [
            'exposant',
            'style',
            'ambiance',
            'couleur',
            'motif',
            'pay',
            'materiau',    
            'fabrication',
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
        produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
        produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
        produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
        produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)
    })

    // count number of products for each filter characteristic begin 
    produit_Props.marques=countElements(produit_Props.marques,'MARQUE')
    produit_Props.designers=countElements(produit_Props.designers,'DESIGNER')
    produit_Props.styles=countElements(produit_Props.styles,'LIB_FR')
    produit_Props.couleurs=countElements(produit_Props.couleurs,'LIB_FR')              
    produit_Props.motifs=countElements(produit_Props.motifs,'LIB_FR')
    produit_Props.materiaux=countElements(produit_Props.materiaux,'LIB_FR')
    // count number of products for each filter characteristic end 
    // side filter end
    
    // get max and min price
    produit_Props.maxprix = Math.max(...NouveauteRes.data.data.map(o => o.attributes.TARIF_PUB))
    produit_Props.minprix = Math.min(...NouveauteRes.data.data.map(o => o.attributes.TARIF_PUB))

    return {
        props: {
            nouveautes : NouveauteRes.data.data,
            produit_Props : produit_Props
        }
    }
}


export default ProductId
