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


    fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/RAYON_BASE.csv')
    .pipe(csv())
    .on('data', (row) => {
        const obj = {
            data : row
        }

        row['id'] = row['CLE_RAYON']
        row['slug'] = row['CLE_RAYON']

        fetch ("http://localhost:1337/api/rayonbases", {
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


