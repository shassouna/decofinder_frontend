// My imports 
import { useRouter } from "next/router";
import axios from 'axios'
import Breadcrumb2 from "../../../components/layout/Breadcrumb2";
import SingleUnivers from "../../../components/ecommerce/SingleUnivers";
import SingleTypeProduct from "../../../components/ecommerce/SingleProductCopy";
const Products = ({ superunivers, univers_superunivers, univers }) => {

    const router = useRouter()

    const handleShowAllDescription = (value) => {
        router.push('#superuniversdescription')
    }

    return (
        superunivers&&univers_superunivers&&univers&&
        <>
            <Breadcrumb2 
                title='Superunivers' 
                elements={[superunivers['attributes']['LIB']]} 
                description={superunivers['attributes']['DESCR'].split(`\n`)[0]+superunivers['attributes']['DESCR'].split(`\n`)[1]} 
                handleShowAllDescription = {handleShowAllDescription}             
            />
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row">
                        <div className="col-lg-4-5">
                            <br/><br/>
                            <h2>Les Univers {superunivers['attributes']['LIB']} :</h2>
                            <br/>
                            <div className="row product-grid-3">
                                {univers_superunivers.map((item) => (
                                    <div
                                        key={item["id"]}
                                        className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                    >
                                        <SingleUnivers key={item["id"]} item={item} baseUrl='univers'/>
                                    </div>
                                ))}
                            </div> 
                        </div>
                        {
                        univers.map(val=>(
                            <div className="col-lg-4-5">
                                <br/><br/>
                                <h2>{val['attributes']['LIB']} :</h2>
                                <br/>
                                <h6>Les catégories :</h6>
                                <br/>
                                <div className="row product-grid-3">
                                    {val.attributes.categories.data.map((item) => (
                                        <div
                                            key={item["id"]}
                                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                        >
                                            <SingleTypeProduct key={item["id"]} item={item} baseUrl="categories"/>
                                        </div>
                                    ))}
                                </div> 
                            </div>
                        ))
                        }
                    </div>   
                </div>
            </section>
            <div id="superuniversdescription"></div>
            <div className="row product-grid-3">
                <div className="container">
                    <p dangerouslySetInnerHTML={{__html: superunivers['attributes']['DESCR']}} className="mt-25"></p>  
                </div>
            </div>
        </>
    )
}

export default Products

export async function getStaticPaths() {

    const paths = []

    return {
        paths:paths,
        fallback : true
    }
}

export async function getStaticProps (context) {

    // import qs
    const qs = require('qs')

    // variables

    // query univers begin 
    const query = qs.stringify({
        populate: [
            'rayondetails.categories.typeprods.produits.style',
            'rayondetails.categories.typeprods.produits.ambiance',
            'rayondetails.categories.typeprods.produits.couleur',
            'rayondetails.categories.typeprods.produits.motif',
            'rayondetails.categories.typeprods.produits.pay',
            'rayondetails.categories.typeprods.produits.materiau',    
            'rayondetails.categories.typeprods.produits.fabrication',
            'rayondetails.categories.typeprods.produits.exposant'   
        ]
    }, {
        encodeValuesOnly: true, // prettify URL
    })

    const superUniversRes = await axios.get(`http://localhost:1337/api/superuniversdetailss/${context.params.slug}?${query}`)
    
    return {
        props: {
           superunivers : superUniversRes.data.data,
           univers_superunivers : superUniversRes.data.data.attributes.rayondetails.data,
           univers : superUniversRes.data.data.attributes.rayondetails.data
        }
      }
}
