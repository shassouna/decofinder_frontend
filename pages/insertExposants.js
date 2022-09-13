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


   fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/EXPOSANT_mini.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }
        // get rayondetails
        row['rayondetail'] = parseInt(row["CLE_RAYON_PRINCIPAL"])

        // slug 
        row['slug'] = row['CLE_EXPOSANT']
        row['id'] = row['CLE_EXPOSANT']

        const obj = {
            data : row  
        }
        fetch ("http://localhost:1337/api/exposants", {
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


