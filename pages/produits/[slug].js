import ProductDetails from "../../components/ecommerce/ProductDetails"
import { fetchByCatagory } from "../../redux/action/product";
// My imports
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import axios from "axios"

const ProductId = ({produit}) => {

    const [related, setRelated] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        // With Category
        const allProducts = await fetchByCatagory("/static/product.json")
        setRelated(allProducts)
    }
    console.log(produit)
    return (
        related&&related.length>0&&
        <>
        <ProductDetails product={related[0]} produit={produit}/>
        </>
    )
}

export async function getStaticPaths() {

    const paths = []

    return {
        paths:paths,
        fallback : true
    }
}

export async function getStaticProps (context) {

    const produitRes = await axios.get(`http://decotest2.herokuapp.com/api/produits/15700?exposant,exposant.produits,lienrevendeurproduits,pay,couleur,materiau,motif,fabrication,style,ambiance`)

    const produit = produitRes.data

    return {
        props: {
            produit : produit
        }
      }
}


export default ProductId
