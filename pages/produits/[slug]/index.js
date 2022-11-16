
// My imports
import { useState } from "react";
import axios from "axios"
import ProductDetails from "../../../components/ecommerce/ProductDetails";

import ModalPopup from '../../../components/elements/ModalPopup'

const ProductId = ({produit}) => {

    const [openClass, setOpenClass] = useState(1)

    return (
        <>
            <div className="container">
                <ProductDetails  produit={produit} setOpenClass={setOpenClass}/>
                <ModalPopup openClass={openClass} setOpenClass={setOpenClass} produit={produit}/>
            </div>
        </>
    )
}
export default ProductId

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

    // query categories begin 
    const query = qs.stringify({

        populate: [
            'typeprod.category.rayondetail',
            'exposant',
            'style',
            'ambiance',
            'couleur',
            'motif',
            'pay',
            'materiau',    
            'fabrication',
            'lienrevendeurproduits.exposant'
        ]
        
    }, {
        encodeValuesOnly: true, // prettify URL      
    })

    const produitRes = await axios.get(`http://localhost:1337/api/produits/${context.params.slug}?${query}`)

    return {
        props: {
            produit : produitRes.data.data
        }
      }
}


