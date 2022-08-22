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
    const res = await axios.get("http://decotest2.herokuapp.com/api/rayonbases")
    const univerbases = res.data.data

    // get superunivers
    const res2 = await axios.get("http://decotest2.herokuapp.com/api/superuniversdetailss")
    const superuniversdetails = res2.data.data

   fs.createReadStream('C:/Users/Stanislas/Documents/SALIM_PROJECTS/strapi_decofinder_website/data/RAYON_DETAILS.csv')
    .pipe(csv())
    .on('data', (row) => {
        const findUnivBase = univerbases.find(element=>element['attributes']['CLE_RAYON'] == row['CLE_RAYON'])
        if(findUnivBase){
            const findSuperUnivers = superuniversdetails.filter(element=>element['attributes']['CLE_SUPERUNIVERS']==findUnivBase['attributes']['CLE_SUPERUNIVERS'])
            for (let i =0; i<5 ; i++){
                if (row['CLE_LANG']==i){
                    row['superuniversdetail'] = parseInt(findSuperUnivers.find(element=>element['attributes']['CLE_LANG']==i)['id'])
                }
            }
            const obj = {
                data : row
            }
            fetch ("http://decotest2.herokuapp.com/api/rayondetails", {
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


