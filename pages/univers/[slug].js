import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct from "../../components/ecommerce/Filter/CategoryProduct";
import QuickView from "../../components/ecommerce/QuickView";
import SingleProduct from "../../components/ecommerce/SingleProductCopy";
import Breadcrumb2 from "../../components/layout/Breadcrumb2";
import Layout from "../../components/layout/Layout";
import { fetchProduct } from "../../redux/action/product";

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

const Products = ({ products, productFilters, fetchProduct, univers, categories, univers_categories_Props, produit_Props, superunivers, categories_Props }) => {

    let Router = useRouter(),
        searchTerm = Router.query.search,
        showLimit = 12,
        showPagination = 4;

    let [pagination, setPagination] = useState([]);
    let [limit, setLimit] = useState(showLimit);
    let [pages, setPages] = useState(Math.ceil(products.items.length / limit));
    let [currentPage, setCurrentPage] = useState(1);

    const [showUnivers, setShowUnivers] = useState(true)
    const [showCategories, setShowCategories] = useState(true)
    const [showMarques, setShowMarques] = useState(true)
    const [showPrix, setShowPrix] = useState(false)   
    const [showDesigners, setShowDesigners] = useState(false)
    const [showStyles, setShowStyles] = useState(false)
    const [showCouleurs, setShowCouleurs] = useState(false)
    const [showMotifs, setShowMotifs] = useState(false)
    const [showMateriaux, setShowMateriaux] = useState(false)

    useEffect(() => {
        fetchProduct(searchTerm, "/static/product.json", productFilters);
        cratePagination();
    }, [productFilters, limit, pages, products.items.length]);

    const cratePagination = () => {
        // set pagination
        let arr = new Array(Math.ceil(products.items.length / limit))
            .fill()
            .map((_, idx) => idx + 1);

        setPagination(arr);
        setPages(Math.ceil(products.items.length / limit));
    };

    const startIndex = currentPage * limit - limit;
    const endIndex = startIndex + limit;
    const getPaginatedProducts = products.items.slice(startIndex, endIndex);

    let start = Math.floor((currentPage - 1) / showPagination) * showPagination;
    let end = start + showPagination;
    const getPaginationGroup = pagination.slice(start, end);

    const next = () => {
        setCurrentPage((page) => page + 1);
    };

    const prev = () => {
        setCurrentPage((page) => page - 1);
    };

    const handleActive = (item) => {
        setCurrentPage(item);
    };

    const selectChange = (e) => {
        setLimit(Number(e.target.value));
        setCurrentPage(1);
        setPages(Math.ceil(products.items.length / Number(e.target.value)));
    };

    return (
        univers&&
        <>
            <Layout noBreadcrumb="d-none">
            <Breadcrumb2 
                title='Univers' 
                elements={[superunivers['attributes']['LIB'], univers['attributes']['LIB']]} 
                description={univers['attributes']['DOSSIER_RESUME']}
                description2={univers['attributes']['DOSSIER_TEXTE']}                
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
                                        {showCategories&&<CategoryProduct items={categories_Props} prop='LIB_FR'/>}
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
                                        {showUnivers&&<CategoryProduct items={univers_categories_Props} prop='LIB'/>}
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
                                    {categories.map((item, i) => (
                                        <div
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                            key={i}
                                        >
                                            <SingleProduct item={item} />
                                        </div>
                                    ))}
                                <div className="row product-grid-3">
                                <div className="container">
                                    <p dangerouslySetInnerHTML={{__html: univers['attributes']['DOSSIER_TEXTE']}} className="mt-25"></p>  
                                </div>
                                </div>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </section>
                <QuickView />
            </Layout>
        </>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
    productFilters: state.productFilters,
});

const mapDidpatchToProps = {
    // openCart,
    fetchProduct,
    // fetchMoreProduct,
};

export default connect(mapStateToProps, mapDidpatchToProps)(Products);

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
            'superuniversdetail.rayondetails',
            'superuniversdetail.rayondetails.categories.typeprods.produits',
            'categories.typeprods.produits.style',
            'categories.typeprods.produits.ambiance',
            'categories.typeprods.produits.couleur',
            'categories.typeprods.produits.motif',
            'categories.typeprods.produits.pay',
            'categories.typeprods.produits.materiau',    
            'categories.typeprods.produits.fabrication',
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const universRes = await axios.get(`http://localhost:1337/api/rayondetails/2?${query}`)

    const produit_Props = {marques:[], prix:[], designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}
    universRes.data.data.attributes.categories.data.forEach(categorie => {
        categorie.attributes.typeprods.data.forEach(typeprod => {
            typeprod.attributes.produits.data.forEach(produit => {
                produit_Props.marques.push(produit)
                produit_Props.prix.push(produit)
                produit_Props.designers.push(produit)
                produit.attributes['style']&&produit_Props.styles.push(produit.attributes['style'].data)
                produit.attributes['couleur']&&produit_Props.couleurs.push(produit.attributes['couleur'].data)
                produit.attributes['motif']&&produit_Props.motifs.push(produit.attributes['motif'].data)
                produit.attributes['materiau']&&produit_Props.materiaux.push(produit.attributes['materiau'].data)
            })
        })
    })

    produit_Props.marques=countElements(produit_Props.marques,'MARQUE')
    produit_Props.prix=countElements(produit_Props.prix,'TARIF_PUB')
    produit_Props.designers=countElements(produit_Props.designers,'DESIGNER')
    produit_Props.styles=countElements(produit_Props.styles,'LIB_FR')
    produit_Props.couleurs=countElements(produit_Props.couleurs,'LIB_FR')              
    produit_Props.motifs=countElements(produit_Props.motifs,'LIB_FR')
    produit_Props.materiaux=countElements(produit_Props.materiaux,'LIB_FR')


    let univers_categories_Props = []
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

    let categories_Props = []
    universRes.data.data.attributes.categories.data.forEach(categorie => {
        let count = 0
        categorie.attributes.typeprods.data.forEach(typeprod => {
            typeprod.attributes.produits.data.forEach(produit => {
            count+=1
            })
        })
        categories_Props.push({item : categorie , count : count})
    })

    return {
        props: {
            univers : universRes.data.data,
            categories : universRes.data.data.attributes.categories.data,
            univers_categories : universRes.data.data.attributes.superuniversdetail.data.attributes.rayondetails.data,
            produit_Props : produit_Props,
            univers_categories_Props : univers_categories_Props,
            superunivers : universRes.data.data.attributes.superuniversdetail.data,
            categories_Props : categories_Props
        }
      }
}
