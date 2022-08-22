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

    // get rayonbases
    const res = await axios.get("http://decotest2.herokuapp.com/api/rayonbases")
    const univerbases = res.data.data

    // get superunivers
    const res2 = await axios.get("http://decotest2.herokuapp.com/api/superuniversdetailss")
    const superuniversdetails = res2.data.data

    // get rayondetails
    const res3 = await axios.get("http://decotest2.herokuapp.com/api/rayondetails")
    const univerrayondetails = res3.data.data


   fs.createReadStream('C:/Users/Stanislas/Documents/strapi_decofinder_website/data/EXPOSANT_mini.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }
        // get rayondetails
        const rayondetail = univerrayondetails.find(element=>element['attributes']['CLE_RAYON'] == row["CLE_RAYON_PRINCIPAL_MANUEL"])
        row['rayondetail'] = rayondetail?parseInt(rayondetail['id']):null

        // get superuniversdetails
        if(rayondetail){
            const univerbase = univerbases.find(element=>element["attributes"]["CLE_RAYON"]==rayondetail["attributes"]["CLE_RAYON"])
            const superuniversdetail = superuniversdetails.find(element=>element['attributes']['CLE_SUPERUNIVERS'] == univerbase['attributes']["CLE_SUPERUNIVERS"])
            row['superuniversdetail'] = superuniversdetail?parseInt(superuniversdetail['id']):null
        }

        const obj = {
            data : row  
        }
        fetch ("http://decotest2.herokuapp.com/api/exposants", {
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


