
import axios from 'axios'

const Index = () => {
    return (
        <div></div>
    )
}

export default Index

export async function getStaticProps(context) {

    const fs = require('fs')
    const csv = require('csv-parser')

    // get rayonbases
    const res = await axios.get("http://decotest2.herokuapp.com/api/produits")
    const produits = res.data.data

    for (let produit of produits){
        fetch (`http://decotest2.herokuapp.com/api/produits/${produit.id}`, {
            method : "DELETE",
            headers : {
                "Content-Type": "application/json"
            }
            }
            )
    }
    
   return {
    props : {
        data : []
    }
   }
}