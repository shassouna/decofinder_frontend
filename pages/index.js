import CategoryTab from "../components/ecommerce/categoryTab";
import FetchTabSlider from "../components/ecommerce/fetchTabSlider";
import QuickView from "./../components/ecommerce/QuickView";
import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Intro1 from "../components/sliders/intro4";
import FourProducts from "./../components/elements/FourProducts";
import Description from "../components/elements/Contact";

// My imports 
import axios from 'axios'

export default function Home({menuHeaderData, fourProducts, nouveautes, inspirations}) {
    return (
        <>
            <IntroPopup />

                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-30">
                            <Intro1 />
                        </div>
                    </div>
                </section>

                <section className="banners mb-25">
                    <div className="container">
                        <div className="row">
                            <FourProducts fourProducts={fourProducts}/>
                        </div>
                    </div>
                </section>

                <section className="popular-categories section-padding">
                    <div className="container wow animate__fadeIn animate__animated">
                        <div className="section-title">
                            <div className="title">
                                <h3>Tous les Mega Univers :</h3>
                            </div>
                        </div>
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns">
                                <CategorySlider superuniversdetails={menuHeaderData}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <Description/>
                </section>

                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="col-lg-12">
                            <CategoryTab title="Les Nouveautés" produits={nouveautes}/>
                        </div>
                    </div>
                </section>

                <section className="section-padding pb-5">
                    <div className="container">
                        <FetchTabSlider typeprods={inspirations}/>
                    </div>
                </section>

                <QuickView />
        </>
    );
}

export async function getStaticProps(context) {

    // import qs
    const qs =require('qs')

    // --------------------------------------------Four Products Begin--------------------------------------------
    const fourProducts = {}
    // coupdecoeur 
    const queryCoupdecoeur = qs.stringify({
        filters: {
            coupdecoeur : { $eq: "1" } 
        },
        pagination: {
            page: 1,
            pageSize: 1,
          },
          populate: ['typeprod'],
      }, {
        encodeValuesOnly: true, // prettify URL
      })
    const CoupdecoeurCall = await axios.get(`http://localhost:1337/api/produits?${queryCoupdecoeur}`) 
    fourProducts.coupdecoeur = CoupdecoeurCall.data.data[0]

    // selections 
    const querySelections = qs.stringify(
        {
            filters: {
                selection : { $eq: "1" } 
            },
            pagination: {
                page: 1,
                pageSize: 1,
              },
              populate: ['typeprod'],
        }
    )
    const selectionsCall = await axios.get(`http://localhost:1337/api/produits?${querySelections}`)
    fourProducts.selection = selectionsCall.data.data[0]

    // a saisir 
    const queryAsaisir = qs.stringify(
        {
            filters: {
                asaisir : { $eq: "1" } 
            },
            pagination: {
                page: 1,
                pageSize: 1,
            },
            populate: ['typeprod'],
        }
    )
    const asaisirCall = await axios.get(`http://localhost:1337/api/produits?${queryAsaisir}`)
    fourProducts.asaisir = asaisirCall.data.data[0]
    // achat en ligne 
    const queryAchatEnLigne = qs.stringify(
        {
            filters: {
                achatenligne : { $eq: "1" } 
            },
            pagination: {
                page: 1,
                pageSize: 1,
            },
            populate: ['typeprod'],
        }
    )
    const achatenligneCall = await axios.get(`http://localhost:1337/api/produits?${queryAchatEnLigne}`)
    fourProducts.achatenligne = achatenligneCall.data.data[0]

    // nouveautes 
    const queryNouveautes = qs.stringify({
        filters: {
            NOUVEAUTE : { $eq: "1" } 
        },
        pagination: {
            page: 1,
            pageSize: 25,
          },
          populate: ['typeprod', 'exposant'],
      }, {
        encodeValuesOnly: true, // prettify URL
      });
    const NouveautesCall = await axios.get(`http://localhost:1337/api/produits?${queryNouveautes}`) 

    // types produits 
    const queryTypeprods = qs.stringify({
        pagination: {
            page: 1,
            pageSize: 5,
          },
          populate: ['category'],
      }, {
        encodeValuesOnly: true, // prettify URL
      });
    const TypeprodsCall = await axios.get(`http://localhost:1337/api/typeprods?${queryTypeprods}`) 

    // --------------------------------------------Four Products End--------------------------------------------   
    return {
        props: {
            fourProducts : fourProducts,
            nouveautes : NouveautesCall.data.data,
            inspirations : TypeprodsCall.data.data
        }, 
      }
}
