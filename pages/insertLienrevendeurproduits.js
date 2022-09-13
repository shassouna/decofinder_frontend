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
    const res = await axios.get("http://localhost:1337/api/exposants")
    const exposants = res.data.data

   fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/LIEN_REVENDEUR_PRODUIT.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }

        // get exposant
        const exposant = exposants.find(element=>element['attributes']['CLE_EXPOSANT'] == row["CLE_EXPOSANT_REVENDEUR"])
        row['exposant'] = row["CLE_EXPOSANT_REVENDEUR"]
        row['nom_exposant'] = exposant?exposant['attributes']['NOM']:null 
        
        // get produit
        row['produit'] = row["NUMERO"]

        // get slug
        row['slug'] = row['CLE_LIEN_REVENDEUR_PRODUIT']
        row['id'] = row['CLE_LIEN_REVENDEUR_PRODUIT']
        
        const obj = {
            data : row  
        }
        fetch ("http://localhost:1337/api/lienrevendeurproduits", {
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


