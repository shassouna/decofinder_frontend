import React from 'react';
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
    const res = await axios.get("http://localhost:1337/api/rayonbases")
    const univerbases = res.data.data

   fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/RAYON_DETAILS.csv')
    .pipe(csv())
    .on('data', (row) => {
        //console.log(row['CLE_RAYON'])
        const findUnivBase = univerbases.find(element=>element['attributes']['CLE_RAYON'] == row['CLE_RAYON'])
        if(findUnivBase){
            row['CLE_SUPERUNIVERS'] = findUnivBase['attributes']['CLE_SUPERUNIVERS']
            row['superuniversdetail'] = parseInt(findUnivBase['attributes']['CLE_SUPERUNIVERS'])
            
            const obj = {
                data : row
            }

            row['id'] = row['CLE_RAYON']
            row['slug'] = row['CLE_RAYON']

            fetch ("http://localhost:1337/api/rayondetails", {
            method : "POST",
            headers : {
              "Content-Type": "application/json"
            },
            body : JSON.stringify(obj)
            }
            )
        }
    })  

   return {
    props : {
        data : []
    }
   }
}

            /*row['CLE_SUPERUNIVERS'] = findUnivBase['attributes']['CLE_SUPERUNIVERS']
            row['superuniversdetail'] = parseInt(findUnivBase['attributes']['CLE_SUPERUNIVERS'])
            
            const obj = {
                data : row
            }

            row['id'] = findUnivBase['CLE_RAYON']
            row['slug'] = findUnivBase['CLE_RAYON']

            fetch ("http://localhost:1337/api/rayondetails", {
            method : "POST",
            headers : {
              "Content-Type": "application/json"
            },
            body : JSON.stringify(obj)
            }
            )*/
