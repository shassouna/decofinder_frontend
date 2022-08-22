import React from 'react'
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

    // get exposants
    const res = await axios.get("http://decotest2.herokuapp.com/api/exposants")
    const exposants = res.data.data

    // get produits
    const res2 = await axios.get("http://decotest2.herokuapp.com/api/produits")
    const produits = res2.data.data

   fs.createReadStream('C:/Users/Stanislas/Documents/strapi_decofinder_website/data/LIEN_REVENDEUR_PRODUIT.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }

        // get exposant
        const exposant = exposants.find(element=>element['attributes']['CLE_EXPOSANT'] == row["CLE_EXPOSANT_REVENDEUR"])
        row['exposant'] = exposant?parseInt(exposant['id']):null
        row['nom_exposant'] = /*exposant?exposant['attributes']['NOM']:null*/ "Roche bobois"

        // get produit
        const produit = produits.find(element=>element['attributes']['NUMERO'] == row["NUMERO"])
        row['produit'] = produit?parseInt(produit['id']):null

        row['id'] = row['CLE_LIEN_REVENDEUR_PRODUIT']
        
        const obj = {
            data : row  
        }
        fetch ("http://decotest2.herokuapp.com/api/lienrevendeurproduits", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(obj)
        }
        )
    })  

   return {
    props : {
        data : []
    }
   }
}


