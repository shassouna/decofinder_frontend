
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
    const res = await axios.get("http://decotest2.herokuapp.com/api/rayonbases")
    const univerbases = res.data.data

    // get superuniversdetails
    const res2 = await axios.get("http://decotest2.herokuapp.com/api/superuniversdetailss")
    const superuniversdetails = res2.data.data

    // get rayondetails
    const res3 = await axios.get("http://decotest2.herokuapp.com/api/rayondetails")
    const univerrayondetails = res3.data.data

    // get typeproduits
    const res4 = await axios.get("http://decotest2.herokuapp.com/api/typeprods")
    const typeprodsdetails = res4.data.data

    // get exposants
    const res5 = await axios.get("http://decotest2.herokuapp.com/api/exposants")
    const exposants = res5.data.data

    // get ambiances 
    const res6 = await axios.get("http://decotest2.herokuapp.com/api/ambiances")
    const ambiances = res6.data.data   

    // get motifs 
    const res7 = await axios.get("http://decotest2.herokuapp.com/api/motifs")
    const motifs = res7.data.data  

    // get pays
    const res8 = await axios.get("http://decotest2.herokuapp.com/api/payss")
    const pays = res8.data.data  

    // get materiaux
    const res10 = await axios.get("http://decotest2.herokuapp.com/api/materiaus")
    const materiaux = res10.data.data 

    // get couleurs
    const res9 = await axios.get("http://decotest2.herokuapp.com/api/couleurs")
    const couleurs = res9.data.data  

    // get styles
    const res11 = await axios.get("http://decotest2.herokuapp.com/api/styles")
    const styles = res11.data.data 

    // get fabrications
    const res12 = await axios.get("http://decotest2.herokuapp.com/api/fabrications")
    const fabrications= res12.data.data

   fs.createReadStream('C:/Users/Stanislas/Documents/strapi_decofinder_website/data/PRODUIT2.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }

        // get exposants
        const exposant = exposants.find(element=>element['attributes']['CLE_EXPOSANT'] == row['CLE_EXPOSANT'])
        row['exposant'] = exposant?parseInt(exposant['id']):null

        // get typeprods
        const typeprod = typeprodsdetails.find(element=>element['attributes']['CLE_TYPE_PROD'] == row['CLE_TYPE_PROD'])
        row['typeprod'] = typeprod?parseInt(typeprod['id']):null

        // get rayondetails
        const univers = typeprod ? univerrayondetails.find(element=>element['attributes']['CLE_RAYON'] == typeprod['attributes']['CLE_RAYON']):null
        row['rayondetail'] = univers?parseInt(univers['id']):null

        // find superunivers
        if(univers){
            const findUnivBase = univerbases.find(element=>element['attributes']['CLE_RAYON'] == univers['attributes']['CLE_RAYON'])
            if(findUnivBase){
                const superunivers = superuniversdetails.find(element=>element['attributes']['CLE_SUPERUNIVERS']==findUnivBase['attributes']['CLE_SUPERUNIVERS'])
                row['superuniversdetail'] = superunivers?parseInt(superunivers['id']):null  
            }
        }        

        // get ambiances
        const ambiance = ambiances.find(element=>element['attributes']['CLE_AMBIANCE'] == row['CLE_AMBIANCE'])
        row['ambiance'] = ambiance?parseInt(ambiance['id']):null

        // get motifs
        const motif = motifs.find(element=>element['attributes']['CLE_MOTIF'] == row['CLE_MOTIF'])
        row['motif'] = motif?parseInt(motif['id']):null

        // get pays
        const pay = pays.find(element=>element['attributes']['CLE_PAYS'] == row['CLE_PAYS'])
        row['pay'] = pay?parseInt(pay['id']):null

        // get materiaux
        const materiau = materiaux.find(element=>element['attributes']['CLE_MATERIAU'] == row['CLE_MATERIAU1'])
        row['materiau'] = materiau?parseInt(materiau['id']):null

        // get couleurs
        const couleur = couleurs.find(element=>element['attributes']['CLE_COULEUR'] == row['CLE_COULEUR'])
        row['couleur'] = couleur?parseInt(couleur['id']):null

        // get styles
        const style = styles.find(element=>element['attributes']['CLE_STYLE'] == row['CLE_STYLE'])
        row['style'] = style?parseInt(style['id']):null

        // get fabrications
        const fabrication = fabrications.find(element=>element['attributes']['CLE_FABRICATION'] == row['CLE_FABRICATION'])
        row['fabrication'] = fabrication?parseInt(fabrication['id']):null

        // get slug
        row['slug'] = row["NUMERO"]+""

        const obj = {
            data : row
        }
        fetch ("http://decotest2.herokuapp.com/api/produits", {
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
