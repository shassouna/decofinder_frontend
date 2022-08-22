import React from 'react';
import axios from 'axios'


const Index = () => {
    return (
        <div></div>
    );
}

export default Index

export async function getStaticProps(context) {

    const fs = require('fs')
    const csv = require('csv-parser')

    const readDataFromCsvPromise = (filePath) => {
        return new Promise(function(resolve, reject) {
        const tab = []
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          tab.push(row) 
        })
        .on('end', () => {
            resolve(tab)
        })
        })
    }

    // get rayonbases
    const res3 = await axios.get("http://decotest2.herokuapp.com/api/rayonbases")
    const univerbases = res3.data.data

    // get rayondetails
    const res = await axios.get("http://decotest2.herokuapp.com/api/rayondetails")
    const univerrayondetails = res.data.data

    // get superuniversdetails
    const res2 = await axios.get("http://decotest2.herokuapp.com/api/superuniversdetailss")
    const superuniverrayondetails = res2.data.data

    const typeprods = await readDataFromCsvPromise('C:/Users/Stanislas/Documents/strapi_decofinder_website/data/TYPE_PROD2.csv')

    for (let row of typeprods) {
        // find univers
        const univers = univerrayondetails.find(element=>element['attributes']['CLE_RAYON']==row['CLE_RAYON'])
        row['rayondetail'] = univers?parseInt(univers['id']):null

        // find superunivers
        const findUnivBase = univerbases.find(element=>element['attributes']['CLE_RAYON'] == row['CLE_RAYON'])
        if(findUnivBase){
            const superunivers = superuniverrayondetails.find(element=>element['attributes']['CLE_SUPERUNIVERS']==findUnivBase['attributes']['CLE_SUPERUNIVERS'])
            row['superuniversdetail'] = superunivers?parseInt(superunivers['id']):null  
        }    
        // slug 
        row['slug'] = "typeproduit-"+row['CLE_TYPE_PROD']

        const obj = {
            data : row
        }
        fetch ("http://decotest2.herokuapp.com/api/typeprods", {
        method : "POST",
        headers : {
        "Content-Type": "application/json"
        },
        body : JSON.stringify(obj)
        }
        )
    }
   return {
    props : {
        data : []
    }
   }
}


