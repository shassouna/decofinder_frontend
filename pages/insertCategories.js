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

    const typeprods = await readDataFromCsvPromise('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/TYPE_PROD2.csv')

    for (let row of typeprods) {
        if(row['CLE_TYPE_PROD']==row['CLE_TYPE_PROD_CATEGORIE']){
            // find univers
            row['rayondetail'] = row['CLE_RAYON']

            // slug 
            row['slug'] = row['CLE_TYPE_PROD']
            row['id'] = row['CLE_TYPE_PROD']

            const obj = {
                data : row
            }
            fetch ("http://localhost:1337/api/categories", {
            method : "POST",
            headers : {
            "Content-Type": "application/json"
            },
            body : JSON.stringify(obj)
            }
            )
        }
    }
   return {
    props : {
        data : []
    }
   }
}


