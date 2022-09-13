
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

   fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/PRODUIT2.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }

        // get exposants
        row['exposant'] = row['CLE_EXPOSANT']

        // get typeprods
        row['typeprod'] = row['CLE_TYPE_PROD']    

        // get ambiances
        row['ambiance'] = row['CLE_AMBIANCE']

        // get motifs
        row['motif'] = row['CLE_MOTIF']

        // get pays
        row['pay'] = row['CLE_PAYS']

        // get materiaux
        row['materiau'] = row['CLE_MATERIAU1']

        // get couleurs
        row['couleur'] = row['CLE_COULEUR']

        // get styles
        row['style'] = row['CLE_STYLE']

        // get fabrications
        row['fabrication'] = row['CLE_FABRICATION']

        // get slug
        row['slug'] = row["NUMERO"]
        row['id'] = row["id"]

        const obj = {
            data : row
        }
        fetch ("http://localhost:1337/api/produits", {
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
